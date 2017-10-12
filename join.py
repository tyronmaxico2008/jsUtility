import sys
from aj import task

config = {
    "out" : "d:\\result.js"
    ,"input" : [
        "common\\clsAjaxProcessing.js"
        ,"common\\g.js"
        ,"common\\global.js"
        ,"common\\myAjax.js"
    ]
}



def test():
    if len(sys.argv) == 2:
        task.join_files(config)
    else:
        print("no argument found !")


print (len(sys.argv))



