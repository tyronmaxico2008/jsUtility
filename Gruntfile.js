module.exports = function(grunt) {
grunt.loadNpmTasks('grunt-contrib-concat');

grunt.initConfig({
    concat : {
        options : {
            seprator : ' ' 
        }
    , common : {
        src : [
                'common\\global.js'
               ,'common\\clsAjaxProcessing.js' 
        ]
        ,dest : 'build\\common.js' 
    }
	, ng : { 
        
		src : [
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
	     ,dest : 'build\\ngBll.js'
	   }
       ,vue : {
           src : [
                'assets\\admin\\common.js'
                ,'assets\\admin\\vueUtility\\clsConfig.js'
                ,'assets\\admin\\vueUtility\\Common.js'
                ,'assets\\admin\\vueUtility\\Grid.js'
                ,'assets\\admin\\vueUtility\\clsFilterField.js'
                ,'assets\\admin\\vueUtility\\components.js'
           ]
           , dest : "assets\\admin\\vueBll.js"
        }
	}
});


grunt.registerTask('ng',  ['concat:common','concat:ng']);
grunt.registerTask('vue', ['concat:common','concat:vue']);

}