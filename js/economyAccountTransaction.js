 var list;
 var nameOfEconomyAccount = "Name of Economy Account";
 var currentBalance;
 var addMessage = " Made a deposit to your economy account ";
 var removeMessage = " Transfered to your personal account ";


window.onload = init;

function init(){
	if(window.localStorage.getItem('nameOfEconomyAccount') != null){
		document.getElementById("nameOfEconomyAccount").innerHTML = window.localStorage.getItem('nameOfEconomyAccount');
	} else {
		document.getElementById("nameOfEconomyAccount").innerHTML = nameOfEconomyAccount;
	}
	
	if(window.localStorage.getItem('economyMessageList') != null){
		list=window.localStorage.getItem('economyMessageList');
		console.log(list);
		document.getElementById("transactionInfo").outerHTML = list;
	} else {
		list = document.getElementById("transactionInfo");
	}
	
	if(window.localStorage.getItem('currentBalance') != null){
	currentBalance = Number(window.localStorage.getItem('currentBalance'));
	}
	else {
		currentBalance=200;
	}
	
	if (window.localStorage.getItem('manualOrAuto') == 0 ) {
		document.getElementById('economy-manual').checked = true;
	}
	else {
		document.getElementById('economy-auto').checked = true;
	}
	if (window.localStorage.getItem('monthlyReminder') === 0 ) {
		document.getElementById('economy-reminder').checked = false;
	}
	else {
		document.getElementById('economy-reminder').checked = true;
	}
	
	document.getElementById("value").innerHTML = currentBalance + " RON";
	document.getElementById("initialDeposit").innerHTML = "+ " + window.localStorage.getItem('initialDeposit') + " RON";
	document.getElementById("initialDate").innerHTML = getCurrentDate();
}
 
 function addTransaction(){
	 var addedValue = document.getElementById("addMoney").value;
	 currentBalance += Number(addedValue);
	 window.localStorage.setItem('currentBalance', currentBalance);
	document.getElementById("value").innerHTML = currentBalance + " RON";

	 list = document.getElementById("transactionInfo")
	 
	var entry = document.createElement('li');
    entry.appendChild(newTransaction('+' + addedValue,addMessage, "color:green;"));
    list.appendChild(entry);
	
	window.localStorage.setItem('economyMessageList', list.outerHTML);
 }

 function transferTransaction(){
	 var addedValue = document.getElementById("removeMoney").value;
	 currentBalance -= Number(addedValue);
	 window.localStorage.setItem('currentBalance', currentBalance);
	document.getElementById("value").innerHTML = currentBalance + " RON";

	 list = document.getElementById("transactionInfo")
	 
	var entry = document.createElement('li');
    entry.appendChild(newTransaction('-' + addedValue,removeMessage, "color:red;"));
    list.appendChild(entry);
	window.localStorage.setItem('economyMessageList', list.outerHTML);
 }
 
 function updateEconomy(){
	if(document.getElementById("updatedName").value != "") {
		 nameOfEconomyAccount = document.getElementById("updatedName").value;
		 window.localStorage.setItem('nameOfEconomyAccount', nameOfEconomyAccount)
		 document.getElementById("nameOfEconomyAccount").innerHTML = nameOfEconomyAccount;
	 }
	if (document.getElementById('economy-manual').checked) {
		window.localStorage.setItem('manualOrAuto',0);
	}
	else {
		window.localStorage.setItem('manualOrAuto',1);
	}
	if(document.getElementById('economy-reminder').checked){
		window.localStorage.setItem('monthlyReminder',1);
	} else {
		window.localStorage.setItem('monthlyReminder',0);
	}
 }
 
 function newTransaction(addedValue, msg, color){
	 
	 var item = document.createElement('div');
	 item.setAttribute("class","item");
	 var date = document.createElement('div');
	 date.setAttribute("class", "col-sm-3");
	 date.innerHTML = getCurrentDate();
	 var message = document.createElement('div');
	 message.setAttribute("class", "col-sm-6");
	 message.innerHTML = msg;
	 var value = document.createElement('div');
	 value.setAttribute("class", "col-sm-3");
	 value.setAttribute("style", color);
	 value.innerHTML = addedValue + " RON";
	 
	 item.appendChild(date);
	 item.appendChild(message);
	 item.appendChild(value);

	 return item;
 }
 
 function getCurrentDate(){
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1; //January is 0!
	var yyyy = today.getFullYear();

	if(dd<10) {
		dd = '0'+dd
	} 

	if(mm<10) {
		mm = '0'+mm
	} 

	today = mm + '/' + dd + '/' + yyyy;

	return today;
 }