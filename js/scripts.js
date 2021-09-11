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

  // -------------

  var chChildrens;

  $(".main_checkbox input").on("change", function() {
      mainCh = $(this).closest(".main_checkbox");
      parentBlock = $(this).closest(".checkboxes_array");
      chChildrens = parentBlock.find(".ch_children input");
      if($(this).is(":checked")) {
        chChildrens.prop("checked", true);
        mainCh.addClass("ch");
      } else {
        chChildrens.prop("checked", false);
        mainCh.removeClass("ch");
      }
  });

  $(".ch_children input").on("change", function() {
      parentBlock = $(this).closest(".checkboxes_array");
      chChildrens = parentBlock.find(".ch_children input");
      mainCheckbox = parentBlock.find(".main_checkbox input");
      mainCh = parentBlock.find(".main_checkbox");
      chChildrens.each(function() {
        if($(this).is(":checked")) {
          mainCheckbox.prop("checked", true);
          return false;
        } else {
          mainCheckbox.prop("checked", false);
        }
      });
      parentBlock.find(".ch_children").each(function() {
        if(!$(this).find("input").is(":checked")) {
          mainCh.removeClass("ch");
          return false;
        } else {
          mainCh.addClass("ch");
        }
      });
  });

  // -------------

  $(".dropdown_link").on("click", function(e) {
    e.preventDefault();
    parent = $(this).closest(".dropdowns_wrapp");
    parent.toggleClass("active");
  });

  $(this).keydown(function(eventObject){
    if (eventObject.which == 27) {
      $(".dropdowns_wrapp").removeClass("active");
    }
  });

  $(document).on("mouseup", function(e) {
      e.preventDefault();
      hide_element = $(".dropdowns_wrapp");
      if (!hide_element.is(e.target)
          && hide_element.has(e.target).length === 0) {
          hide_element.removeClass("active");
      }
  });

  // -------------

  $(".drp_box_btn").on("click", function(e) {
    e.preventDefault();
    parent = $(this).closest(".drp_box");
    drpBoxMenu = parent.find(".drp_box_menu");
    if(parent.hasClass("active")) {
      parent.removeClass("active");
    } else {
      parent.addClass("active");
    }
  });

  $(this).keydown(function(eventObject){
    if (eventObject.which == 27) {
      $(".drp_box").removeClass("active");
    }
  });

  $(document).mouseup(function(e) {
    e.preventDefault();
    hide_element = $(".drp_box.active");
    if (!hide_element.is(e.target)
        && hide_element.has(e.target).length === 0) {
        $(".drp_box").each(function() {
          if($(this).hasClass("active")) {
            $(this).removeClass("active");
          }
        });
    }
  });

  // -------------

  $(".dropdown_item_btn").on("click", function(e) {
    e.preventDefault();
    parent = $(this).closest("li");
    itemDropdown = parent.children(".item_dropdown");
    if(itemDropdown.is(":hidden")) {
      parent.addClass("active");
      itemDropdown.slideDown(300);
    } else {
      parent.removeClass("active");
      itemDropdown.slideUp(300);
    }
  });

  // -------------

  $("[data-drp-link]").on("click", function(e) {
    e.preventDefault();
    drp = $("[data-drp = '"+$(this).attr("data-drp-link")+"']");
    if(drp.is(":hidden")) {
      drp.slideDown(300);
      $(this).remove();
    }
  });

  // --------------

  $(".sidebar_btn").on("click", function(e) {
    e.preventDefault();
    $(".llcast_templ").toggleClass("hidden");
  });

});