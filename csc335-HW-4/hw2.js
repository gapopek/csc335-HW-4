$(function(){

  $("h1").animate({
    "margin-left": "100px"
  }, "slow");
  
  
  $("h1").mouseover(function() {
    $('.button').css('background-color', 'green');
  });
  $("h1").mouseout(function() {
    $(".button").css("backgroundColor", "white");
  });
  
  
  $('.button:contains("Click here")').click(function(){
    $(this).parent("li:not(:has(ul))").append("<ul><li></li></ul>");
    $(this).parent("li").find("li").append('<imput type="button" value="delete me" />');
    $(':button:last').click(function(){
      $(this).remove();
    });
  });
  
  $('.button:contains("And now for something")').click(function(){
    $(this).replaceWith("<span></span>");
    $('span:empty()').text('Nobody expects the spanish inquisition!');
    $('span:contains("Nobody expects the spanish inquisition!")').css({'color': 'limegreen', 'background-color':'purple'});
  });
  
});