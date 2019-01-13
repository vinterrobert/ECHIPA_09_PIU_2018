window.onload = init;
var existTransactions = false;
var newExpensesBudget = -1;
var walletAmount = -1;
var listOfTransactions;
var receiptImg;
var transactionImg;

function init() {

    document.getElementById("walletName").innerHTML = "Wallet name: Personal Wallet";
    document.getElementById("walletDeposit").innerHTML = "Current balance: " + window.localStorage.getItem('walletMessage') + " RON";

    if (!existTransactions) {
        document.getElementsByClassName("item")[0].style.display = "none";
    }
}

function addTransaction() {

    var categoryOptions = document.getElementById("transactionCategory");
    var optionSelected = categoryOptions.options[categoryOptions.selectedIndex].value;
    var transactionCategory = categoryOptions.options[categoryOptions.selectedIndex].text;
    console.log(transactionCategory);

    var transactionName = document.getElementById("transactionName").value;
    console.log(transactionName);

    var amount = document.getElementById("transactionAmount").value;

    var img = document.getElementById("transactionImg").value;

    transactionImg ="../images/"+ img.replace(/^.*[\\\/]/, '');
    console.log(img);

    listOfTransactions = document.getElementById("transactionsInfo");
    var entry = document.createElement('li');

    var currentBalance = -1;

    if (optionSelected == 4) {
        currentBalance = Number(window.localStorage.getItem('walletMessage'));
        currentBalance += Number(amount);

        window.localStorage.setItem('walletMessage', currentBalance);
        document.getElementById("walletDeposit").innerHTML = "Current balance: " + currentBalance + " RON";
        entry.appendChild(newTransaction('+' + amount, transactionName, transactionCategory, "color:green;"));
    } else {
        
            currentBalance = Number(window.localStorage.getItem('walletMessage'));
            currentBalance -= Number(amount);

            if (currentBalance < 0) {
                alert("You don't have enough funds");
            } else {
                window.localStorage.setItem('walletMessage', currentBalance);
                document.getElementById("walletDeposit").innerHTML = "Current balance: " + window.localStorage.getItem('walletMessage') + " RON";
            }
        if(img == ""){
            entry.appendChild(newTransaction('-' + amount, transactionName, transactionCategory, "color:red;"));
        } else {
            entry.appendChild(receiptTransaction('-' + amount, transactionName, transactionImg, transactionCategory, "color:red;"));
        }
    }

    listOfTransactions.appendChild(entry);

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

function readURL(input) {
            
            if (input.files && input.files[0]) {
                var reader = new FileReader();

                reader.onload = function (e) {
                    receiptImg = e.target.result;
                    transactionImg = e.target.result;
                    $('#receipt')
                        .attr('src', e.target.result)
                        .width(150)
                        .height(200);
                };

                reader.readAsDataURL(input.files[0]);
            }
}

function addReceipt() {

    var transactionCategory = "Shopping"

    var transactionName = "Uploaded receipt     "

    var amount = "43.79"

    listOfTransactions = document.getElementById("transactionsInfo");
    var entry = document.createElement('li');

    var currentBalance = -1;


        currentBalance = Number(window.localStorage.getItem('expensesBudget'));
        currentBalance -= amount;
        if (currentBalance < 0) {
            currentBalance = Number(window.localStorage.getItem('walletMessage'));
            currentBalance -= Number(amount);

            window.localStorage.setItem('walletMessage', currentBalance);
            document.getElementById("walletDeposit").innerHTML = "Current balance: " + window.localStorage.getItem('walletMessage') + " RON";
            
        } else {
            window.localStorage.setItem('expensesBudget', currentBalance);
            document.getElementById("expensesBudget").innerHTML = "Expenses budget:" + window.localStorage.getItem('expensesBudget') + " RON";
        }
        entry.appendChild(receiptTransaction('-' + amount, transactionName, receiptImg, transactionCategory, "color:red;"));
    

    listOfTransactions.appendChild(entry);

    return false;
}

function receiptTransaction(transactionAmount, transactionName, transactionImg, transactionCategory, color) {

    var item = document.createElement('div');
    item.setAttribute("class", "item");

    var date = document.createElement('div');
    date.setAttribute("class", "col-sm-3");
    date.innerHTML = getCurrentDate();

    var transactionNameElement = document.createElement('div');
    transactionNameElement.setAttribute("class", "col-sm-3");

    var openNewTab = document.createElement('a');
    openNewTab.setAttribute("href", transactionImg);
    openNewTab.setAttribute("target", "_blank");

    var img = document.createElement('img');
    img.setAttribute("id","receipt");
    img.setAttribute("src",transactionImg);
    img.setAttribute("width",30);
    img.setAttribute("height",30);

    var updloadedReceiptText = document.createElement('span');
    updloadedReceiptText.innerHTML = transactionName;
    
    openNewTab.appendChild(img);
    transactionNameElement.appendChild(updloadedReceiptText);
    transactionNameElement.appendChild(openNewTab);

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