let noOfWords=[1,2,3,3,4,4,5,5,6,6];

function getNoWords(level) {
	if(level>10){
		return 7;
	}
	return noOfWords[level];
}

export {getNoWords};
