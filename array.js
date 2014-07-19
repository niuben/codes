
//唯一性
Array.prototype.distinct = function () {
    var arrayName = this;
    var returnArray = [];
    for (n = 0; n < arrayName.length - 1; n++) {
        var currentValue = arrayName[n];
        for (m = n + 1; m < arrayName.length; m++) {
            if (currentValue == arrayName[m]) {
                returnArray.push(currentValue);
                break;
            }
        }
    }
    return returnArray;
}

//升序
Array.prototype.asc = function () {
    return this.bubbling("asc");
}

//降序
Array.prototype.desc = function () {
    return this.bubbling("desc");
}

//排序
Array.prototype.bubbling = function () {
    var arrayName = this;
    var args = arguments;
    for (n = 0; n < arrayName.length - 1; n++) {
        for (m = n + 1; m < arrayName.length; m++) {
            if ((args[0] == "desc" && arrayName[n] < arrayName[m]) || (args[0] == "asc" && arrayName[n] > arrayName[m])) {
                var changeValue = arrayName[n];
                arrayName[n] = arrayName[m];
                arrayName[m] = changeValue;
            }
        }
    }
    return arrayName;
}

//删除重复
Array.prototype.filter = function () {
    var arrayName = this;
    var returnArray = [];
    var isHave = 0;
    for (n = 0; n < arrayName.length - 1; n++) {
        var currentValue = arrayName[n];
        isHave = 0;
        for (m = n + 1; m < arrayName.length; m++) {
            if (currentValue == arrayName[m]) {
                isHave = 1;
                break;
            }
        }
        if (!isHave) {
            returnArray.push(currentValue);
        }
    }
    var lastNum = arrayName.length - 1;
    returnArray.push(arrayName[lastNum]);
    return returnArray;
}

Array.prototype.first = function (value) {
    var currentArray = this; //[2, 3, 4, 5, 6];
    var isHave = 0;
    for(var i = 0; i < currentArray.length - 1; i++){
        if(currentArray[i] == value){
            isHave = 1;
        }
        if(isHave == 0) continue;
        var chg = currentArray[i];
        currentArray[i] = currentArray[i + 1];
        currentArray[i + 1] = chg; 
    }
    currentArray.pop();
    currentArray.unshift(value);
    return currentArray;
}

/*
Array.prototype.object2String=function(){
	
	var obj=this;
    var val, output = "";
    
	if (obj) {    
        output += "{";
        for (var i in obj) {
            
			val = obj[i];
			
            switch (typeof val) {
                case ("object"):                	
                    if (val[0]) {
                        output += i + ":" + val.array2String + ",";
                    } else {
                        output += i + ":" + val.object2String + ",";
                    }
                    break;
                case ("string"):
                    output += i + ":'" + val + "',";
                    break;
                default:
                    output += i + ":" + val + ",";
            }
        }
        output = output.substring(0, output.length-1) + "}";
    }
    return output;
}

Array.prototype.array2String=function() {
	
	var array=this;
	
    var output = "";
    if (array) {
        output += "[";
        for (var i in array) {
            val = array[i];
            switch (typeof val) {
                case ("object"):
                    if (val[0]) {
                        output += val.array2String() + ",";
                    } else {
                        output += val.object2String() + ",";		                
                    }
                    break;
                case ("string"):
                    output += "'" + val + "',";
                    break;
                default:
                    output += val + ",";
            }
        }
        output = output.substring(0, output.length-1) + "]";
    }
    return output;
	
}*/