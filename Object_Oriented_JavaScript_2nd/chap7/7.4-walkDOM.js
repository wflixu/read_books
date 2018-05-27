function walkDOM(n){
	do {
		console.log(n);
		if(n.hasChildNodes()){
			walkDOM(n.firstChild);
		}
	}while(n=n.nextSibling);
}

// 只遍历元素
function walkDOM (el){
	do{
		console.log(el);
		if(el.children.length>0){
			walkDOM(el.firstElementChild);
		}
	}while(el=el.nextElementSibling);
}
//test
walkDOM(document.body);

function doWith(dom){
   console.log(dom);
}
var j=0;
function walkDom (dom,doWith){
	console.log(j++);
	doWith(dom);
	for(var i = 0; i<dom.childNodes.length;i++){
		if(dom.childNodes[i].hasChildNodes()){
			walkDom(dom.childNodes[i],doWith);
		}
	}

}

//test
walkDom(document.body,doWith);
walkDom(document.documentElement,callback);