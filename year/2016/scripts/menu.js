/**
 * Modified version of main.js from The Crimson's 2014/2015 survey.
 */

$(document).ready(function() {
  /**
   * Stick the navigation panel after scrolling past intro.
   */
  $("#general").waypoint(function(direction) {
    if (direction === "down") {
      $("nav").addClass("stuck");
    } else if (direction === "up") {
      $("nav").removeClass();
    }
  });

  /**
   * Change the navigation item when the user scrolls down. (Positive offset)
   */
  $("section").waypoint(function(direction) {
    if (direction === 'down') {
      $("nav li a").removeClass();
      return $("nav li a[href='#" + this.element.id + "']").addClass("active");
    }
  }, {
    offset: 300
  });

  /**
   * Change the navigation item when the user scrolls up. (Negative offset)
   */
  $("section").waypoint(function(direction) {
    if (direction === 'up') {
      $("nav li a").removeClass();
      return $("nav li a[href='#" + this.element.id + "']").addClass("active");
    }
  }, {
    offset: -900
  });

  /**
   * Scroll to a section when a navigation item is clicked.
   */
  $("nav li a").click(function(e) {
    e.preventDefault();
    var href = $(e.target).attr("href");
    return $("html, body").animate({
      scrollTop: $(href).offset().top
    }, 1000);
  });
});
