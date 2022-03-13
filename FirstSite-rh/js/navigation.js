$(document).ready(function() {

    // hamburger menu toggle
    $('.nav-toggle').click(function() {
      $('.nav').toggleClass('is-clicked');
      $('.nav-toggle').toggleClass('is-clicked');
      $('.hamburger').toggleClass('is-clicked');
    })
  })
