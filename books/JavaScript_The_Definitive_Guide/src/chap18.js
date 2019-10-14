//   原生ajax
if(window.XMLHttpRequest===undefined){
    window.XMLHttpRequest=function(){
        try{
            return new ActiveXObject('Msxml2.XMLHTTP6.O');
        }catch(e){
             try{
                 return new ActiveXObject('Msxml2.XMLHTTP.3.0');
             }catch(e){
                 throw new Error('XMLHttpRequest is not support');
             }
        }
    }
}
// 新建xhr对象
var request= new XMLHttpRequest();
// 打开请求
request.open('GET','data.csv');
request.onreadystatechange =function(){
    if(request.readyState===4&&request.status===200){
        var type = request.getResponseHeader('Content-Type');
        if(type.match(/^text/)){
            callback(resquest.responseText);
        }
        if(type.indexOf('xml')!="-1"&& request.responseXML){
            callback(resquest.responseXML);
        }
        if(type=="application/json"){
            callback(this.responseText)
        }

    }
}
request.setRequestHeader('Content-Type','text/plain');
request.send(message);

/**
 * 
 */
function encodeFormData(data){
    if(!data){
        return "";
    }
    var pairs=[];
    for(var name in data){
        if(!data.hasOwnProperty(name)){ continue;}
        if(typeof data[name]=='function') continue;
        var value = data[name].toString();
        name = encodeURIComponent(name.replace('%20','+'));
        value = encodeURIComponent(value.replace('%20','+'));
        pairs.push(name+'='+value);
    }
    return pairs.join('&');
}
