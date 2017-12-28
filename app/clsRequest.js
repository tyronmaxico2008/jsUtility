function clsRequest($http,appConfig) {

    this.getData = function (sPath, callBack) {
        var sPathFull = appConfig.getDataLink(sPath);

        if($http)
        {
            $http.get(sPathFull).success(function (data, status) {
                callBack(data.Obj)
            }).error(function (data, status) {

            });
        }
    };    
    
    this.submitForm =  function ( fields, uploadUrl, callback) {

        
        if($http)
        {
            var fd = new FormData();
            for (var f in fields) {
                if (fields[f] != null && fields[f] != undefined)
                    fd.append(f, fields[f]);
            }
            
            var _fnSuccess = function(res){
                if (callback != undefined) callback(res.data,"success");
            };
            
            var _fnError = function(){
                if (callback != undefined) callback(null,"error");
            };
        
            $http.post(uploadUrl, fd, {
                transformRequest: angular.identity,
                headers: { 'Content-Type': undefined }
            }).then(_fnSuccess,_fnError);
        }
        else    
        {
            $.post(uploadUrl,fields,function(data,status){
                if(status == "success") 
                    callback(data,"success");
                else 
                    callback(null,"error");
            });
        }
        
    };
    
    
    this.execJson = function (sPath, jnData, func,e) {
        var oAjaxProcess = new clsAjaxProcessing(e);
        oAjaxProcess.start();

        var _url = appConfig.getDataLink(sPath);

        this.submitForm(jnData,_url,function (data){
            func(data)
            oAjaxProcess.end();
        });
    }
    
    this.execGrid = function (sPath, pageSize, start, length, jnData, func, e) {
        
        
        var oAjaxProcess = new clsAjaxProcessing(e);
        oAjaxProcess.start();

        var _url = appConfig.getDataPagingLink(sPath, pageSize, length, start);

        this.submitForm(jnData,_url,function (data){
            func(data);
            oAjaxProcess.end();
        });
    }

     this.setSQLReport = function (sPath, jnData, func, e) {
         var url = appConfig.getReportLink(sPath);
         var oAjaxProcess = new clsAjaxProcessing(e);
         
         oAjaxProcess.start();
         this.submitForm(jnData, url, function (data) {
             var response = data['msg'];
             var data1 = data['data'];
             
             if (response != "") {
                 alert(response);
                 if ($.isFunction(func)) func("error");
             }
             else {
                 //ShowMessage("success!", response);
                 if ($.isFunction(func)) func("success", data1);
             }
             
             oAjaxProcess.end();
         });
     }
    
     this.downloadSQLReport = function(sPath,sFileType,jnData,e){
         this.setSQLReport( sPath, jnData, function (status) {
            if(status=="success")
                window.location = appConfig.getReportDownloadLink() + "?filetype=" + sFileType;
        }, e);    
     }
     
     this.UpdateModule =  function ( sPath, jnData, func, e) {
            
        var url = appConfig.getUpdateLink(sPath);
        var oAjaxProcess = new clsAjaxProcessing(e);

        oAjaxProcess.start();

        this.submitForm( jnData, url, function (data) {
            var response = data['msg'];
            var data1 = data['data'];

            if (response != "") {
                alert("Opps! "+ response);
                if ($.isFunction(func)) func("error");
            }
            else {
                //ShowMessage("success!", response);
                if ($.isFunction(func)) func("success", data1);
            }
            oAjaxProcess.end();
        });
    }

}