import sys
from aj import task

common = {
    "out" : ".\\..\\jsDemo\\build\\common.js"
    ,"input" : [
        "common\\clsAjaxProcessing.js"
        ,"common\\g.js"
        ,"common\\global.js"
        ,"common\\myAjax.js"
    ]
}

ng = {
    "out" : ".\\..\\jsDemo\\build\\ngBll.js"
    ,"input" : [
        '.\\..\\jsDemo\\build\\common.js'
        ,'ng\\ngCommon.js'
        ,'ng\\clsAppConfig.js'
        ,'ng\\bll.js'
        ,'ng\\ngCRUD.js'
        ,'ng\\directives\\pager.js'
        ,'ng\\directives\\sorter.js'
        ,'ng\\directives\\busy.js'
        ,'ng\\directives\\grd-filter.js'
        ,'ng\\directives\\test.js'
        ,'ng\\directives\\drp.js'
        ,'ng\\directives\\fld.js'
        ,'ng\\directives\\file-model.js'
        ,'ng\\commonControllers\\CRUDControllers.js'
    ]
}

vue  = {
    "out" : ".\\..\\jsDemo\\build\\vueBll.js"
    ,"input" : [
        '.\\..\\jsDemo\\build\\common.js'
        ,'vue\\clsConfig.js'
        ,'vue\\Common.js'
        ,'vue\\Grid.js'
        ,'vue\\clsFilterField.js'
        ,'vue\\components.js'
    ]
}

task.join_files(common,ng,vue)



