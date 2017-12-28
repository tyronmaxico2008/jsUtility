import shutil
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
        ,'app\\clsAppConfig.js'
        ,'app\\clsRequest.js'
        ,'ng\\bll.js'
        ,'app\\clsCRUD.js'
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
        ,'vue\\Common.js'
        ,'app\\clsAppConfig.js'
        ,'app\\clsRequest.js'
        ,'app\\clsCRUD.js'
        ,'vue\\components.js'
        ,'vue\\clsFilterField.js'

    ]
}

task.join_files(common,ng,vue)

print("Concat completed !")


###################

shutil.copyfile(".\\..\\jsDemo\\build\\common.js","D:\\current\\appService\\web\\my-build\\common.js")
shutil.copyfile(".\\..\\jsDemo\\build\\ngBll.js","D:\\current\\appService\\web\\my-build\\ngBll.js")
shutil.copyfile(".\\..\\jsDemo\\build\\vueBll.js","D:\\current\\appService\\web\\my-build\\vueBll.js")

print("file moved !")