
window.onload = init;

function init(){

	if(window.localStorage.getItem('createdGroup') === "1"){

		$(".invisibleDiv").css("visibility", "visible");
	}

	if(window.localStorage.getItem('createdFirstGroup') === "1")
		$("#group1").css("visibility", "visible");
}

function createGroup() {

	if(window.localStorage.getItem('createdFirstGroup') !== "1"){

		window.localStorage.setItem('createdFirstGroup', "1");
		window.localStorage.setItem('groupExistance', "1");
		$("#group1").css("visibility", "visible");
		window.location="myGroups.html";

	}else{

		window.localStorage.setItem('createdGroup', "1");
		$(".invisibleDiv").css("visibility", "visible");
		window.location="myGroups.html";
	}
}

function getGroupInfo(){

	window.location = "groupInfo.html"

}