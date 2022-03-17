document.getElementById("paragraphheading").onmouseover = function() {mouseOver()};
document.getElementById("paragraphheading").onmouseout = function() {mouseOut()};

function mouseOver() {
  document.getElementById("paragraphheading").style.color = "orange";
}

function mouseOut() {
  document.getElementById("paragraphheading").style.color = "teal";
}

function openForm() {
  document.getElementById("myForm").style.display = "block";
}
function closeForm() {
  document.getElementById("myForm").style.display = "none";
}


