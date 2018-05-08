/**
 * Created by Administrator on 2017/3/17.
 */
onmessage=function(event){
    var data=event.data;
    var returnStr;
    var intArray = event.data.split(';');
    returnStr = '';
    for(var i=0;i<intArray.length;i++){
        if(parseInt(intArray[i])%3==0){
            if(returnStr!=''){
                returnStr+=';';
            }
            returnStr += intArray[i];
        }
    }
    console.log(returnStr);
    postMessage(returnStr);
}