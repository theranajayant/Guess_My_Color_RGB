var colors=[];
var squares=document.getElementsByClassName("square");
var next=document.querySelector("#next")
var score=0;
var showScore=document.querySelector("#score");
var startG=document.querySelector("#start");
var max=255;
var min=0;
var count=6
var h1=document.querySelector("h1");



//creating random color variable to be reused
pushColors(max,min,count);   

newGame()

//Game function
function newGame(){
    var randomNumber=randomIndex();
    //remove old colors and put new
    h1.style.backgroundColor="steelBlue";
    colors=[];
    pushColors(max,min,count);
    
    secretColor=colors[randomNumber]
    document.getElementById("secretColor").textContent=secretColor;
    //only to test
    console.log("Random Number: "+randomNumber);


    for(var i=0;i<colors.length;i++){
        squares[i].style.backgroundColor=colors[i];
                //result of try
                squares[i].onclick=function(){
                    var clickedColor=this.style.backgroundColor;
                    console.log("clicked box color: "+clickedColor)

                    if(secretColor===clickedColor){
                        themeMatch();
                        score++;
                        console.log("New Score: "+score);
                        showScore.textContent=score;
                        event.stopPropagation();
                        setTimeout(function() {newGame();}, 2000);
                    }

                    else{
                        //this.remove()
                        this.style.backgroundColor="#171717"
                        //alert("Try Again");
                        event.stopPropagation();
                    }
                    
                }
        }
}



//matching the colors on correct answer
function themeMatch(){
    var sq=document.querySelectorAll(".square");
    for(var i=0;i<sq.length;i++){
    sq[i].style.backgroundColor=secretColor;
    h1.style.backgroundColor=secretColor;
    }
}

//color push mechanish
function pushColors(min, max, count){
            for(var j=0;j<count;j++){
            var color1= Math.floor(Math.random()*(max - min + 1))+min;
            var color2= Math.floor(Math.random()*(max - min + 1))+min;
            var color3= Math.floor(Math.random()*(max - min + 1))+min;

            //pushing colors
            colors.push("rgb("+color1+", "+color2+", "+color3+")");
            }
}


//resetting color on click on reset button
next.addEventListener("click",function(){

    console.log("Reset: New game started")
    newGame();
})

startG.addEventListener("click",function(){
    score=0;
    newGame();
    
});


//random number generator
function randomIndex(){
   return Math.floor(Math.random() * ((colors.length-1) - 0 + 1))
}

//when someone clicks easy
