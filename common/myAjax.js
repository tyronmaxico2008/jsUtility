
//"http://localhost/web_test/test/test_post"

function clsMyAjax(sUrl) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", );
    var self = this;

    xhr.upload.addEventListener("progress", function(evt){
      if (evt.lengthComputable) {
        //console.log("add upload event-listener" + evt.loaded + "/" + evt.total);
        var iPer = (eve.loaded * 100 ) / evt.total;
        self.onProgress(iPer);
      }
    }, false);
    
    /*
    xhr.onprogress = function (e) {
        debugger;
        if (e.lengthComputable) {
            console.log(e.loaded+  " / " + e.total)
        }
    }
    */
    this.onProgress = function(per){
        console.log(per);
    }
    xhr.onloadstart = function (e) {
        console.log("start")
    }
    xhr.onloadend = function (e) {
        debugger;
        console.log("end")
    } 
    
    
    var file = document.getElementById("txtFile");
    //var fileData = ;
    
    var frm = new FormData();
    frm.append("file1",file.files[0]);
    
    xhr.send(frm);
}

function test_myAjax() {
    
    
}