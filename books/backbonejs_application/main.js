require.config({
    baseUrl:'../',
    path:{
        jquery:'libs/jquery/jquery-min',
        underscore:'libs/underscore/underscore-min',
        backbone:'lobs/backbone/backbone-optamd3-min',
        text:'libs/require/text'
    },
    
});
require(['views/app'],function(AppView){
    var app_view = new AppView;
});