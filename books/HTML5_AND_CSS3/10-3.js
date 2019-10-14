/**
 * Created by Administrator on 2017/3/17.
 */
onmessage=function(event){
    var num = event.data;
    var result = 0;
    for( var i=0;i<=num;i++){
        result+=i;
    }
    postMessage(result);
}