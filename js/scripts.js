var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;


$(window).load(function() {
  $(".scroll_y").mCustomScrollbar();
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
    $(".resp_bg").addClass("visible");
  });

  $(".resp_btn, .resp_bg").on("click", function(e) {
    e.preventDefault();
    $(".llcast_templ").removeClass("hidden");
    $(".resp_bg").removeClass("visible");
  });

  // --------------

  $(document).on("click", "[data-popup-link]",  function(e) {
      e.preventDefault();
      popupName = $(this).attr("data-popup-link");
      div = document.createElement('div');
      div.style.overflowY = 'scroll';
      div.style.width = '50px';
      div.style.height = '50px';
      div.style.visibility = 'hidden';
      document.body.appendChild(div);
      scrollWidth = div.offsetWidth - div.clientWidth;
      document.body.removeChild(div);
      $("body").addClass("fixed");
      $("body").css({
          "position" : "fixed",
          "top" :  -$(document).scrollTop() + "px",
          "overflow" : "hidden",
          "right" : 0,
          "left" : 0,
          "bottom" : 0,
          "padding-right" : scrollWidth + "px"
      });
      $(".popup_bg").fadeIn(300);
      $("[data-popup = '"+ popupName +"']").fadeIn(300);
    });
    $(document).on("click", ".close_popup, .popup_bg", function(e) {
      e.preventDefault();
      curTop = $("body").css("top");
      curTop = Math.abs(parseInt(curTop, 10));
      $("body").attr("style", "");
      if (curTop !== 0) {
          $("html").scrollTop(curTop);
      }
      $("body").removeClass("fixed");
      $(".popup_bg").fadeOut(300);
      $("[data-popup]").fadeOut(300);
    });
    $(this).keydown(function(eventObject){
      if (eventObject.which == 27 && $("body").hasClass("fixed")) {
        curTop = $("body").css("top");
        curTop = Math.abs(parseInt(curTop, 10));
        $("body").attr("style", "");
        if (curTop !== 0) {
            $("html").scrollTop(curTop);
        }
        $("body").removeClass("fixed");
        $(".popup_bg").fadeOut(300);
        $("[data-popup]").fadeOut(300);
      }
    });
    $(document).on("mouseup", function(e) {
      if($(".popup").is(":visible")) {
        e.preventDefault();
        hide_element = $(".popup_content");
        if (!hide_element.is(e.target)
            && hide_element.has(e.target).length === 0) {
            curTop = $("body").css("top");
            curTop = Math.abs(parseInt(curTop, 10));
            $("body").attr("style", "");
            if (curTop !== 0) {
                $("html").scrollTop(curTop);
            }
            $("body").removeClass("fixed");
            $(".popup_bg").fadeOut(300);
            $("[data-popup]").fadeOut(300);
        }
      }
    });

});