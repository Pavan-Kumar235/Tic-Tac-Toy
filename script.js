let boxes = $(".box");      // handling box with jquery
let switchTurn = $(".switch-bg");

let jsbox = document.querySelectorAll(".box");  // handling box with js

let gameOver = false;

let turnValue = "X";

for(var i=0;i<boxes.length;i++) {
    $(boxes[i]).text("");
    $(boxes[i]).click( function() {
        if(!gameOver && $(this).text() === "") {
            $(this).text(turnValue);
            checkWinner();
            changeValue();
            checkDraw();
        }
    })
}

function changeValue() {
    if(turnValue === "X") {
        turnValue = "O";
        $(switchTurn).css("left", "85px");
        $(switchTurn).css("border-radius", "0px 20px 20px 0px");
    } else {
        turnValue = "X";
        $(switchTurn).css("left", "0px");
        $(switchTurn).css("border-radius", "20px 0px 0px 20px");
    }
}
function checkWinner() {
    let winConditions = [
        [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
    ];
    for(var i=0; i<winConditions.length; i++) {
        var value1 = $(boxes[winConditions[i][0]]).text();
        var value2 = $(boxes[winConditions[i][1]]).text();
        var value3 = $(boxes[winConditions[i][2]]).text();
        if(value1 !== "" && value2 === value1 && value3 === value1) {
            $(".results").text(turnValue + " win's");
            $("#restart").css("display","inline");
            gameOver = true;
            for(var j=0;j<winConditions[i].length;j++) {
                $(boxes[winConditions[i][j]]).css("background-color", "rgb(3, 209, 3)");
                $(boxes[winConditions[i][j]]).css("color", "black");
                $(boxes[winConditions[i][j]]).css("transform", "scale(0.8)");
                $(boxes[winConditions[i][j]]).css("box-shadow", "0px 0px 10px 5px rgb(3, 209, 3)")
            }
        }
    }
}
function checkDraw() {
    let draw = true;
    if(!gameOver) {
        for(var i=0;i<boxes.length;i++) {
            if($(boxes[i]).text() === "")
                draw = false;
        }
        if(draw) {
            gameOver = true;
            $(".results").text("Draw");
            $("#restart").css("display", "inline");
        }
    }
}
$("#restart").click(function() {
    if(turnValue === "O") {
        $(switchTurn).css("left","85px");
    } else {
        $(switchTurn).css("left", "0px")
    }
    for(var i=0;i<boxes.length;i++) {
        $(boxes[i]).text("");
    }
    gameOver = false;
    $(".results").text("");
    $("#restart").css("display","none");
    $(boxes).css("background-color","");
    $(boxes).css("color","white");
    $(boxes).css("transform","scale(1.0)");
    $(boxes).css("box-shadow", "0px 0px 10px");
});
