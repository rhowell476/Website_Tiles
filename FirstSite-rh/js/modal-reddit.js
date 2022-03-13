
var modal = document.getElementsByClassName('modal');
var btn = document.getElementsByClassName('card-img');
var closeBtn = document.getElementsByClassName('closeBtn');

// When the user clicks the button, open the modal 
btn[0].onclick = function() {
  modal[0].style.display = "block";
}

btn[1].onclick = function() {
  modal[1].style.display = "block";
  }

btn[2].onclick = function() {
  modal[2].style.display = "block";
}

btn[3].onclick = function() {
  modal[3].style.display = "block";
}

btn[4].onclick = function() {
  modal[4].style.display = "block";
}

btn[5].onclick = function() {
  modal[5].style.display = "block";
}

btn[6].onclick = function() {
  modal[6].style.display = "block";
}

// When the user clicks on <span> (x), close the modal
closeBtn[0].onclick = function() {
  modal[0].style.display = "none";
}

closeBtn[1].onclick = function() {
  modal[1].style.display = "none";
}

closeBtn[2].onclick = function() {
  modal[2].style.display = "none";
}

closeBtn[3].onclick = function() {
  modal[3].style.display = "none";
}

closeBtn[4].onclick = function() {
  modal[4].style.display = "none";
}

closeBtn[5].onclick = function() {
  modal[5].style.display = "none";
}

closeBtn[6].onclick = function() {
  modal[6].style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
document.onclick = function(event) {
  for (i = 0; i < 7; i++) {
    if (event.target.matches(".closeBtn") || event.target.matches(".modal")) {
      modal[i].style.display = "none";
    };
  }
}