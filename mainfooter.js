// Print Activity (Download Button) and save as image
$("#print").click(function() { PrintDiv(); });
$("#print2").click(function() { PrintDiv2(); });  
  
function PrintDiv()
{
    var div = document.getElementById('printableArea');
    var tempHeader = document.getElementById('printheader').cloneNode(true);
  	
    div.insertBefore(tempHeader, div.firstChild);
  
  
    html2canvas((div), {logging: true, allowTaint: true, useCORS: true, scale: 10,
        onrendered: function(canvas) {
          	
          var myImage = canvas.toDataURL();
          downloadURI(myImage, document.title);
          div.removeChild(tempHeader); 
      }
    });
}
  
  
function PrintDiv2()
{
    var div = document.getElementById('printableAreaTwo');
    var tempHeader = document.getElementById('printheader').cloneNode(true);
  	
    div.insertBefore(tempHeader, div.firstChild);
  
  
    html2canvas((div), {logging: true, allowTaint: true, useCORS: true, scale: 10,
        onrendered: function(canvas) {
          	
          var myImage = canvas.toDataURL();
          downloadURI(myImage, document.title);
          div.removeChild(tempHeader); 
      }
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
