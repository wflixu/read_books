/**
 * Created by Administrator on 2017/3/13.
 */


window.onload = function(){
    //跟新
    function init(){
        setInterval(function(){
            applicationCache.update();
        },3000);
        applicationCache.addEventListener('updateready',function(){
            if(confirm('本地缓存已更新，是否刷新')){
                applicationCache.swapCache();
                location.reload();
            }
        },true);
    }
    //gengxin
    init();
}