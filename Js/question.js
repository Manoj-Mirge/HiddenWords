import {WORDS} from "./Mywords.js";

function noOccurence(List,char) {
	let no=0;
	for(let i=0;i<List.length;i++){
		if(List[i]==char)
			no++;
	}
	return no;
}
function getBigWord(words){
    let bigWord="";
    let total=[];
    for(let i=0;i<words.length;i++){
    	let charList=words[i].split("");
    	for(let j=0;j<words[i].length;j++){
    		if(noOccurence(total,words[i][j])<noOccurence(charList,words[i][j]))
    		total.push(words[i][j]);
    	}
    }
    bigWord=getB(total);
    return bigWord;
    
}

function getB(total){
	for(let i=0;i<total.length;i++){
		let ind_1=Math.floor(Math.random() * total.length);
		let ind_2=Math.floor(Math.random() * total.length);
		let tmp=total[ind_1];
		total[ind_1]=total[ind_2];
		total[ind_2]=tmp;


	}
	let ret="";
	for(let j=0;j<total.length;j++){
		ret=ret+total[j];
	}
	return ret;
}
function getQuestion(No_words) {
let words=[];
for(let i=0;i<No_words;i++){
    let rWord=WORDS[Math.floor(Math.random() * WORDS.length)];
	while(words.includes(rWord)){
       rWord=WORDS[Math.floor(Math.random() * WORDS.length)];
	}
	words.push(rWord.toUpperCase());
}
let bigWord=getBigWord(words);
bigWord=bigWord.toUpperCase();
let Question={};
Question["BigW"]=bigWord;
Question["Ans"]=words;
return Question;
}

export {getQuestion};