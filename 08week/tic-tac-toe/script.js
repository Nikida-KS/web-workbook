'use strict';

$(document).ready(function() {

//Putting this outside the onclick function allowed it to change
let player = "O";

//switches the xs and os when you click on data-cells but only if they're empty
$('[data-cell]').on('click', function(){
  //checks if the data-cell is empty
  if($(this).is(':empty')){
    //types the current player in the data-cell
    $(this).text(`${player}`)
    //checks for a winner before the player is switched
        winner();
        //switches the player after the play is made or winner is claimed
  if (player === 'X') {player = 'O';}
  else {player = 'X';}
    }
})

function winner (){
  /*Logic: each if statement checks for a winning pattern by determining if the
  data-cells in the pattern are equal and not empty and there hasn't been a winner claimed yet.
  Winner function is run after every play, so the annoucement includes the current player*/

  //row check
    if($("[data-cell~='0']").text() === $("[data-cell~='1']").text() &&
       $("[data-cell~='1']").text() === $("[data-cell~='2']").text() &&
         !$("[data-cell~='1']").is(':empty') &&
         $("#announce-winner").is(':empty')){
         $("#announce-winner").text(`${player} wins!`);
       }
    if($("[data-cell~='3']").text() === $("[data-cell~='4']").text() &&
       $("[data-cell~='4']").text() === $("[data-cell~='5']").text() &&
         !$("[data-cell~='3']").is(':empty') && $("#announce-winner").is(':empty')){
          $("#announce-winner").text(`${player} wins!`);

          }
    if($("[data-cell~='6']").text() === $("[data-cell~='7']").text() &&
       $("[data-cell~='7']").text() === $("[data-cell~='8']").text() &&
         !$("[data-cell~='6']").is(':empty') && $("#announce-winner").is(':empty')){
          $("#announce-winner").text(`${player} wins!`);

          }
          //column check
          if($("[data-cell~='0']").text() === $("[data-cell~='3']").text() &&
             $("[data-cell~='3']").text() === $("[data-cell~='6']").text() &&
               !$("[data-cell~='0']").is(':empty') && $("#announce-winner").is(':empty')){
               $("#announce-winner").text(`${player} wins!`);

             }
          if($("[data-cell~='1']").text() === $("[data-cell~='4']").text() &&
             $("[data-cell~='4']").text() === $("[data-cell~='7']").text() &&
               !$("[data-cell~='1']").is(':empty') && $("#announce-winner").is(':empty')){
                $("#announce-winner").text(`${player} wins!`);

                }
          if($("[data-cell~='2']").text() === $("[data-cell~='5']").text() &&
             $("[data-cell~='5']").text() === $("[data-cell~='8']").text() &&
               !$("[data-cell~='2']").is(':empty') && $("#announce-winner").is(':empty')){
                $("#announce-winner").text(`${player} wins!`);

                }
                //diagonal check
                if($("[data-cell~='0']").text() === $("[data-cell~='4']").text() &&
                   $("[data-cell~='4']").text() === $("[data-cell~='8']").text() &&
                     !$("[data-cell~='0']").is(':empty') && $("#announce-winner").is(':empty')){
                     $("#announce-winner").text(`${player} wins!`);

                   }
                if($("[data-cell~='2']").text() === $("[data-cell~='4']").text() &&
                   $("[data-cell~='4']").text() === $("[data-cell~='6']").text() &&
                     !$("[data-cell~='2']").is(':empty') && $("#announce-winner").is(':empty')){
                      $("#announce-winner").text(`${player} wins!`);

                      }

                      //asserts a scratch because all of the spaces are filled but there hasn't been a winner
                      if(!$("[data-cell~='0']").is(':empty') &&
                         !$("[data-cell~='1']").is(':empty') &&
                         !$("[data-cell~='2']").is(':empty') &&
                         !$("[data-cell~='3']").is(':empty') &&
                         !$("[data-cell~='4']").is(':empty') &&
                         !$("[data-cell~='5']").is(':empty') &&
                         !$("[data-cell~='6']").is(':empty') &&
                         !$("[data-cell~='7']").is(':empty') &&
                         !$("[data-cell~='8']").is(':empty') &&
                         $("#announce-winner").is(':empty')) {
                            $("#announce-winner").text(`EVERYONE LOSES`);
                          }
};



});

//clears the board when you click the button
$( "#clear" ).click(function() {
  $( "[data-cell]" ).empty();
  $( "#announce-winner" ).empty();});
