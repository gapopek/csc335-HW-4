{"filter":false,"title":"hw2.js","tooltip":"/csc335-HW-4/hw2.js","undoManager":{"mark":0,"position":0,"stack":[[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":29,"column":3},"action":"insert","lines":["$(function(){","","  $(\"h1\").animate({","    \"margin-left\": \"100px\"","  }, \"slow\");","  ","  ","  $(\"h1\").mouseover(function() {","    $('.button').css('background-color', 'green');","  });","  $(\"h1\").mouseout(function() {","    $(\".button\").css(\"backgroundColor\", \"white\");","  });","  ","  ","  $('.button:contains(\"Click here\")').click(function(){","    $(this).parent(\"li:not(:has(ul))\").append(\"<ul><li></li></ul>\");","    $(this).parent(\"li\").find(\"li\").append('<imput type=\"button\" value=\"delete me\" />');","    $(':button:last').click(function(){","      $(this).remove();","    });","  });","  ","  $('.button:contains(\"And now for something\")').click(function(){","    $(this).replaceWith(\"<span></span>\");","    $('span:empty()').text('Nobody expects the spanish inquisition!');","    $('span:contains(\"Nobody expects the spanish inquisition!\")').css({'color': 'limegreen', 'background-color':'purple'});","  });","  ","});"]}]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":29,"column":3},"end":{"row":29,"column":3},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1427818452149,"hash":"05338796ea30d2d4b987505213bbf3ed2dd1deca"}