window.onload = init;

function init(){

    document.getElementById("walletName").innerHTML = "Wallet name: " + window.localStorage.getItem('myWallet');
    document.getElementById("walletDeposit").innerHTML = "Current balance: " + window.localStorage.getItem('walletMessage') + " RON";
}