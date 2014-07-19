//得到超链接
url = {
        //得到指定的值
    getVal: function (name) {
        var locationSearch = location.search.substr(1, location.search.length);
        var loactionSearchArray = locationSearch.split("&");
        for (i = 0; i < loactionSearchArray.length; i++) {
            if (loactionSearchArray[i].indexOf(name) != -1) {
                return loactionSearchArray[i].substr(name.length + 1, 1000);
            }
        }
    },

    getFileName: function () {
		var wu_url=window.location.href;
		var wu_nopar=wu_url.split("?")[0].split("/");
		var wu_urlName=wu_nopar[wu_nopar.length-1];
		return wu_urlName;		
	}	

}
