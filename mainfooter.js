

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




// // create strengths in memberstack
//   const selectThisStrength = function(strength) {
	  
//     let strengthsFromDb = localMemberData.sharingStrengths || [];
//     strengthsFromDb.push(strength);
    
//     let strengthJson = {'sharingStrengths': strengthsFromDb};
    
//     localMember.updateMetaData(strengthsJson);
//     /*$('.bookmark-incomplete').hide();
//     $('.bookmark-complete').show();*/
	  
//   }
  
//   $('#selectMe').click(function() {
	  
//     let strength = $('a').data('strength');
//     selectThisStrength(strength);
//   }); 


