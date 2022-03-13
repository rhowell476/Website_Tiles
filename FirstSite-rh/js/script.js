$(document).ready(function() {

    // hamburger menu toggle
    $('.nav-toggle').click(function() {
      $('.nav').toggleClass('is-clicked');
      $('.hamburger').toggleClass('is-clicked');
      $('.nav-toggle').toggleClass('is-clicked');
    })
  
  })  

//get modal element
var modal = document.getElementsByClassName('modal');
//get open modal button
var btn = document.getElementsByClassName('btn');
//get close button
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

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
      modal.style.display = "none";
  }
}

closeBtn[5].onclick = function() {
  modal[5].style.display = "none";
}