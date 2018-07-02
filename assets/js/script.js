$('input').keydown(function(e) {
  var margin;
  var maxBorder;
  var move;
  // activate var by key pressed
  switch (e.which) {
    // left movement
    case 37:
    margin = - 10;
    maxBorder = $(document).width();
    move = 'left';
    break;
    // up movement
    case 39:
    margin = 10;
    maxBorder = $(document).width();
    move = 'left';
    break;
    // down movement
    case 38:
    margin = - 10;
    maxBorder = $(document).height();
    move = 'top';
    break;
    // right movement
    case 40:
    margin = 10;
    maxBorder = $(document).height();
    move = 'top';
    break;
  }
  //
  var newPosition = parseInt($('#square').css(move)) + margin;
  maxBorder = parseInt(maxBorder);
  //
  if(margin > 0){
    newPosition = (newPosition + 50 > maxBorder)? 0 : newPosition;
  } else {
    newPosition = (newPosition -100 < -100)? maxBorder - 50 : newPosition;
  }
  //
  $('#square').css(move, newPosition + 'px');
});
