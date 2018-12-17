
var walletName = "";
var walletAmount = -1;

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
	if(isNaN(walletAmount)){
		alert("not a number");
	}
	return false;
}

function addEconomyAccount(){

	alert("Not implemented yet");
	return false;
}

function addNewGroup() {
	
	alert("Not implemented yet");
	return false;
}

function addNewWhishlist() {
	
	alert("Not implemented yet");
	return false;
}