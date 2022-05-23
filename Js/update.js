function updateStatus() {
	let status=document.getElementById("status");

	if(localStorage.getItem('Level')==null)
		status.innerText="Lv 0";
	else{
		let Level=JSON.parse(localStorage.getItem("Level"));
		status.innerText="Lv "+Level[0];
	}
	return ;
}
function updateLevel(Level) {
	Level[1]+=1;
	if(Level[1]==(Level[0]+3)){
       Level[1]=0;
       Level[0]+=1
	}
    localStorage.setItem("Level",JSON.stringify(Level));
	return ;
}


function init_storage() {
	if(localStorage.getItem('Level')==null){
		localStorage.setItem("Level",JSON.stringify([0,0]));
		return 0;
	}
	let Level=JSON.parse(localStorage.getItem("Level"));
	return Level[0];
}

export{updateStatus,updateLevel,init_storage};