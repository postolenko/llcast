var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;


$(window).load(function() {



});

$(window).resize(function() {



});

$(document).scroll(function() {



});

$(document).ready(function() {

  $(".dropdown_btn_2").on("click", function(e) {
    e.preventDefault();
    parent = $(this).closest(".info_box_templ");
    parent.toggleClass("visible");
  });

  $(".close_btn").on("click", function(e) {
    e.preventDefault();
    parent = $(this).closest(".info_box_templ");
    parent.remove();
  });

});