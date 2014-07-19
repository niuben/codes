function getDateTime(pattenStr, time){
	
	/*pattenStr:Y,M,D,H,i,s*/
	var currentTime = new Date();
	time && currentTime.setTime(time);

	var currentYear = currentTime.getFullYear() + "",
	currentMonth = currentTime.getMonth() + 1 + "",
	currentDay = currentTime.getDate() + "",
	currentHours = currentTime.getHours() + "",
	currentMinutes = currentTime.getMinutes() + "",
	currentSeconds = currentTime.getSeconds() + "",
	showStr="",
	posNum=0;
	
	
	var pattenObj = {
		"Y": currentYear,
		"y": currentYear.substr(2,2),
		"M": upperDate(currentMonth),
		"m": currentMonth,
		"D": upperDate(currentDay),
		"d": currentDay,
		"H": upperDate(currentHours),
		"h": currentHours,
		"I": upperDate(currentMinutes),
		"i": currentMinutes,
		"S": upperDate(currentSeconds),
		"s": currentSeconds
	};

	for(var i = 0; i< pattenStr.length; i++){					
		var char = pattenStr.charAt(i);
		if( i%2 == 0){	
			showStr += search(char, pattenObj);
		}else{
			showStr += char;
		}
	}
	
	return showStr;
		
	function search(key,obj){
		for(var i in obj){
			if( i == key){
				return obj[i];
			}
		}
	}

	function upperDate(currentDate){
		return currentDate.length == 1 ? "0" + currentDate : currentDate
	}
}