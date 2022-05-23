import {startTimer} from "./timer.js";
import {getQuestion} from "./question.js";
import {isVal} from "./validate.js";
import {getNoWords} from "./level.js";
import {updateStatus,init_storage} from "./update.js";
import {Content} from "./content.js";


let Question; 
function getStarted() {
 let Level=init_storage();
 let No_words=getNoWords(Level);
 Question=getQuestion(No_words);
 let bigWord=Question["BigW"];
 let content=document.getElementById("content");	
 content.innerHTML=Content["Starter"];
 let header=document.createElement('h1');
 header.classList.add("BigWord");
 header.innerText=bigWord;
 let node=document.getElementById('BigW');
 node.appendChild(header);
 startTimer();
 let form=document.getElementById('form');
 form.addEventListener('submit', (event) => {
    
    event.preventDefault();
    isVal(form,No_words);
 });
 document.getElementsByTagName('label')[0].innerText="No of Words required : "+No_words;
}


function getIntro() {
 let content=document.getElementById("content");    
 content.innerHTML=Content["Intro"];
 let starter=document.getElementById("starter");
 updateStatus();	
 starter.addEventListener('click', () => {
   if(confirm("Have you read the instructions , are you sure you want to start the game?"))
   getStarted();  
     });
}



document.onload=getIntro();



export {Question,getStarted,getIntro};

