import {Question} from "./index.js";
import {Content} from "./content.js";
import {getStarted,getIntro} from "./index.js";

function timeOver() {
  let bigWord=Question["BigW"];
  let words=Question["Ans"];
  let content=document.getElementById("content"); 
    content.innerHTML=Content["retry"];
    let Bigw=document.getElementById("BigW");
    Bigw.innerText=bigWord;
    Bigw.style.fontweight="bold";
    let anslist=document.getElementById("anslist");
    for(let i=0;i<words.length;i++){
      let ans=document.createElement('li');
      ans.innerText=words[i];
      anslist.appendChild(ans);
    }
    let reattempt=document.createElement('button');
    reattempt.innerHTML="Try again";
    reattempt.addEventListener('click', (event) => {
    getStarted()
    });
    let home=document.createElement('button');
    home.innerHTML="Home";
    home.addEventListener('click', (event) => {
    getIntro()
    });
    content.appendChild(reattempt);
    content.appendChild(home);
           
}

function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
  if (sec < 0) {sec = "59"};
  return sec;
}
function countDown() {
  let presentTime = document.getElementById('timer');
  if(presentTime==null)
    return ;
  let timeArray = presentTime.innerHTML.split(":");
  let m = timeArray[0];
  let s = checkSecond((timeArray[1] - 1));
  if(s==59){m=m-1}
  if(m==0 && s<15){
    let timer =document.getElementById("timer");
    timer.style.background="#DC143C";
    timer.style.color="white";
  }  
  if(m<0){
  	timeOver();
    return;
  }
  
document.getElementById('timer').innerHTML =
    m + ":" + s;
  
  setTimeout(countDown, 1000); 
}
function startTimer() {
	document.getElementById('timer').innerText ="03:31";
    countDown();
	
}

export {startTimer} ;