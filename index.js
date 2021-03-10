var homeSection = $('.section1');
var projectSection = $('.projects');
var aboutSection = $('.about');
var contactSection = $('.contact');

var homeMenu = $('.home-menu')
var projectsMenu = $('.projects-menu');
var contactMenu = $('.contact-menu');
var aboutMenu = $('.about-menu');

homeMenu.click(function() {
  projectSection.removeClass('slide-left');
  aboutSection.removeClass('slide-right');
  contactSection.removeClass('slide-up');
  contactMenu.removeClass('contact-menu-active');
  aboutMenu.removeClass('about-menu-active');
  projectsMenu.removeClass('projects-menu-active');
})

projectsMenu.click(function() {
  aboutSection.removeClass('slide-right');
  contactSection.removeClass('slide-up');
  contactMenu.removeClass('contact-menu-active');
  aboutMenu.removeClass('about-menu-active');

  projectSection.toggleClass('slide-left');
  projectsMenu.toggleClass('projects-menu-active')
})

aboutMenu.click(function() {
  projectSection.removeClass('slide-left');
  contactSection.removeClass('slide-up');
  projectsMenu.removeClass('projects-menu-active');
  contactMenu.removeClass('contact-menu-active');

  aboutSection.toggleClass('slide-right');
  aboutMenu.toggleClass('about-menu-active');
})

contactMenu.click(function() {
  projectSection.removeClass('slide-left');
  aboutSection.removeClass('slide-right');
  projectsMenu.removeClass('projects-menu-active');
  aboutMenu.removeClass('about-menu-active');

  contactMenu.toggleClass('contact-menu-active');
  contactSection.toggleClass('slide-up');
})