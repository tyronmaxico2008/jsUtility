myApp  = angular.module("myApp",['appBll']);


var appConfig = new clsAppConfig();

appConfig.appName = "ap_mlm";
appConfig.controllerLink = "http://localhost/web_test/Service/";
appConfig.viewLink = "http://localhost/Assets/admin/ngUtility2/views/";
appConfig.appResourceLink = "http://localhost/web_test/service/appContent?path="

myApp.value('appConfig', appConfig);

myApp.controller("test",function($scope,appConfig){
    $scope.count = 120
});

myApp.controller("CustomerList", function($scope,bll){
    var _grd = new ngCRUD(bll,"ap_mlm:mCustomer","","","","id");
    
    var oFilter = new clsFilterField(_grd);
    
    oFilter.add("customerName", "Customer Name", "text");
    oFilter.add("AccountNo", "Account No");
    oFilter.add("email","Email","text");
    oFilter.add("mobile","Mobile","text");
    oFilter.add("city","City","text");
    oFilter.add("state","State","text");
    oFilter.add("country","Country","text");
    oFilter.add("pincode","Pincode","text");
    
    $scope.grd = _grd;
    
    $scope.downloadReport2 = function (e) {
        bll.downloadSQLReport("ap_mlm:customer_list", "Excel", $scope.row_filter, e);
    } 
    
    _grd.load();
});