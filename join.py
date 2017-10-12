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
        'build\\common.js'
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
        'assets\\admin\\common.js'
        ,'assets\\admin\\vueUtility\\clsConfig.js'
        ,'assets\\admin\\vueUtility\\Common.js'
        ,'assets\\admin\\vueUtility\\Grid.js'
        ,'assets\\admin\\vueUtility\\clsFilterField.js'
        ,'assets\\admin\\vueUtility\\components.js'
    ]
}




def test():
    if len(sys.argv) == 2:
        task.join_files(config)
    else:
        print("no argument found !")


print (len(sys.argv))



