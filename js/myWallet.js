window.onload = init;
var existTransactions = false;
var newExpensesBudget = -1;
var walletAmount = -1;
var listOfTransactions;
var receiptImg;

function init() {

    document.getElementById("walletName").innerHTML = "Wallet name: " + window.localStorage.getItem('myWallet');
    document.getElementById("walletDeposit").innerHTML = "Current balance: " + window.localStorage.getItem('walletMessage') + " RON";

    if (window.localStorage.getItem('expensesBudget') != null) {
        document.getElementById("expensesBudget").innerHTML = "Expenses budget: " + window.localStorage.getItem('expensesBudget');
    } else {
        document.getElementById("expensesBudget").innerHTML = "Expenses budget: " + " NOT SET";
    }

    if (!existTransactions) {
        document.getElementsByClassName("item")[0].style.display = "none";
    }
}

function setExpensesBudget() {

    var newBudget = Number(document.getElementById("setBudget").value);
    if (window.localStorage.getItem('expensesBudget') == null) {
        newExpensesBudget = newBudget;
    } else {
        newExpensesBudget = newBudget - Number(window.localStorage.getItem('expensesBudget'));
    }

    document.getElementById("expensesBudget").innerHTML = "Expenses budget: " + newBudget + " RON";
    window.localStorage.setItem('expensesBudget', newBudget);

    document.getElementById("walletDeposit").innerHTML = "Current balance: " + (window.localStorage.getItem('walletMessage') - newExpensesBudget) + " RON";
    window.localStorage.setItem('walletMessage', window.localStorage.getItem('walletMessage') - newExpensesBudget);

    return false;
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
        currentBalance = Number(window.localStorage.getItem('walletMessage'));
        currentBalance += Number(amount);

        window.localStorage.setItem('walletMessage', currentBalance);
        document.getElementById("walletDeposit").innerHTML = "Current balance: " + currentBalance + " RON";
        entry.appendChild(newTransaction('+' + amount, transactionName, transactionCategory, "color:green;"));
    } else {
        currentBalance = Number(window.localStorage.getItem('expensesBudget'));
        currentBalance -= amount;
        if (currentBalance < 0) {
            currentBalance = Number(window.localStorage.getItem('walletMessage'));
            currentBalance -= Number(amount);

            if (currentBalance < 0) {
                alert("You don't have enough funds");
            } else {
                window.localStorage.setItem('walletMessage', currentBalance);
                document.getElementById("walletDeposit").innerHTML = "Current balance: " + window.localStorage.getItem('walletMessage') + " RON";
            }
        } else {
            window.localStorage.setItem('expensesBudget', currentBalance);
            document.getElementById("expensesBudget").innerHTML = "Expenses budget:" + window.localStorage.getItem('expensesBudget') + " RON";
        }
        entry.appendChild(newTransaction('-' + amount, transactionName, transactionCategory, "color:red;"));
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

    var transactionName = "Uploaded receipt"

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
        entry.appendChild(receiptTransaction('-' + amount, transactionName, transactionCategory, "color:red;"));
    

    listOfTransactions.appendChild(entry);

    return false;
}

function receiptTransaction(transactionAmount, image, transactionCategory, color) {

    var item = document.createElement('div');
    item.setAttribute("class", "item");

    var date = document.createElement('div');
    date.setAttribute("class", "col-sm-3");
    date.innerHTML = getCurrentDate();

    var transactionNameElement = document.createElement('div');
    transactionNameElement.setAttribute("class", "col-sm-3");

    var openNewTab = document.createElement('a');
    openNewTab.setAttribute("href", receiptImg);
    openNewTab.setAttribute("target", "_blank");

    var img = document.createElement('img');
    img.setAttribute("id","receipt");
    img.setAttribute("src",receiptImg);
    img.setAttribute("width",30);
    img.setAttribute("height",30);

    var updloadedReceiptText = document.createElement('span');
    updloadedReceiptText.innerHTML = "Uploaded receipt    ";
    
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