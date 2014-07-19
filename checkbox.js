_checkbox = {

 selAll:function() {
    for (i = 0; i < document.form2.id.length; i++) {
        if (!document.form2.id[i].checked) {
            document.form2.id[i].checked = true;
        }
    }
},

noSelAll:function() {
    for (i = 0; i < document.form2.id.length; i++) {
        if (document.form2.id[i].checked) {
            document.form2.id[i].checked = false;
        }
    }
}

}