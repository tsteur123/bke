//speelveld resetten
var GAME_FIELD = document.getElementById("speelveld").getElementsByTagName('img');
function clearGameField() {
  for(var celnum = 0; celnum < 9; celnum++) {
    GAME_FIELD[celnum].src = "img/empty.jpg";
  }
}
//bepalen wie aan de beurt is
var randomStart = Math.floor(Math.random() * 2);
$( document ).ready(function() {
    $("#spelerBeurt").html(randomStart);
    if(randomStart == 0){
        $("#turnImg").attr("src","img/cross.jpg");
    }
    else {
        $("#turnImg").attr("src","img/circle.jpg");
    }
});
//start button
$(".game-button").click(function(){
    $(".game-button").html("Reset spel");

});
//reset button
$(".game-button").click(function(){
    if ($(".game-button").html() == "Reset spel") {
        clearGameField();
    }
});
//als je op het speelveld klikt
$("#speelveld tr td").one('click', function (event) {
    if ($(".game-button").html() == "Start spel") {
        alert("Je kunt nog niet beginnen");
    } else {
        if(randomStart == 0){
            var val = $(this).children().attr('src', 'img/cross.jpg');
            randomStart = 1;
            $("#spelerBeurt").html("1");
            $("#turnImg").attr("src", "img/circle.jpg");
        }
        else {
            var val = $(this).children().attr('src', 'img/circle.jpg');
            randomStart = 0;
            $("#spelerBeurt").html("0");
            $("#turnImg").attr("src", "img/cross.jpg");
            $('src', 'img/circle.jpg').unbind("click");
        }
    }
});
