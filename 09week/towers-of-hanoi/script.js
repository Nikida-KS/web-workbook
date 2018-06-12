'use strict';

$(document).ready(function() {

  //picks things up
  $('.draggable').draggable({
    revert: 'invalid'
  });

  $('.dropArea').droppable({
    drop: function(event, ui){
      let $dragging = $(ui.draggable).data('block');
      let $dropTop = $(this).children("div:last").data('block');
      if($dragging > $dropTop){
        $(ui.draggable).draggable('option', 'revert', true);
      }
      else{
     $(ui.draggable).appendTo(this).attr('style', 'position: "relative"');
    }
      checkWin();
  }
});

  function checkWin(){
    if($("[data-stack=3]").children().length === 4){
      $("#announce-game-won").text(`WINNER`);
    }
  }

  $('#clear').click(function(){
    $("#announce-game-won").empty();
    location.reload();
  })

  //   let $clicks = 0;
  // $(".draggable").click(function(){
  //   $("#counter").text(`${clicks} clicks`)
  // })
});
