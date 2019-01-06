
window.onload = init;

function init(){
	if(window.localStorage.getItem('nameOfEconomyAccount') != null){
		var economyInfo = document.getElementById("economyInfo");
		economyInfo.style.display = "block";
		var addEconAcc = document.getElementById("addEconAcc");
		addEconAcc.style.display = "none";
		document.getElementById("nameOfEconomyAccount").innerHTML = window.localStorage.getItem('nameOfEconomyAccount');
		document.getElementById("economyCurrentBalance").innerHTML = window.localStorage.getItem('currentBalance') + " RON";
	} else {
		var economyInfo = document.getElementById("economyInfo");
		economyInfo.style.display = "none";
		var addEconAcc = document.getElementById("addEconAcc");
		addEconAcc.style.display = "block";
	}
}

function openMyWallet() {

	window.location = "myWallet.html";
	return false;
}

function openMyGroups(){

	window.location = "myGroups.html";
	return false;
}

function openMyWhishlist(){

	window.location = "myWhishlist.html";
	return false;
}

function addNewWallet(){

	alert("Not implemented yet");
	return false;

}

function addEconomyAccount(){

	alert("Not implemented yet");
	return false;
}

function openEconomyAccForm(){

	document.getElementById("myForm").style.display = "block";
}

function callEcconomyPage(){
	var economyName = document.getElementById("economy-name").value;
	var economyDeposit = document.getElementById("economy-deposit").value; 
	
	window.localStorage.setItem('nameOfEconomyAccount', economyName);
	window.localStorage.setItem('currentBalance', economyDeposit);
	window.localStorage.setItem('initialDeposit', economyDeposit);
	
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
	window.location = "EcconomyAccount.html"
}
	

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
function addNewGroup() {
	
	alert("Not implemented yet");
	return false;
}

function addNewWhishlist() {
	
	alert("Not implemented yet");
	return false;
}