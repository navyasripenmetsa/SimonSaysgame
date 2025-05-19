let h3=document.querySelector("h3");
let gamesequence="";
let usersequence="";
let random;
let started=false;
let Statistics={
    level:0,
    score:-10
};
let body=document.querySelector("body");
let box1=document.querySelector("#box1");
let box2=document.querySelector("#box2");
let box3=document.querySelector("#box3");
let box4=document.querySelector("#box4");
function levelUp(Statistics) {
  Statistics.level+=1;
  Statistics.score+=10;
  h3.innerText=`Level-${Statistics.level}.Your Score is ${Statistics.score}`;
}
function FlashUp(num) {
   let id=`box${num}`;
   let box=document.getElementById(id);
   box.setAttribute("id","Flash");
   setTimeout(function() {
    box.setAttribute("id",id);
   },250);
}
function GameLogic() {
    usersequence="";
    random=Math.floor(Math.random()*4)+1;
    FlashUp(random);
    gamesequence=gamesequence+random;
    console.log("Game Sequence : ",gamesequence)
}
function userLogic(num) {
   usersequence=usersequence+num;
   console.log("User sequence : ",usersequence);
   currentindex=usersequence.length-1;
   if(usersequence[currentindex]!=gamesequence[currentindex]) {
    h3.innerText = `Game Over. Final Score: ${Statistics.score}`;
    started = false;
    body.style.backgroundColor="red";
    setTimeout(function() {
         body.style.background.color="white";
    },500)
   }
   if (usersequence.length === gamesequence.length) {
    levelUp(Statistics);
    GameLogic();
  }
}
document.addEventListener("keypress",function(){
   if(started===false) {
     levelUp(Statistics);
   }
   started=true;
   console.log(started);
   GameLogic();
});
box1.addEventListener("click",function(event){
    if(started==true) {
    event.stopPropagation();
    userLogic(1);
    }
});
box2.addEventListener("click",function(event){
    if(started==true) {
    event.stopPropagation();
    userLogic(2);
    }
});
box3.addEventListener("click",function(event){
    if(started==true) {
    event.stopPropagation();
    userLogic(3);
    }
});
box4.addEventListener("click",function(event){
    if(started==true) {
    event.stopPropagation();
    userLogic(4);
    }
});
