// define module
define(['foo','bar'],

    function (foo,bar){
        var myModule = {
            doStuff:function(){
                console.log("do some stuff");
            }
        }
        return myModule;
    }
)

//alternate method
define(function(require){
    var foo=require('foo'),
        bar=require('bar');
    var myModule = {
        doStuff:function(){
            console.log("yeh stuff");
        }
    }
    return myModule;
})

//the method  used to load code
require(['foo','bar'],function(foo,bar){
    foo.doSomething();
})

//wrapping modules
define(['foo','bar'],function(_,Backbone){
    var myModule = Backbone.Model.extend({
        defaults:{
            content:'content'
        },
        initialize:function(){

        },
        clear:function(){
            this.distory();
            this.view.remove();
        }
    });
    return myModule;
})

//引入其他库
define(['jquery','underscore','backbone','modules/myModue','views/myView'],
    function($,_,Backbone,myModules,myView){
        var appView=Backbone.Model.extend({});

})

//text templates
require(['js/app','text!temolates/mainView.html'],
    function(app,mainView){
        //do something;
    }
)    