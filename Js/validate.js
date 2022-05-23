import {WORDS} from "./Mydict.js";
import {notify_alerror,notify_notinword,notify_notindict,notify_rightans} from "./notification.js";
import {getNoWords} from "./level.js";
import {Content} from "./content.js";
import {getStarted,getIntro} from "./index.js";
import {updateStatus,updateLevel} from "./update.js";

function isInBigW(bigW,input_word){
    let big_list=bigW.split("");
    let len=input_word.length;  
    for(let i=0;i<len;i++){
        let curr=input_word.charAt(i);
        
        let index=big_list.indexOf(curr);
        if(index==-1){
            return false;
        }
        big_list[index]="-";
    }
    return  true;
}

function isAlready(input_word){
    let list=document.getElementById("answers").getElementsByTagName('li');
    let ans=[];
    for(let i=0;i<list.length;i++){
        ans.push(list[i].innerText);
    }
    return (ans.includes(input_word));

}
function isCompleted(No_words,No_answered) {
    if(No_answered<No_words)
        return ;
    let content=document.getElementById("content"); 
    content.innerHTML=Content["completed"];
    let Level=JSON.parse(localStorage.getItem("Level"));
    updateLevel(Level);
    updateStatus();
    let levelnodes=document.getElementsByClassName('level');
    levelnodes[0].innerText=Level[0];
    levelnodes[1].innerText=Level[0]+3-Level[1];
    let nextquiz=document.getElementById("nextquiz");
    nextquiz.addEventListener('click',getStarted );
    let home=document.createElement('button');
    home.innerHTML="Home";
    home.addEventListener('click', (event) => {
    getIntro()
    });
    content.appendChild(home);    

}
function addAnswer(input_word,No_words) {
   let list=document.getElementById("answers");
   let node=document.createElement('li');
   node.innerText=input_word;
   list.appendChild(node);  
   let answered=list.getElementsByTagName("li");
   document.getElementsByTagName('label')[0].innerText="No of Words required : "+(No_words-answered.length);
   isCompleted(No_words,list.getElementsByTagName('li').length);
}


function isVal(form,No_words) {
let bigW=document.getElementsByClassName('BigWord')[0].innerText;
let input=form.elements['word'];
let input_word=input.value;
input_word=input_word.toUpperCase();

  if( isAlready(input_word) ){
        notify_alerror();
        return false;

    }
    if(!isInBigW(bigW,input_word)){
        notify_notinword();
       return false;
    }
    if(!WORDS.includes(input_word)){
       notify_notindict();
     return false;
   }
   notify_rightans();
   addAnswer(input_word,No_words);
   return true;

}
   
export {isVal};


