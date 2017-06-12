/*
 * Copyright (c) 2017 FriendsLaboratory
 * Author: FriendsLaboratory
 * This file is made for CURRENT TEMPLATE
 */
new WOW().init();

function event_setup() {
  var root = 'https://jsonplaceholder.typicode.com';

  $.ajax({
    url: root + '/posts/1',
    method: 'GET'
  }).then(function (data) {
    console.log(data);
  });


  photopixel_fl_vertical_menu_scroll();
  photopixel_fl_main_slider();

  jQuery(window).on('resize', function (e) {
    ;
    photopixel_fl_twtw_style();
    // photopixel_fl_google_maps();
    // photopixel_fl_blog();
    photopixel_fl_res_logo();
    photopixel_fl_gridbg_h();
    photopixel_fl_halfslide_h();
    photopixel_fl_img_height_regulation();
    photopixel_fl_vertical_menu_scroll();
    photopixel_fl_vertical_menu_height_regulation();
    photopixel_fl_project_height_regulation();
    photopixel_fl_collageplus();
  });

  jQuery(window).on('scroll', function (e) {
    ;
    photopixel_fl_totop_myhide();
  });

  setTimeout(function (e) {
    ;
    photopixel_fl_twtw_style();
    photopixel_fl_isotope();
    photopixel_fl_blog();
  }, 1000);

  setTimeout(function (e) {
    ;
    photopixel_fl_twtw_style();
    photopixel_fl_isotope();
    photopixel_fl_collageplus();
  }, 1500);

  setTimeout(function (e) {
    ;
    photopixel_fl_twtw_style();
    photopixel_fl_isotope();
    photopixel_fl_collageplus();
  }, 3000);

  jQuery(window).on('load', function (e) {
    ;
    photopixel_fl_twtw_style();
    photopixel_fl_isotope();
    photopixel_fl_collageplus();
    photopixel_fl_blog();
  });


}


function init_start() {
  photopixel_fl_google_maps();
  photopixel_fl_blog();
  photopixel_fl_contact_form_contactsend();
  photopixel_fl_team_carousel();
  photopixel_f_testimonials();
  photopixel_fl_audiobox();
  photopixel_fl_res_logo();
  photopixel_fl_responsive_menu();
  photopixel_fl_twtw_style();
  photopixel_fl_twtw();
  photopixel_fl_circle_progress_bar();
  photopixel_fl_btn();
  photopixel_fl_full_width_container();
  photopixel_fl_easytab();
  photopixel_fl_toggle();
  photopixel_fl_accordion();
  photopixel_fl_scroll_single();
  photopixel_fl_progress_bar();
  photopixel_fl_notification();
  photopixel_fl_short_gallery_owl_carousel();
  photopixel_fl_collageplus();
  photopixel_fl_waypoint();
  photopixel_fl_halfslide_h();
  photopixel_fl_halfslide_flexslider();
  photopixel_fl_likeshare_share();
  photopixel_fl_jarallax();
  photopixel_fl_submenu();
  photopixel_fl_gridbg_bg_set();
  photopixel_fl_gridbg_h();
  photopixel_fl_carousel();
  photopixel_fl_tooltip_all_fixer();
  photopixel_fl_sticky_sidebar();
  photopixel_fl_magnific_popup();
  photopixel_fl_isotope();
  photopixel_fl_img_to_svg();
  photopixel_fl_project_height_regulation();
  photopixel_fl_totop();
  phopixel_fl_secondary_closer();
  photopixel_fl_closer();
  photopixel_fl_vertical_menu_data();
  photopixel_fl_volume();
  photopixel_fl_share();
  photopixel_fl_search();
  photopixel_fl_gallery_prev();
  photopixel_fl_profile_prev();
  photopixel_fl_left_bar_nav();
  photopixel_fl_next_slide_button();

  photopixel_fl_vertical_menu_height_regulation();
  photopixel_fl_img_height_regulation();


}


