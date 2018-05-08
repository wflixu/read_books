//先给button加上一个事件
function clicked() {
    console.log("click");
}

//判断是不是函数
function isFunction(f) {
    return Object.prototype.toString.call(f) === "[object Function]";
}

function empty(dom){
    while(dom.firstChild){
        empty(dom.firstChild);
    }

    var i;
    var l=dom.attributes?dom.attributes.length:0;

    for(i=0;i<l;i++){
        attr=dom[dom.attributes[i].name];
        console.log(attr);
        if(isFunction(attr)){
            attr=null;
        }
    }
    dom.parentNode.removeChild(dom);
}

empty(document.body);

/**
 * include()函数
 */
function include(url){
	var scr = document.createElement('script');
	scr.src=url;
	document.getElementByTagName('head')[0].appendChild(scr);
}