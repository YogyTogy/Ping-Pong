var paddleHeight = 150;
var paddleWidth = 30;
var ballRadius = 25;
var speedOfPaddle1 = 0;
var speedOfPaddle2 = 0;
var positionOfPaddle1 = 220;
var positionOfPaddle2 = 220;
var topPositionOfBall = 510;
var leftPositionOfBall = 820;
var topSpeedOfBall = 10;
var leftSpeedOfBall = 0;



function startBall() {
    topPositionOfBall = 510;
    leftPositionOfBall = 820;

    if (Math.random() < 0.5) {
        var side = 1;
    } else {
        side = -1;
    }
    leftSpeedOfBall = side * (Math.random() * 6 + 5);
    topSpeedOfBall = Math.random() * 6 + 5;
}


document.addEventListener("keydown", function (event) {
    //W
    if (event.code  === 87 || event.keyCode === 87) {
        speedOfPaddle1 = -10;
    }
    //S
    if (event.code  === 83 || event.keyCode === 83) {
        speedOfPaddle1 = 10;
    }
    // UP
    if (event.code === 38 || event.keyCode === 38) {
        speedOfPaddle2 = -10;
    }
    //DOWN
    if (event.code === 40 || event.keyCode === 40) {
        speedOfPaddle2 = 10;
    }
})

document.addEventListener("keyup", function (event) {
    //W
    if (event.code === 87 || event.keyCode === 87) {
        speedOfPaddle1 = 0;
    }
    //S
    if (event.code === 83 || event.keyCode === 83) {
        speedOfPaddle1 = 0;
    }
    // UP
    if (event.code === 38 || event.keyCode === 38) {
        speedOfPaddle2 = 0;
    }
    //DOWN
    if (event.code === 40 || event.keyCode === 40) {
        speedOfPaddle2 = 0;
    }
})

window.setInterval(function show() {
    positionOfPaddle1 += speedOfPaddle1;
    positionOfPaddle2 += speedOfPaddle2;

    topPositionOfBall += topSpeedOfBall;
    leftPositionOfBall += leftSpeedOfBall

    // paddle leaving top window 
    if (positionOfPaddle1 <= 1) {
        positionOfPaddle1 = 1
    }
    if (positionOfPaddle2 <= 1) {
        positionOfPaddle2 = 1
    }

    // paddle leaving bottom window 
    if (positionOfPaddle1 >= window.innerHeight - paddleHeight) {
        positionOfPaddle1 = window.innerHeight - paddleHeight
    }
    if (positionOfPaddle2 >= window.innerHeight - paddleHeight) {
        positionOfPaddle2 = window.innerHeight - paddleHeight
    }


    // BALL BOUNCE
    if (topPositionOfBall <= 10 || topPositionOfBall >= window.innerHeight - ballRadius) {
        topSpeedOfBall = -topSpeedOfBall
    }
    if (leftPositionOfBall <= paddleWidth) {
        if (topPositionOfBall > positionOfPaddle1 && topPositionOfBall < positionOfPaddle1 + paddleHeight) {
            leftSpeedOfBall = -leftSpeedOfBall;
        } else {
            startBall()
        }
    }

    if(leftPositionOfBall >= window.innerWidth - ballRadius - paddleWidth){
        if(topPositionOfBall > positionOfPaddle2 && topPositionOfBall < positionOfPaddle2 + paddleHeight){
            leftSpeedOfBall = -leftSpeedOfBall
        } else{
            startBall();
        }
    }

    document.getElementById("paddle1").style.top = positionOfPaddle1 + "px";
    document.getElementById("paddle2").style.top = positionOfPaddle2 + "px";

    document.getElementById("ball").style.top = topPositionOfBall + 'px';
    document.getElementById('ball').style.left = leftPositionOfBall + 'px';

}, 1000 / 60)



