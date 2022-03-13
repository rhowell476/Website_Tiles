
var modal = document.getElementsByClassName('modal');
var btn = document.getElementsByClassName('btn');
var closeBtn = document.getElementsByClassName('closeBtn');
var modalContent = document.getElementsByClassName('modal-content');

// When the user clicks the button, open the modal 
btn[2].onclick = function() {
  modal[0].style.display = "block";
}
btn[3].onclick = function() {
  modal[1].style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it
document.onclick = function(event) {
  for (i = 0; i < 2; i++) {
    if (event.target.matches(".closeBtn") || event.target.matches(".modal")) {
      modal[i].style.display = "none";
    };
  }
}