jQuery(document).ready(function () {

  "use strict";

  init_start();
  // event_setup();


});
// -----------------------------------------------------
// -------------------    GOOGLE MAPS  -----------------
// -----------------------------------------------------
function photopixel_fl_google_maps() {
  "use strict";

  var googleMap = jQuery('.photopixel_fl_contact .google_map');

  googleMap.on('click', function () {
    jQuery(this).find('iframe').addClass('clicked');
  });

  googleMap.on('mouseleave', function () {
    jQuery(this).find('iframe').removeClass('clicked');
  });

}
// -----------------------------------------------------
// -------------------    BLOG   -----------------------
// -----------------------------------------------------
function photopixel_fl_blog() {
  "use strict";

  var img = jQuery('.photopixel_fl_blog_list .img');


  img.each(function () {

    var W = jQuery(window).width();
    var element = jQuery(this);
    var imgH = element.height();
    var blog = element.parent().find('.blog_wrap');

    if (W >= 768) {
      blog.css({minHeight: imgH});
    }

  });
}
// -----------------------------------------------------
// ------    CONTACT FORM FOR CONTACT PAGE   -----------
// -----------------------------------------------------
function photopixel_fl_contact_form_contactsend() {
  "use strict";
  jQuery(".photopixel_fl_btn_contactsend").on('click', function () {

    var name = jQuery(".contact_form #name").val();
    var email = jQuery(".contact_form #email").val();
    var message = jQuery(".contact_form #message").val();
    var subject = jQuery(".contact_form #subject").val();
    var success = jQuery(".contact_form .returnmessage").data('success');

    jQuery(".contact_form .returnmessage").empty(); //To empty previous error/success message.
    //checking for blank fields
    if (name === '' || email === '' || message === '') {
      //alert("Please Fill Required Fields");
      jQuery('div.empty_notice').slideDown(500).delay(2000).slideUp(500);
    }
    else {
      // Returns successful data submission message when the entered information is stored in database.
      jQuery.post("modal/contactsend.php", {
        xx_name: name,
        xx_email: email,
        xx_message: message,
        xx_subject: subject
      }, function (data) {

        jQuery(".contact_form .returnmessage").append(data);//Append returned message to message paragraph


        if (jQuery(".contact_form .returnmessage span.contact_error").length) {
          jQuery(".contact_form .returnmessage").slideDown(500).delay(2000).slideUp(500);
        } else {
          jQuery(".contact_form .returnmessage").append("<span class='contact_success'>" + success + "</span>");
          jQuery(".contact_form .returnmessage").slideDown(500).delay(4000).slideUp(500);
        }

        if (data === "") {
          jQuery("#contact_form")[0].reset();//To reset form fields on success
        }

      });
    }
    return false;

  });
}
// -----------------------------------------------------
// ---------------    TEAM CAROUSEL    -----------------
// -----------------------------------------------------
function photopixel_fl_team_carousel() {
  "use strict";

  var carousel = jQuery('.photopixel_fl_team_carousel .owl-carousel');

  carousel.each(function () {
    jQuery(this).owlCarousel({
      autoplay: true,
      loop: true,
      margin: 20,
      dots: true,
      slideBy: 1,
      dotsEach: true,
      autoWidth: true,
      center: true,
      nav: false,
    });
  });
}
// -----------------------------------------------------
// ----------------    TESTIMONAILS    -----------------
// -----------------------------------------------------
function photopixel_f_testimonials() {
  "use strict";

  var testimonial = jQuery('.photopixel_fl_testimonails .owl-carousel');

  testimonial.each(function () {

    jQuery(this).owlCarousel({
      autoplay: true,
      loop: true,
      nav: false,
      dots: false,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        1000: {
          items: 1
        }
      }
    });

    jQuery(this).parent().parent().find('a.prev').on('click', function () {

      jQuery(this).parent().parent().find('.owl-carousel').trigger('prev.owl');

      return false;

    });
    jQuery(this).parent().parent().find('a.next').on('click', function () {
      jQuery(this).parent().parent().find('.owl-carousel').trigger('next.owl');
      return false;
    });
  });
}
// -----------------------------------------------------
// -----------------    AUDIOBOX    --------------------
// -----------------------------------------------------
function photopixel_fl_audiobox() {
  "use strict";

  var curPlaying;

  jQuery("a.volume").on('click', function (e) {

    ;
    var song = jQuery('audio')[0];

    if (song.paused) {
      song.play();
      if (curPlaying) {
        jQuery("audio", "#" + curPlaying)[0].pause();
      }
    }
    else {
      song.pause();
    }
    curPlaying = jQuery(this).parent()[0].id;

  });

}
// -----------------------------------------------------
// --------------    RESPONSIVE LOGO    ----------------
// -----------------------------------------------------
function photopixel_fl_res_logo() {
  "use strict";

  var horMenu = jQuery('.photopixel_fl_horizontal_menu');
  var horMenuIn = horMenu.find('.horizontal_menu_in');
  var logo = horMenu.find('.logo img');
  var logoH = logo.height();
  var horMenuInH = horMenuIn.height();
  var S = (horMenuInH - logoH) / 2;
  var W = jQuery(window).width();

  if (logoH < horMenuInH) {
    if (W <= 480) {
      logo.parent().css({paddingTop: 0});
      logo.parent().css({paddingBottom: 0});
    } else {
      logo.parent().css({paddingTop: S});
      logo.parent().css({paddingBottom: S});
    }
  }
}
// -----------------------------------------------------
// --------------    RESPONSIVE MENU    ----------------
// -----------------------------------------------------
function photopixel_fl_responsive_menu() {
  "use strict";

  var horMenu = jQuery('.photopixel_fl_horizontal_menu');

  var mobileNav = horMenu.find('.navigation_list');
  var trigger = horMenu.find('a.trigger');

  var ss = horMenu.find('.search_share');
  var search = ss.find('a.search');
  var share = ss.find('a.share');

  var profile = horMenu.find('a.profile');
  var profileRes = horMenu.find('.profile_res_info');

  // trigger btn
  trigger.on('click', function () {
    if (trigger.hasClass('opened')) {
      trigger.removeClass('opened');
      mobileNav.slideUp(500);
    } else {
      trigger.addClass('opened');
      // check for profile preview
      if (profile.hasClass('opened')) {
        profile.removeClass('opened');
        profileRes.slideUp(500);
        setTimeout(function () {
          mobileNav.slideDown(500);
        }, 500);
      } else {
        mobileNav.slideDown(500);
      }
    }
  });

  // search btn
  search.on('click', function () {
    jQuery('.photopixel_fl_search').addClass('opened');
  });

  // share btn
  share.on('click', function () {
    jQuery('.photopixel_fl_share').addClass('opened');
  });

  // profile btn
  profile.on('click', function () {
    if (profile.hasClass('opened')) {
      profile.removeClass('opened');
      profileRes.slideUp(500);
    } else {
      profile.addClass('opened');
      // check for mobileNav
      if (trigger.hasClass('opened')) {
        trigger.removeClass('opened');
        mobileNav.slideUp(500);
        setTimeout(function () {
          profileRes.slideDown(500);
        }, 500);
      } else {
        profileRes.slideDown(500);
      }
    }
  });


}
// -----------------------------------------------------
// ------------    IMAGE COMPORISON style    -----------
// -----------------------------------------------------
function photopixel_fl_twtw_style() {
  "use strict";

  var twtw = jQuery('.twentytwenty-container');
  var imgH = twtw.find('img').height();

  twtw.css({height: imgH});
}
// -----------------------------------------------------
// ---------------    IMAGE COMPORISON    --------------
// -----------------------------------------------------
function photopixel_fl_twtw() {
  "use strict";

  jQuery(".twentytwenty-container[data-orientation!='vertical']").twentytwenty({default_offset_pct: 0.5});
  jQuery(".twentytwenty-container[data-orientation='vertical']").twentytwenty({
    default_offset_pct: 0.5,
    orientation: 'vertical'
  });

}
// -----------------------------------------------------
// ------------    CIRCLE PROGRESS BAR    --------------
// -----------------------------------------------------
function photopixel_fl_circle_progress_bar() {
  "use strict";

  jQuery('.pie_progress').asPieProgress({
    namespace: 'pie_progress'
  });

  // Example with grater loading time - loads longer
  var timePie = jQuery('.pie_progress--countdown');

  timePie.each(function () {
    var $this = jQuery(this);
    var $time = $this.data('time-second');

    $this.asPieProgress({
      namespace: 'pie_progress',
      easing: 'linear',
      first: $time,
      max: $time,
      goal: 0,
      speed: $time * 10, // 120 s * 1000 ms per s / 100
      numberCallback: function () {
        var minutes = Math.floor(this.now / 60);
        var seconds = this.now % 60;
        if (seconds < 10) {
          seconds = '0' + seconds;
        }
        return minutes + ': ' + seconds;
      }
    });
  });

  var aaa = jQuery('.mypieprogress .row');
  var child = aaa.find('.mypie');

  child.each(function () {

    var element = jQuery(this);
    var pie = element.find('.pie_progress');

    element.waypoint({
      handler: function () {
        element.addClass('animated');
        element.addClass('zoomIn');
        setTimeout(function () {
          element.removeClass('hideforanimation');
          pie.asPieProgress('start');
        }, 400);
      },
      offset: '70%'
    });
  });

  /*
   for pie_progress
   jQuery('.pie_progress').asPieProgress('start');
   jQuery('.pie_progress').asPieProgress('finish');
   jQuery('.pie_progress').asPieProgress('go', 50);
   jQuery('.pie_progress').asPieProgress('go', '50%');
   jQuery('.pie_progress').asPieProgress('stop');
   jQuery('.pie_progress').asPieProgress('reset');
   */
}
// -----------------------------------------------------
// -------------    MAIN BUTTON'S DATA    --------------
// -----------------------------------------------------
function photopixel_fl_btn() {
  "use strict";

  var btn = jQuery('a.photopixel_fl_btn');
  btn.each(function () {
    var textColor = jQuery(this).data('text-color');
    var bgColor = jQuery(this).data('bg-color');
    var borderColor = jQuery(this).data('border-color');
    var size = jQuery(this).data('size');

    jQuery(this).css({color: textColor});
    jQuery(this).css({backgroundColor: bgColor});
    jQuery(this).css({borderColor: borderColor});


    if (size === "small") {
      jQuery(this).css({padding: "9px 20px"});
      jQuery(this).css({fontSize: "10px"});
    } else if (size === "medium") {
      jQuery(this).css({padding: "18px 40px"});
      jQuery(this).css({fontSize: "12px"});
    } else if (size === "large") {
      jQuery(this).css({padding: "27px 60px"});
      jQuery(this).css({fontSize: "19px"});
    } else {

    }
  });

  var btnAllProjects = jQuery('a.all_projects');

  btnAllProjects.each(function () {
    var thisBtn = jQuery(this);
    var textColor = thisBtn.data('text-color');

    thisBtn.css({color: textColor});
  });

}
// -----------------------------------------------------
// ----------   FULL WIDTH CONTAINER DATA    -----------
// -----------------------------------------------------
function photopixel_fl_full_width_container() {
  "use strict";

  var title = jQuery('.photopixel_fl_full_width_container');


  title.each(function () {

    var element = jQuery(this);

    var bgColor = element.find('.bg_color');
    var overlayColor = bgColor.data('color');
    var overlayOpacity = bgColor.data('opacity');

    var paddingTop = element.data('padding-top');
    var paddingBottom = element.data('padding-bottom');
    var contentHolder = element.find('.content_holder');
    var textColor = contentHolder.data('text-color');

    contentHolder.find('p').css({color: textColor});
    contentHolder.find('h3').css({color: textColor});
    contentHolder.find('span').css({color: textColor});
    contentHolder.css({color: textColor});

    element.css({paddingTop: paddingTop});
    element.css({paddingBottom: paddingBottom});

    bgColor.css({backgroundColor: overlayColor});
    bgColor.css({opacity: overlayOpacity});


  });

}
// -----------------------------------------------------
// ------------------    EASY TAB    -------------------
// -----------------------------------------------------
function photopixel_fl_easytab() {
  "use strict";

  jQuery('.photopixel_fl_tabs').easytabs({
    animate: true,
    animationSpeed: 400,
    updateHash: false
  });

}
// -----------------------------------------------------
// -------------------    TOGGLE    --------------------
// -----------------------------------------------------
function photopixel_fl_toggle() {
  "use strict";

  jQuery('.photopixel_fl_toggle').each(function (index, element) {

    var expand = jQuery(element);
    var etitle = expand.children('.tog_head');
    var econtent = expand.children('.tog_content');

    etitle.on('click', function (e) {
      ;
      if (!expand.hasClass('open')) {
        expand.addClass('open');
        econtent.slideDown(500);
      } else {
        expand.removeClass('open');
        econtent.slideUp(500);
      }
      return false;
    });
  });
}
// -----------------------------------------------------
// -----------------    ACCORDION    -------------------
// -----------------------------------------------------
function photopixel_fl_accordion() {
  "use strict";

  jQuery(".photopixel_fl_accordion").friendslab_accordion({
    showIcon: false, //boolean
    animation: true, //boolean
    closeAble: true, //boolean
    slideSpeed: 500 //integer, miliseconds
  });

}
// -----------------------------------------------------
// -----------    NICESCROLL FOR SINGLE 5    -----------
// -----------------------------------------------------
function photopixel_fl_scroll_single() {
  "use strict";

  jQuery(".photopixel_fl_scroll").niceScroll({
    cursorcolor: "#111", // change cursor color in hex
    cursoropacitymin: 0, // change opacity when cursor is inactive (scrollabar "hidden" state), range from 1 to 0
    cursoropacitymax: 1, // change opacity when cursor is active (scrollabar "visible" state), range from 1 to 0
    cursorwidth: "10px", // cursor width in pixel (you can also write "5px")
    cursorborder: "none", // css definition for cursor border
    cursorborderradius: "3px", // border radius in pixel for cursor
    background: "rgba(0,0,0,0.15)",
    autohidemode: false, // how hide the scrollbar works, possible values:
  });
}
// -----------------------------------------------------
// ----------------    PROGRESS BAR    -----------------
// -----------------------------------------------------
function photopixel_fl_progress_bar() {
  "use strict";

  var bar = jQuery('.progress_bar_wrap .progress_bar');

  bar.each(function () {

    var element = jQuery(this);
    var size = element.data('size-percent');
    var color1 = element.data('bg-color');
    var color2 = element.data('bg-color2');
    var barBg = element.find('.bar_bg');
    var bar = barBg.find('.bar');

    element.find('.bar_wrap').css("width", size + "%");

    bar.css({backgroundColor: color1});
    barBg.css({backgroundColor: color2});
  });
}
// -----------------------------------------------------
// ----------------    NOTIFICATION    -----------------
// -----------------------------------------------------
function photopixel_fl_notification() {
  "use strict";

  jQuery('.photopixel_fl_notification').each(function (index, element) {
    jQuery(element).find('span.closer').on('click', function (e) {
      ;
      jQuery(element).children().animate({opacity: 0});
      jQuery(element).delay(200).slideUp();
      return false;
    });
  });
}
// -----------------------------------------------------
// ------     SHORTCODES GALLERY OWL CAROUSEL      -----
// -----------------------------------------------------
function photopixel_fl_short_gallery_owl_carousel() {
  "use strict";

  jQuery('.section_short_i .owl-carousel').owlCarousel({
    autoplay: true,
    loop: true,
    margin: 20,
    dots: true,
    slideBy: 1,
    dotsEach: true,
    autoWidth: true,
    center: true,
  });
}
// -----------------------------------------------------
// ---------------    COLLAGE PLUS     -----------------
// -----------------------------------------------------
function photopixel_fl_collageplus() {
  "use strict";

  jQuery('.photopixel_fl_collage_plus').removeWhitespace().collagePlus({
    'targetHeight': 440,
    'effect': 'effect-6',
    'direction': 'vertical',
    'allowPartialLastRow': true
  });

}
// -----------------------------------------------------
// ----------------     WAYPOINT     -------------------
// -----------------------------------------------------
function photopixel_fl_waypoint() {
  "use strict";

  var shortB = jQuery('.section_short_b');
  var child = shortB.find('.section_short_b_in');

  child.each(function () {

    var element = jQuery(this);

    element.waypoint({
      handler: function () {
        element.addClass('animated');
        element.addClass('zoomIn');
        element.removeClass('hideforanimation');
      },
      offset: '70%'
    });
  });

  var notification = jQuery('.photopixel_fl_notification');

  notification.each(function () {

    var element = jQuery(this);

    element.waypoint({
      handler: function () {
        element.addClass('animated');
        element.addClass('zoomIn');
        element.removeClass('hideforanimation');
      },
      offset: '70%'
    });
  });

}
// -----------------------------------------------------
// ---------------     HALFSLIDE HEIGHT    -------------
// -----------------------------------------------------
function photopixel_fl_halfslide_h() {
  "use strict";

  var H = jQuery(window).height();
  var halfA = jQuery('.photopixel_fl_halfslide .half_a');
  var halfB = jQuery('.photopixel_fl_halfslide .half_b');

  var submenu = jQuery('.horizontal_menu_in');
  var submenuH = submenu.outerHeight();

  halfA.css({height: H - submenuH});
  halfB.css({height: H - submenuH});
  jQuery('.photopixel_fl_halfslide .flexslider ul.slides > li').css({height: H - submenuH});
}
// -----------------------------------------------------
// -----------     HALFSLIDE FLEXSLIDER     ------------
// -----------------------------------------------------
function photopixel_fl_halfslide_flexslider() {
  "use strict";

  var flexslider = jQuery('.photopixel_fl_halfslide .flexslider');


  flexslider.flexslider({
    animation: "fade",
    controlNav: false,
    directionNav: true,
    slideshowSpeed: 4000,
    pauseOnAction: true,
    after: function (slider) {
      if (!slider.playing) {
        slider.play();
      }
    }
  });

}
// -----------------------------------------------------
// ---------------     LIKESHARE: SHARE     ------------
// -----------------------------------------------------
function photopixel_fl_likeshare_share() {
  "use strict";

  jQuery('.likeshare a.share').on('click', function () {
    if (!jQuery('.photopixel_fl_share').hasClass('opened')) {
      jQuery('.photopixel_fl_share').addClass('opened');
      jQuery('.photopixel_fl_vertical_menu_overlay').addClass('activated');
    } else {
      jQuery('.photopixel_fl_share').removeClass('opened');
      jQuery('.photopixel_fl_vertical_menu_overlay').removeClass('activated');
    }
    return false;
  });
}
// -----------------------------------------------------
// --------------------    JARALLAX    -----------------
// -----------------------------------------------------
function photopixel_fl_jarallax() {
  "use strict";

  jQuery('.jarallax').each(function () {
    var container = jQuery(this);
    var customSpeed = container.data('speed');

    if (customSpeed !== "undefined" && customSpeed !== "") {
      customSpeed = customSpeed;
    } else {
      customSpeed = 0.5;
    }

    container.jarallax({
      speed: customSpeed
    });
  });

}
// -----------------------------------------------------
// --------------------    SUBMENU    ------------------
// -----------------------------------------------------
function photopixel_fl_submenu() {
  "use strict";

  var nav = jQuery('ul.nav');

  nav.find('a').on('click', function (e) {


    var element = jQuery(this);
    var parentItem = element.parent('li');
    var parentItems = element.parents('li');
    var parentUls = parentItem.parents('ul.sub_menu');
    var subMenu = element.next();
    var allSubMenusParents = nav.find('li');

    allSubMenusParents.removeClass('opened');

    if (subMenu.length) {

      ;

      if (!(subMenu.parent('li').hasClass('active'))) {
        if (!(parentItems.hasClass('opened'))) {
          parentItems.addClass('opened');
        }

        allSubMenusParents.each(function () {
          var el = jQuery(this);
          if (!el.hasClass('opened')) {
            el.find('ul.sub_menu').slideUp();
          }
        });

        allSubMenusParents.removeClass('active');
        parentUls.parent('li').addClass('active');
        subMenu.parent('li').addClass('active');
        subMenu.slideDown();

        setTimeout(function () {
          // Must change height to make navigation scrollable after submenu is opened. (for CHROME)
          jQuery('.photopixel_fl_leftbar_nav_in.scrollable').css({height: jQuery(window).height() + 1});
          photopixel_fl_vertical_menu_scroll();
        }, 500);


      } else {
        subMenu.parent('li').removeClass('active');
        subMenu.slideUp();

        // Must change height to make navigation scrollable after submenu is opened. (for CHROME)
        jQuery('.photopixel_fl_leftbar_nav_in.scrollable').css({height: jQuery(window).height()});
      }
      return false;
    }
  });
}
// -----------------------------------------------------
// ----------------   GRIDBG BG SETUP   ----------------
// -----------------------------------------------------
function photopixel_fl_gridbg_bg_set() {
  "use strict";

  jQuery('.photopixel_fl_gridbg_in ul li .gridli').hover(function () {

    var dataLi = jQuery(this).attr('data-li-number');
    var overlayChild = jQuery('.photopixel_fl_gridbg .overlay .' + dataLi);

    jQuery('.photopixel_fl_gridbg .overlay > div').removeClass('opened');
    overlayChild.addClass('opened');

  });

}
// -----------------------------------------------------
// ----------------   GRIDBG HEIGHT   ------------------
// -----------------------------------------------------
function photopixel_fl_gridbg_h() {
  "use strict";

  var H = jQuery(window).height();
  var grid = jQuery('.photopixel_fl_gridbg');

  grid.css({height: H});

}
// -----------------------------------------------------
// ----------------   OWL CAROUSEL LINK   --------------
// -----------------------------------------------------
function photopixel_fl_carousel() {
  "use strict";

  var carousel = jQuery('.photopixel_fl_carousel .owl-carousel');

  carousel.owlCarousel({
    items: 5,
    loop: true,
    autoplay: true,
    margin: 10,
    merge: true,
    dots: false,
    autoWidth: true,
    center: true,
    responsive: {
      678: {
        mergeFit: true
      },
      1000: {
        mergeFit: false
      }
    }
  });

  jQuery('.custom_nav a.prev').on('click', function () {
    carousel.owlCarousel().trigger('prev.owl.carousel');
    return false;
  });

  jQuery('.custom_nav a.next').on('click', function () {
    carousel.owlCarousel().trigger('next.owl.carousel');
    return false;
  });

  var teamCarousel = jQuery('.our_team .owl-carousel');

  teamCarousel.owlCarousel({
    autoplay: true,
    loop: true,
    margin: 20,
    dots: true,
    slideBy: 1,
    dotsEach: true,
    autoWidth: true,
    center: true,
  });

}
// -----------------------------------------------------
// ---------------   tooltip_all FIXER    --------------
// -----------------------------------------------------
function photopixel_fl_tooltip_all_fixer() {
  "use strict";

  var tooltip = jQuery('.all .all_in .tooltip_all');
  var tooltipOuterW = tooltip.outerWidth();
  var all = jQuery('.all');
  var allOuterW = all.outerWidth();

  tooltip.css({left: -(tooltipOuterW - allOuterW) / 2});

}
// -----------------------------------------------------
// ---------------   STICKY SIDEBAR    -----------------
// -----------------------------------------------------
function photopixel_fl_sticky_sidebar() {

  "use strict";

  jQuery('.sticky_sidebar').theiaStickySidebar({
    containerSelector: '', // The sidebar's container element. If not specified, it defaults to the sidebar's parent.
    additionalMarginTop: 50,
    additionalMarginBottom: 0,
    updateSidebarHeight: true, // Updates the sidebar's height. Use this if the background isn't showing properly, for example.
    minWidth: 979, // The sidebar returns to normal if its width is below this value.
  });

}
// -----------------------------------------------------
// --------------    MAGNIFIC POPUP    -----------------
// -----------------------------------------------------
function photopixel_fl_magnific_popup() {
  "use strict";

  jQuery('.open-popup-link').magnificPopup({
    type: 'inline',
    midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
  });

  jQuery('.gallery').each(function () { // the containers for all your galleries
    jQuery(this).magnificPopup({
      delegate: 'a', // the selector for gallery item
      type: 'image',
      gallery: {
        enabled: true
      }
    });
  });
}
// -----------------------------------------------------
// --------------    ISOTOPE MASONRY    ----------------
// -----------------------------------------------------
function photopixel_fl_isotope() {
  "use strict";

  jQuery('.photopixel_fl_masonry').isotope({
    itemSelector: '.photopixel_fl_masonry_in',
    masonry: {}
  });

}
// -----------------------------------------------------
// ---------------    IMAGE TO SVG    ------------------
// -----------------------------------------------------
function photopixel_fl_img_to_svg() {
  "use strict";

  jQuery('img.svg').each(function () {
    var $img = jQuery(this);
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');

    jQuery.get(imgURL, function (data) {
      // Get the SVG tag, ignore the rest
      var $svg = jQuery(data).find('svg');

      // Add replaced image's classes to the new SVG
      if (typeof imgClass !== 'undefined') {
        $svg = $svg.attr('class', imgClass + ' replaced-svg');
      }

      // Remove any invalid XML tags as per http://validator.w3.org
      $svg = $svg.removeAttr('xmlns:a');

      // Replace image with new SVG
      $img.replaceWith($svg);

    }, 'xml');

  });

}
// -----------------------------------------------------
// -------------    PORTFOILIO HEIGHT    ---------------
// -----------------------------------------------------
function photopixel_fl_project_height_regulation() {
  "use strict";

  var H = jQuery(window).height();
  var project = jQuery('.third_type_of_project');
  var submenu = jQuery('.horizontal_menu_in');
  var submenuH = submenu.outerHeight();

  project.css({height: H - submenuH});

}
// -----------------------------------------------------
// ---------------    TOTOP MYHIDE    ------------------
// -----------------------------------------------------
function photopixel_fl_totop_myhide() {
  "use strict";

  var toTop = jQuery("a.totop");
  var topOffSet = toTop.offset().top;

  if (topOffSet > 1000) {
    toTop.addClass('opened');
  } else {
    toTop.removeClass('opened');
  }

}
// -----------------------------------------------------
// --------------------    TOTOP    --------------------
// -----------------------------------------------------
function photopixel_fl_totop() {
  "use strict";

  jQuery("a.totop").on('click', function (e) {
    ;
    jQuery("html, body").animate({scrollTop: 0}, 'slow');
    return false;
  });

}
// -----------------------------------------------------
// ---------------      MAIN CLOSER     ----------------
// -----------------------------------------------------
function photopixel_fl_closer() {
  "use strict";

  jQuery('.photopixel_fl_vertical_menu_overlay').on('click', function () {

    //for removing all vertical menu previews
    jQuery('.photopixel_fl_leftbar_nav').removeClass('opened');
    jQuery('.photopixel_fl_profile_prev').removeClass('opened');
    jQuery('.photopixel_fl_gallery_prev').removeClass('opened');
    jQuery('.photopixel_fl_search').removeClass('opened');
    jQuery('.photopixel_fl_share').removeClass('opened');

    //for removing vertical menu's overlay
    jQuery('.photopixel_fl_vertical_menu_overlay').removeClass('activated');


  });
  return false;

}
// -----------------------------------------------------
// ----------      SEARCH AND SHARE CLOSER    ----------
// -----------------------------------------------------
function phopixel_fl_secondary_closer() {
  "use strict";

  jQuery('.closer').on('click', function () {
    jQuery('.photopixel_fl_search').removeClass('opened');
    jQuery('.photopixel_fl_share').removeClass('opened');
    jQuery('.photopixel_fl_vertical_menu_overlay').removeClass('activated');


  });
  return false;

}
// -----------------------------------------------------
// ------------      VERTICAL MENU DATA    -------------
// -----------------------------------------------------
function photopixel_fl_vertical_menu_data() {
  "use strict";

  var scrollpos = '';
  var offset = jQuery('.photopixel_fl_leftbar').offset().top;

  if (offset > 0) {
    jQuery('.photopixel_fl_vertical_menu').addClass('scrolled');
  }
  else {
    jQuery('.photopixel_fl_vertical_menu').removeClass('scrolled');
  }

  jQuery(window).on('scroll', function () {
    scrollpos = jQuery(window).scrollTop();

    if (scrollpos > 0) {
      jQuery('.photopixel_fl_vertical_menu').addClass('scrolled');
    }
    else {
      jQuery('.photopixel_fl_vertical_menu').removeClass('scrolled');
    }
  });

}
// -----------------------------------------------------
// --------------      VOLUME TRIGGER    ---------------
// -----------------------------------------------------
function photopixel_fl_volume() {
  "use strict";

  jQuery('.photopixel_fl_leftbar a.volume').on('click', function () {
    if (!jQuery(this).hasClass('opened')) {
      jQuery(this).addClass('opened');
      jQuery('.photopixel_fl_leftbar a.volume svg.volumeoff').removeClass('hidden');
      jQuery('.photopixel_fl_leftbar a.volume svg.volumeon').addClass('hidden');
    } else {
      jQuery(this).removeClass('opened');
      jQuery('.photopixel_fl_leftbar a.volume svg.volumeoff').addClass('hidden');
      jQuery('.photopixel_fl_leftbar a.volume svg.volumeon').removeClass('hidden');
    }
    return false;
  });

  jQuery('.photopixel_fl_horizontal_menu a.volume').on('click', function () {
    if (!jQuery(this).hasClass('opened')) {
      jQuery(this).addClass('opened');
      jQuery('.photopixel_fl_horizontal_menu a.volume svg.volumeoff').removeClass('hidden');
      jQuery('.photopixel_fl_horizontal_menu a.volume svg.volumeon').addClass('hidden');
    } else {
      jQuery(this).removeClass('opened');
      jQuery('.photopixel_fl_horizontal_menu a.volume svg.volumeoff').addClass('hidden');
      jQuery('.photopixel_fl_horizontal_menu a.volume svg.volumeon').removeClass('hidden');
    }
    return false;
  });

}
// -----------------------------------------------------
// ---------------     SHARE PREVIEW     ---------------
// -----------------------------------------------------
function photopixel_fl_share() {
  "use strict";

  jQuery('.photopixel_fl_leftbar a.share').on('click', function () {
    if (!jQuery('.photopixel_fl_share').hasClass('opened')) {

      //for removing all old classes
      jQuery('.photopixel_fl_leftbar_nav').removeClass('opened');
      jQuery('.photopixel_fl_profile_prev').removeClass('opened');
      jQuery('.photopixel_fl_gallery_prev').removeClass('opened');
      jQuery('.photopixel_fl_search').removeClass('opened');

      jQuery('.photopixel_fl_vertical_menu_overlay').removeClass('activated');
      //for removing all old classes

      jQuery('.photopixel_fl_share').addClass('opened');
      jQuery('.photopixel_fl_vertical_menu_overlay').addClass('activated');
    } else {
      jQuery('.photopixel_fl_share').removeClass('opened');
      jQuery('.photopixel_fl_vertical_menu_overlay').removeClass('activated');
    }
    return false;
  });

}
// -----------------------------------------------------
// ---------------        SEARCH       -----------------
// -----------------------------------------------------
function photopixel_fl_search() {
  "use strict";

  jQuery('.photopixel_fl_leftbar a.search').on('click', function () {
    if (!jQuery('.photopixel_fl_search').hasClass('opened')) {

      //for removing all old classes
      jQuery('.photopixel_fl_leftbar_nav').removeClass('opened');
      jQuery('.photopixel_fl_profile_prev').removeClass('opened');
      jQuery('.photopixel_fl_gallery_prev').removeClass('opened');
      jQuery('.photopixel_fl_share').removeClass('opened');

      jQuery('.photopixel_fl_vertical_menu_overlay').removeClass('activated');
      //for removing all old classes

      jQuery('.photopixel_fl_search').addClass('opened');
      jQuery('.photopixel_fl_vertical_menu_overlay').addClass('activated');
    } else {
      jQuery('.photopixel_fl_search').removeClass('opened');
      jQuery('.photopixel_fl_vertical_menu_overlay').removeClass('activated');
    }
    return false;
  });

}
// -----------------------------------------------------
// ---------------  GALLERY PREVIEW    -----------------
// -----------------------------------------------------
function photopixel_fl_gallery_prev() {
  "use strict";

  jQuery('.photopixel_fl_leftbar a.gallery').on('click', function () {
    if (!jQuery('.photopixel_fl_gallery_prev').hasClass('opened')) {

      //for removing all old classes
      jQuery('.photopixel_fl_leftbar_nav').removeClass('opened');
      jQuery('.photopixel_fl_profile_prev').removeClass('opened');
      jQuery('.photopixel_fl_search').removeClass('opened');
      jQuery('.photopixel_fl_share').removeClass('opened');

      jQuery('.photopixel_fl_vertical_menu_overlay').removeClass('activated');
      //for removing all old classes

      jQuery('.photopixel_fl_gallery_prev').addClass('opened');
      jQuery('.photopixel_fl_vertical_menu_overlay').addClass('activated');
    } else {
      jQuery('.photopixel_fl_gallery_prev').removeClass('opened');
      jQuery('.photopixel_fl_vertical_menu_overlay').removeClass('activated');
    }
    return false;
  });

}
// -----------------------------------------------------
// ---------------  PROFILE PREVIEW    -----------------
// -----------------------------------------------------
function photopixel_fl_profile_prev() {
  "use strict";

  jQuery('.photopixel_fl_leftbar a.profile').on('click', function () {
    if (!jQuery('.photopixel_fl_profile_prev').hasClass('opened')) {

      //for removing all old classes
      jQuery('.photopixel_fl_leftbar_nav').removeClass('opened');
      jQuery('.photopixel_fl_gallery_prev').removeClass('opened');
      jQuery('.photopixel_fl_search').removeClass('opened');
      jQuery('.photopixel_fl_share').removeClass('opened');

      jQuery('.photopixel_fl_vertical_menu_overlay').removeClass('activated');
      //for removing all old classes


      jQuery('.photopixel_fl_profile_prev').addClass('opened');
      jQuery('.photopixel_fl_vertical_menu_overlay').addClass('activated');
    } else {
      jQuery('.photopixel_fl_profile_prev').removeClass('opened');
      jQuery('.photopixel_fl_vertical_menu_overlay').removeClass('activated');
    }
    return false;
  });

}
// -----------------------------------------------------
// -------------  LEFT BAR NAVIGATION    ---------------
// -----------------------------------------------------
function photopixel_fl_left_bar_nav() {
  "use strict";

  jQuery('.photopixel_fl_leftbar a.trigger').on('click', function () {
    if (!jQuery('.photopixel_fl_leftbar_nav').hasClass('opened')) {

      //for removing all old classes
      jQuery('.photopixel_fl_profile_prev').removeClass('opened');
      jQuery('.photopixel_fl_gallery_prev').removeClass('opened');
      jQuery('.photopixel_fl_search').removeClass('opened');
      jQuery('.photopixel_fl_share').removeClass('opened');

      jQuery('.photopixel_fl_vertical_menu_overlay').removeClass('activated');
      //for removing all old classes

      jQuery('.photopixel_fl_leftbar_nav').addClass('opened');
      jQuery('.photopixel_fl_vertical_menu_overlay').addClass('activated');
    } else {
      jQuery('.photopixel_fl_leftbar_nav').removeClass('opened');
      jQuery('.photopixel_fl_vertical_menu_overlay').removeClass('activated');
    }
    return false;
  });

}
// -----------------------------------------------------
// -------------    NEXT SLIDE BUTTON ------------------
// -----------------------------------------------------
function photopixel_fl_next_slide_button() {
  "use strict";

  jQuery('.photopixel_fl_main_slider .photopixel_fl_overlay').on('click', function () {
    setTimeout(function () {
      jQuery('.flexslider').flexslider('next');
    }, 100);
    return false;
  });

}
// -----------------------------------------------------
// -------------    VERTICAL MENU SCROLL ---------------
// -----------------------------------------------------
function photopixel_fl_vertical_menu_scroll() {
  "use strict";

  var H = jQuery(window).height();
  var scrollable = jQuery('.scrollable');

  var profile = jQuery('.photopixel_fl_profile_prev');
  var profprev = profile.find('.profile_preivew');
  var profH = profprev.outerHeight(true, true);

  if (profH > H) {
    //profile.css({height:profH});
  }

  var leftbar = jQuery('.photopixel_fl_leftbar_nav');
  var leftbarprev = leftbar.find('.left_bar');
  var leftbarH = leftbarprev.outerHeight(true, true);

  if (leftbarH > H) {
    //leftbar.css({height:leftbarH});
  }

  scrollable.each(function () {
    var element = jQuery(this);
    var wH = jQuery(window).height();

    element.css({height: wH});

    element.niceScroll({
      touchbehavior: false,
      cursorwidth: 0,
      autohidemode: true,
      cursorborder: "0px solid #eee"
    });
  });

}
// -----------------------------------------------------
// --------    MENU HEIGHT REGULATION    ---------------
// -----------------------------------------------------
function photopixel_fl_vertical_menu_height_regulation() {
  "use strict";

  var H = jQuery(window).height();
  var menu = jQuery('.photopixel_fl_vertical_menu');
  var leftbar = jQuery('.photopixel_fl_leftbar');

  menu.css({height: H});
  leftbar.css({height: H});

  var ul = jQuery('.photopixel_fl_leftbar ul');
  var copy = jQuery('.photopixel_fl_leftbar .photopixel_fl_cright_wrap');
  var copyHeight = copy.find('.photopixel_fl_cright').outerHeight();
  var asd = H - copyHeight - 40;

  copy.css({height: copyHeight + 40});
  ul.css({minHeight: asd - 50});

}
// -----------------------------------------------------
// --------    IMG HEIGHT REGULATION    ----------------
// -----------------------------------------------------
function photopixel_fl_img_height_regulation() {
  "use strict";

  var H = jQuery(window).height();
  var mainSlider = jQuery('.photopixel_fl_main_slider');
  var list = jQuery('.photopixel_fl_main_slider .flexslider ul.slides li');

  var submenu = jQuery('.horizontal_menu_in');
  var submenuH = submenu.outerHeight();

  mainSlider.css({height: H - submenuH});
  list.css({height: H - submenuH});

}
// -----------------------------------------------------
// ------------------    SLIDER    ---------------------
// -----------------------------------------------------
function photopixel_fl_main_slider() {
  "use strict";

  jQuery('.photopixel_fl_main_slider .flexslider').flexslider({
    animation: "fade",
    controlNav: false,
    directionNav: false,
    slideshowSpeed: 4000,
    pauseOnAction: true,
    after: function (slider) {
      if (!slider.playing) {
        slider.play();
      }
    }
  });

}
