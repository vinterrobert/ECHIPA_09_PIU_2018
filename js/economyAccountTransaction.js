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
	} else {
		list = document.getElementById("transactionInfo");
	}
	
	if(window.localStorage.getItem('currentBalance') != null){
	currentBalance = Number(window.localStorage.getItem('currentBalance'));
	}
	else {
		currentBalance=200;
	}
	
	document.getElementById("value").innerHTML = currentBalance + " RON";
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
	console.log(list.outerHTML);
	window.localStorage.setItem('economyMessageList', JSON.stringify(list));
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
	window.localStorage.setItem('economyMessageList', JSON.stringify(list));
 }
 
 function updateEconomy(){
	 nameOfEconomyAccount = document.getElementById("updatedName").value;
	document.getElementById("nameOfEconomyAccount").innerHTML = nameOfEconomyAccount;
 }
 
 function newTransaction(addedValue, msg, color){
	 console.log(message);
	 
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