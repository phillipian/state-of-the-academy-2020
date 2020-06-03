$(document).ready(function(){
  //Smooth scrolling
  $("#sidebar a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });

  //Snap scrolling
  $(document).scroll(function() {
    if($(document).width() > 900){
      if($(document).scrollTop() + 60 > $("#sections").offset().top){
        $("#sidebar").css("position", "fixed");
        $("#sidebar").css("top", "40px");
      }
      else{
        $("#sidebar").css("position", "absolute");
        $("#sidebar").css("top", "80px");
      }
    }
  });

  $(window).resize(function(){
    if($(document).width() > 900){
      if($(document).scrollTop() + 60 > $("#sections").offset().top){
        $("#sidebar").css("position", "fixed");
        $("#sidebar").css("top", "40px");
      }
      else{
        $("#sidebar").css("position", "absolute");
        $("#sidebar").css("top", "80px");
      }
    }
    else{
      $("#sidebar").css("position", "relative");
      $("#sidebar").css("top", "0px");
    }
  });
});
