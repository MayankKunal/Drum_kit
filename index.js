/*
document.querySelectorAll("button")[0].addEventListener("click",presses);
document.querySelectorAll("button")[1].addEventListener("click",presses);
document.querySelectorAll("button")[2].addEventListener("click",presses);
document.querySelectorAll("button")[3].addEventListener("click",presses);
document.querySelectorAll("button")[4].addEventListener("click",presses);
document.querySelectorAll("button")[5].addEventListener("click",presses);
document.querySelectorAll("button")[6].addEventListener("click",presses);
function presses(){
    alert("Button is clicked");
}
*/
var numOfDrums=document.querySelectorAll(".drum").length;
for(var i=0;i<numOfDrums;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function()
    {
     var buttonInnerHtml=this.innerHTML;
    makesound(buttonInnerHtml);

    })
}
document.addEventListener("keypress",function(event)
{
    makesound(event.key);
})

function makesound(key)
{
    switch(key){
        case "w":
            var tom1=new Audio("sounds/tom-1.mp3");
            tom1.play();
           break;
           case "a"||"A":
            var tom2=new Audio("sounds/tom-2.mp3");
            tom2.play();
           break;
           case "s"||"S":
            var tom3=new Audio("sounds/tom-3.mp3");
            tom3.play();
           break;
           case "d"||"D":
            var tom4=new Audio("sounds/tom-4.mp3");
            tom4.play();
           break;
           case "j"||"J":
           var snare=new Audio("sounds/snare.mp3");
           snare.play();
           break; 
           case "k"||"K":
            var crash=new Audio("sounds/crash.mp3");
            crash.play();
           break;
           case "l"||"L":
           var kick=new Audio("sounds/kick-bass.mp3");
           kick.play();
           break;
           default:
               console.log(key);
     }
}
/*
var audio=new Audio("sounds/tom-1.mp3");
       audio.play();*/