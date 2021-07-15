// Print Activity (Download Button) and save as image..
$("#print").click(function () {
  PrintDiv();
});
$("#print2").click(function () {
  PrintDiv2();
});

function PrintDiv() {
  var div = document.getElementById("printableArea");
  var tempHeader = document.getElementById("printheader").cloneNode(true);

  div.insertBefore(tempHeader, div.firstChild);

  html2canvas(div, {
    logging: true,
    allowTaint: true,
    useCORS: true,
    scale: 10,
    onrendered: function (canvas) {
      var myImage = canvas.toDataURL();
      downloadURI(myImage, document.title);
      div.removeChild(tempHeader);
    },
  });
}

function PrintDiv2() {
  var div = document.getElementById("printableAreaTwo");
  var tempHeader = document.getElementById("printheader").cloneNode(true);

  div.insertBefore(tempHeader, div.firstChild);

  html2canvas(div, {
    logging: true,
    allowTaint: true,
    useCORS: true,
    scale: 10,
    onrendered: function (canvas) {
      var myImage = canvas.toDataURL();
      downloadURI(myImage, document.title);
      div.removeChild(tempHeader);
    },
  });
}

function downloadURI(uri, name) {
  var link = document.createElement("a");
  link.download = name;
  link.href = uri;
  document.body.appendChild(link);
  link.click();
}

// End Print


// Complete Button Animation

var animateCompleteButton = function (e) {
  e.preventDefault;
  //reset animation
  e.target.classList.remove("animate");

  e.target.classList.add("animate");

  setTimeout(function () {
    e.target.classList.remove("animate");

    document.getElementById("activityCompleteButton").style.display = "none";
    document.getElementById("activityIsCompleteButton").style.display = "inline";
  }, 700);

  document.getElementById("activityCompleteButton").innerHTML = "ACTIVITY COMPLETED";
  document.getElementById("activityCompleteButton").style.backgroundColor = "#2a3c63";
  document.getElementById("activityCompleteButton").style.border = "none";
  document.getElementById("activityCompleteButton").style.color = "white";
};

var animateCompleteButtonUndo = function (e) {
  document.getElementById("activityCompleteButton").style.display = "inline";
  document.getElementById("activityIsCompleteButton").style.display = "none";

  document.getElementById("activityCompleteButton").innerHTML = "COMPLETE ACTIVITY";
  document.getElementById("activityCompleteButton").style.backgroundColor = "white";
  document.getElementById("activityCompleteButton").style.border = "2px solid #f38066";
  document.getElementById("activityCompleteButton").style.color = "#f38066";
};

var classname = document.getElementsByClassName("anim-confetti-button");
var classname2 = document.getElementsByClassName("activity-complete-button");

for (var i = 0; i < classname.length; i++) {
  classname[i].addEventListener("click", animateCompleteButton, false);

  classname2[i].addEventListener("click", animateCompleteButtonUndo, false);
}
//////////////////////////////////////end test feature////////////////////////////


/*
// Complete Animated Button 

let animateCompleteButton = function (e) {
  e.preventDefault;
  //reset animation
  e.target.classList.remove("animate");

  e.target.classList.add("animate");
  
  setTimeout(function () {
    e.target.classList.remove("animate");
  }, 700);
};

let classname = document.getElementsByClassName("anim-confetti-button");

for (let i = 0; i < classname.length; i++) {

	
	classname[i].addEventListener("mouseover", animateCompleteButton, false);
	classname[i].addEventListener("ontouchcancel", animateCompleteButton, false);
	classname[i].addEventListener("ontouchend", animateCompleteButton, false);
	classname[i].addEventListener("ontouchmove", animateCompleteButton, false);
	
  
}  
*/
