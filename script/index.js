$(window).on("load", function() {
  $("#loader").fadeOut("slow");
})

/* Toggle Hamburger Menu */
var line1 = $('.line1');
var line2 = $('.line2');
var line3 = $('.line3');
var dropdownNav = $('.dropdown-nav');

$('.burger-menu').click(function() {
  line1.toggleClass('toggle1');
  line2.toggleClass('toggle2');
  line3.toggleClass('toggle3');
  dropdownNav.toggleClass('toggle-drowpdown')
});
/* Toggle Hamburger Menu */

/* On Scroll Animation */
var nav = $('.nav');
var navLogo = $('.logo-container');
var heroLogo = $('.hero-logo');
var heroBtn = $('.hero-btn');

var storyImgContent = $('.images-content');
var storyTextContent = $('.desc-content');
var storyPhoto = $('.story-photo');
var storyStamp = $('.story-stamp');
var storyText = $('.story-text');

var bakeryTitle = $('.bakery-title');
var bakeryDesc = $('.bakery-desc');
var bakeryBtn = $('.bakery-btn');

if (storyImgContent.visible(true)) {
  storyText.addClass('slide-up');
  storyPhoto.addClass('slide-in');
  storyStamp.addClass('scale-down');
}

$(window).scroll(function(event) {
  if (window.innerWidth > 768) {
    /* Hide show navbar when scroll pass hero button */
    !heroLogo.visible() ? nav.addClass('nav-fixed') : nav.removeClass('nav-fixed');
    !heroLogo.visible() ? navLogo.addClass('flex-center') : navLogo.removeClass('flex-center');
    !heroBtn.visible() ? nav.addClass('nav-slide') : nav.removeClass('nav-slide');
    /* Hide show navbar when scroll pass hero button */  
  }

  storyTextContent.visible(true) && storyText.addClass('slide-up');
  storyImgContent.visible(true) && storyPhoto.addClass('slide-in');
  storyImgContent.visible(true) && storyStamp.addClass('scale-down');

  if(bakeryTitle.visible(true)) {
    bakeryTitle.addClass('slide-up-bakery');
    bakeryDesc.addClass('slide-up-bakery');
    bakeryBtn.addClass('slide-up-bakery');
  }
});
/* On Scroll Animation */

$('.ig-icon').click(function() {
  window.open('http://www.instagram.com/hampstead.cafe', '_blank')
})

$('.fb-icon').click(function() {
  window.open('https://www.facebook.com/HampsteadCafe/', '_blank')
})

$(".about").click(function() {
  dropdownNav.toggleClass('toggle-drowpdown')
  $('html, body').animate({
      scrollTop: $(".story-section").offset().top - 70
  }, 800);
});

$(".gallery").click(function() {
  dropdownNav.toggleClass('toggle-drowpdown')
  $('html, body').animate({
      scrollTop: $(".ig-section").offset().top - 70
  }, 800);
});

$(".contact").click(function() {
  dropdownNav.toggleClass('toggle-drowpdown')
  $('html, body').animate({
      scrollTop: $(".contact-section").offset().top - (window.innerWidth <= 768 ? 100 : 70)
  }, 800);
});

$(".menu").click(function() {
  dropdownNav.toggleClass('toggle-drowpdown');
  window.open('/assets/Hampstead-Menu.pdf'); return true;
});

function viewPost(url) {
  window.open(url, '_blank')
}