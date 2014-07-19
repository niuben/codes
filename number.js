////整数对象
//Num = {

//    id: "#personNum",

//    addNum: function (inpObj) {

//        var _personNum = parseInt($(inpObj).val());

//        if (_personNum < 100) {
//            $(inpObj).val(_personNum + 1);
//            return true;
//        }
//        return false;
//    },

//    reduceNum: function (inpObj) {

//        var _personNum = parseInt($(inpObj).val());

//        if (_personNum > 1) {
//            $(inpObj).val(_personNum - 1);
//            return true;
//        }
//        return false
//    },

//    checkInt: function (num) {
//        var patrn = /^[0-9]*[1-9][0-9]*$/;
//        if (!patrn.exec(num)) return false;
//        else return true;
//    }

//}

Number.prototype.isInt = function () {    
    if (Math.floor(this) == this) {
        return true;
    } else {
        return false;
    }
}

Number.prototype.isFloat = function () {
    if (Math.floor(this) != this) {
        return true;
    } else {
        return false;
    }
}

