var homeSection = $('.section1');
var projectSection = $('.projects');
var aboutSection = $('.about');
var contactSection = $('.contact');

var projectsMenu = $('.projects-menu');

$('.home').click(function() {
  projectSection.removeClass('slide-left');
  aboutSection.removeClass('slide-right');
  contactSection.removeClass('slide-up');
})

$('.projects-menu').click(function() {
  aboutSection.removeClass('slide-right');
  contactSection.removeClass('slide-up');
  projectSection.toggleClass('slide-left');
  projectsMenu.toggleClass('projects-menu-active')
})

$('.about-menu').click(function() {
  projectSection.removeClass('slide-left');
  contactSection.removeClass('slide-up');
  aboutSection.toggleClass('slide-right');
})

$('.contact-menu').click(function() {
  projectSection.removeClass('slide-left');
  aboutSection.removeClass('slide-right');
  projectsMenu.removeClass('projects-menu-active');
  contactSection.toggleClass('slide-up');
})