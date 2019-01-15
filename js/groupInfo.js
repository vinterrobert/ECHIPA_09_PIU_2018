var list;

window.onload = init;


function init(){


	if(window.localStorage.getItem('groupWallet') !== null)
		$("#walletMessage").text(window.localStorage.getItem('groupWallet') + "RON");
	else
		$("#walletMessage").text("0 RON");

	if(window.localStorage.getItem('createdMember') === "1")
		$(".invisibleDiv").css("visibility", "visible");

	if(window.localStorage.getItem('groupTransactions') !== null){

	 list=window.localStorage.getItem('groupTransactions');
	 document.getElementById("transactionsInfo").outerHTML = list;

	}
}

function addMember() {

	window.localStorage.setItem('createdMember', "1");
	$(".invisibleDiv").css("visibility", "visible");
	window.location="groupInfo.html";
}

function addTransaction() {

    var categoryOptions = document.getElementById("transactionCategory");
    var optionSelected = categoryOptions.options[categoryOptions.selectedIndex].value;
    var transactionCategory = categoryOptions.options[categoryOptions.selectedIndex].text;
    console.log(transactionCategory);

    var transactionName = document.getElementById("transactionName").value;
    console.log(transactionName);

    var amount = document.getElementById("transactionAmount").value;

    listOfTransactions = document.getElementById("transactionsInfo");
    var entry = document.createElement('li');

    var currentBalance = -1;

    if (optionSelected == 6) {
        currentBalance = Number(window.localStorage.getItem('groupWallet'));
        currentBalance += Number(amount);

        window.localStorage.setItem('groupWallet', currentBalance);
        document.getElementById("walletMessage").innerHTML = "Current balance: " + currentBalance + " RON";
        entry.appendChild(newTransaction('+' + amount, transactionName, transactionCategory, "color:green;"));
    } else {
        currentBalance = Number(window.localStorage.getItem('groupWallet'));
        currentBalance -= Number(amount);

        if (currentBalance < 0) {
            currentBalance = Number(window.localStorage.getItem('walletMessage'));
            currentBalance -= Number(amount);

            if (currentBalance < 0) {
                alert("You don't have enough funds");
            } else {
                window.localStorage.setItem('walletMessage', currentBalance);
                document.getElementById("walletMessage").innerHTML = "Current balance: " + window.localStorage.getItem('walletMessage') + " RON";
            }
        } else {

            window.localStorage.setItem('groupWallet', currentBalance);
			document.getElementById("walletMessage").innerHTML = "Current balance: " + window.localStorage.getItem('groupWallet') + " RON";
        }
        entry.appendChild(newTransaction('-' + amount, transactionName, transactionCategory, "color:red;"));
    }

    listOfTransactions.appendChild(entry);
    window.localStorage.setItem('groupTransactions', listOfTransactions.outerHTML);

    return false;
}

function newTransaction(transactionAmount, transactionName, transactionCategory, color) {

    var item = document.createElement('div');
    item.setAttribute("class", "item");

    var date = document.createElement('div');
    date.setAttribute("class", "col-sm-3");
    date.innerHTML = getCurrentDate();

    var transactionNameElement = document.createElement('div');
    transactionNameElement.setAttribute("class", "col-sm-3");
    transactionNameElement.innerHTML = transactionName;

    var transactionCategoryElement = document.createElement('div');
    transactionCategoryElement.setAttribute("class", "col-sm-3");
    transactionCategoryElement.innerHTML = transactionCategory;

    var value = document.createElement('div');
    value.setAttribute("class", "col-sm-3");
    value.setAttribute("style", color);
    value.innerHTML = transactionAmount + " RON";

    item.appendChild(date);
    item.append(transactionCategoryElement);
    item.appendChild(transactionNameElement);
    item.appendChild(value);

    return item;
}

function getCurrentDate() {

    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();

    if (dd < 10) {
        dd = '0' + dd
    }

    if (mm < 10) {
        mm = '0' + mm
    }

    today = mm + '/' + dd + '/' + yyyy;

    return today;
}

function onAvatar(){

	window.location="home.html";

}