let countGroundLevel = 0;
let groundLevel = false;
document.getElementById("bottomArrow").addEventListener("click", function() {
    countGroundLevel = countGroundLevel + 1;
    if(countGroundLevel%2 === 0) {
       document.getElementById("bottomArrow").src="images/arrow.png";
        //groundLevel = false;
    }
    else {
       document.getElementById("bottomArrow").src="images/greenArrow.png";
        //groundLevel = true;
    }

        
    //document.getElementById("bottomArrow").src="images/greenArrow.png";
    groundLevel = true;
    document.getElementById("elevator").style.animationPlayState="running";
    let start = Date.now();

    let timer1 = setInterval(function() {
    let timePassed = Date.now() - start; 
    //console.log(timePassed);
    if(timePassed >5000 && arrowLevel1Up === true) {

        document.getElementById("elevator").style.animationPlayState="paused";
    }
})
})

if(countGroundLevel === 0)
document.getElementById("elevator").style.animationPlayState="paused";

let arrowLevel1Up = false;
let count = 0;
document.getElementById("arrowLevel1-up").addEventListener("click", function() {
    count = count+1;
    if(count%2 === 0) {
        document.getElementById("arrowLevel1-up").src="images/arrow.png";
        //arrowLevel1Up = false;
    }
    else {
        document.getElementById("arrowLevel1-up").src="images/greenArrow.png";
        //arrowLevel1Up = true;
    }
    //document.getElementById("arrowLevel1-up").src="images/greenArrow.png";
    //if(count === 1)
    //document.getElementById("elevator").style.animationPlayState="paused";
    arrowLevel1Up = true;

    if(count > 1) {
        arrowLevel1Up = false;
    }
    if(count >= 2) {
        let start = Date.now();
        let timer2 = setInterval(function() { 
            let timePassed = Date.now() - start; 
            //console.log(timePassed);
            if(timePassed > 5000 && arrowLevel2 === true) {
                document.getElementById("elevator").style.animationPlayState="paused";
                //timePassed = 0;
            }
            else {
                document.getElementById("elevator").style.animationPlayState="running";
            }
        })
    }
})
/*
if(arrowLevel1Up === false && groundLevel === true)
document.getElementById("elevator").style.animationPlayState="running";
*/

let arrowLevel1Down = false;
let countArrowLevel1Down = 0;
document.getElementById("arrowLevel1-down").addEventListener("click", function() {
    countArrowLevel1Down = countArrowLevel1Down + 1;
    if(countArrowLevel1Down%2 === 0) {
        document.getElementById("arrowLevel1-down").src="images/arrow.png";
    }
    else {
        document.getElementById("arrowLevel1-down").src="images/greenArrow.png";
    }
    //document.getElementById("arrowLevel1-down").src="images/greenArrow.png";
    arrowLevel1Down = true;
    
    if(countArrowLevel1Down > 1)
    arrowLevel1Down = false;
    if(countArrowLevel1Down >= 2) {
        //arrowLevel1Down = false; 
        let start = Date.now();
        let timer3 = setInterval(function() {
            let timePassed = Date.now() - start;
            //console.log(timePassed);
            if(timePassed > 5000 && groundLevel  === true) {
                document.getElementById("elevator").style.animationPlayState="paused";
                //timePassed = 0;
            }
            else {
                document.getElementById("elevator").style.animationPlayState="running";
            }
        })
    }
})

let arrowLevel2 = false;
let countArrowLevel2 = 0;
document.getElementById("arrowLevel2").addEventListener("click", function() {
    countArrowLevel2 = countArrowLevel2 + 1;
    if(countArrowLevel2%2 === 0) {
        document.getElementById("arrowLevel2").src="images/arrow.png";
    }
    else {
        document.getElementById("arrowLevel2").src="images/greenArrow.png";
    }
    //document.getElementById("arrowLevel2").src="images/greenArrow.png";
    arrowLevel2 = true;
    
    if(countArrowLevel2 > 1) {
        arrowLevel2 = false; //arrowLevel1Up = false;
        if(countArrowLevel2 >= 2) {
            let start = Date.now();
        let timer2 = setInterval(function() {
            let timePassed = Date.now() - start; 
            //console.log(timePassed);
            if(timePassed > 5000 && arrowLevel1Down === true) {
                document.getElementById("elevator").style.animationPlayState="paused";
                //timePassed = 0;
            }
            else {
                document.getElementById("elevator").style.animationPlayState="running";
            }
        })
        }
        
    }
})



