// Test script 

document.getElementById("printheader").onload = function() {aTestAlert()};

function aTestAlert() {
   alert("Script is loaded");
}
// End Test script

/*
// Textbox Auto Resize

//const tx = document.getElementsByTagName("textarea");
const tx = document.getElementsByClassName("activities-form-box-e");
for (let i = 0; i < tx.length; i++) {
  tx[i].setAttribute("style", "height:" + (tx[i].scrollHeight) + "px;overflow-y:hidden;");
  tx[i].addEventListener("input", OnInput, false);
}

function OnInput() {
  this.style.height = "auto";
  this.style.height = (this.scrollHeight) + "px";
}   
 */ 
