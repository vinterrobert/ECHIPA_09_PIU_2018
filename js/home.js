// window.onload = function(){
// 	document.getElementsByClassName("btnSaveWallet")[0].onsubmit = saveWalletSettings;
// } 

var walletName = "";
var walletAmount = -1;

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

	if(window.localStorage.getItem('myWallet') != null){
		var walletInfo = document.getElementsByClassName('walletInfo')[0];
		walletInfo.style.display = "block";

		var addWallet = document.getElementsByClassName('addWallet')[0];
		addWallet.style.display = "none";

		document.getElementsByClassName("myWallet")[0].innerHTML = window.localStorage.getItem('myWallet');
		document.getElementsByClassName("walletMessage")[0].innerHTML = window.localStorage.getItem('walletMessage') + " RON";
	}else{
		var walletInfo = document.getElementsByClassName('walletInfo')[0];
		walletInfo.style.display = "none";

		var addWallet = document.getElementsByClassName('addWallet')[0];
		addWallet.style.display = "block";
	}

	if(window.localStorage.getItem('groupExistance') === "1"){

		$(".addGroup").css("display", "none");
		$(".groupsMsg").text("1 Group");
		

	}

	if(window.localStorage.getItem('createdGroup') === "1"){

		$(".groupsMsg").text("2 Groups");
		

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

	document.getElementsByClassName("createWallet")[0].style.display = "block";
	return false;

}

function closeMyPopupWallet(){

	document.getElementsByClassName("createWallet")[0].style.display = "none";
	return false;
}

function saveWalletSettings(){

	walletName = document.getElementById("nameWalletInput").value;
	walletAmount = document.getElementById("amountWalletInput").value;
	if(!isNaN(walletAmount)){
		document.getElementsByClassName("myWallet")[0].innerHTML = walletName;
		document.getElementsByClassName("walletMessage")[0].innerHTML = walletAmount + " RON";
		document.getElementsByClassName("createWallet")[0].style.display = "none";
		document.getElementsByClassName("addWallet")[0].style.display = "none";	
		document.getElementsByClassName('walletInfo')[0].style.display = "block";

		window.localStorage.setItem('myWallet', walletName);
		window.localStorage.setItem('walletMessage', walletAmount);

	}else{
		alert("not a number");
		document.getElementsByClassName("createWallet")[0].style.display = "block";
	}
	

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

function createNewGroup(){

	var groupName = document.getElementById("group-name").value;
	window.localStorage.setItem('createdFirstGroup', "1");
	window.localStorage.setItem('groupExistance', "1");
	window.localStorage.setItem('groupWallet', "0");
	window.location="myGroups.html";

}