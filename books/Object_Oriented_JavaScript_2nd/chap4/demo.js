//try catch
 try {
 	iDontExist();
 } catch (e) {
 	alert(e.name + ': ' + e.message);
 } finally {
 	alert('finally');
 }

 /*
 *练习题
 */
 //2
 function C() {
 	this.a = 1;
 	return false;
 }
 console.log(typeof new C());
 //3
 c=[1,2,[1,2]];
 c.sort();
 c.join('--');
 console.log(c);

 /*
 *4.定义一个类似于String();
 */
 function MyString(para) {
 	this.length=0;
 	this.toString=function(){
 		return para;
 	}
 	this.valueOf=function(){

 	}
 }
 
 //
var MyString=function(str) {
    var list = [];
    for (var i in str) {
        list[i] = str[i];
    }
    this.length=i+1;
    this.list = list;
    this.toString=toString;
    this.valueOf=valueOf;
    this.charAt=charAt;
    this.concat=concat;
    this.slice=slice;
    this.split=split;
    this.reverse=reverse;
};

function toString(){
    var a_str='';
    for(var i=0;i<this.list.length;i++)
    {
        a_str+=this.list[i];
    }
    return a_str;
}
function valueOf(){
    return this.toString();
}
function charAt(n){
    var c_str='';
    c_str=this.list[n]
    return c_str;
}
function concat(ch){
    return this.toString()+ch;
}
function slice(m,n){
    var s_str='';
    if(n>0){
        for(var i=m;i<n;i++){
            s_str+=this.list[i];
        }
    }else if(n<0){
        var len=this.list.length;
        for(var i=m;i<n+len;i++){
            s_str+=this.list[i];
        }
    }
    return s_str;

}
function split(element){
    for(var i=0;i<this.list.length;i++){
        if( this.list[i]==element){
            return i;
        }
    }
    var slist=[];
    slist=this.list.split(i,1);
    return slist;
}

function reverse(){
    var re_str=this.list.reverse();
    return re_str.join('').toString();
}

var s=new MyString('hello');
s.toString();       //'hello'
s.valueOf();        //'hello'
s.charAt(2);        //'l'
s.concat(' world'); //'hello word'
s.slice(1,3);       //'el'
s.slice(0,-1);      //'hell'
s.split('e')；      //"h", "l", "l", "o"
s.reverse();        //'olleh'

//5.1

var shape= {
	type:'形状',
	getType: function(){
		return this.type;
	}
}
//5.2

function Triangle(a,b,c){
     this.a=a;
     this.b=b;
     this.c=c;
     this.type='三角形';
     this.getPrimeter= function(){
     	return this.a + this.b +this.c;
     }
}
Triangle.prototype=shape;
Triangle.prototype.constructor = Triangle;
var ls= new Triangle(2,3,3);
//test
var t= new Triangle(1,2,3);

t.constructor===Triangle //true
shape.isPrototypeOf(t);

t.getPrimeter();

t.getType();


/*
*第6章
 */

//6.1
function Shape () {
    this.name='Shape';
    this.toString = function () {
        return this.name;
    };
}
 
function TwoShape () {
    this.name = '2D shape';
}
function Triangle(side,height) {
    this.name= 'Triangle';
    this.side = side;
    this.height = height;
    this.getArea = function() {
        return this.side*this.height/2;
    };
}

TwoShape.prototype = new Shape();
Triangle.prototype = new TwoShape();
TwoShape.prototype.constructor = TwoShape;
Triangle.prototype.constructor = Triangle;

//test
var my =new Triangle(5,10);
my.getArea();
my.toString();
my.constructor ===Triangle;

my instanceof Shape;//true
my instanceof TwoShape;//true
my instanceof Triangle ;//true
my instanceof Array;//false

Shape.prototype.isPrototypeOf(my); //true
TwoShape.prototype.isPrototypeOf(my);
Triangle.prototype.isPrototypeOf(my);

String.prototype.isPrototypeOf(my);

/**
 * 继承
 * 
 */
//6.7
function extendCopy (p) {
    var c = {};
    for(var i in p) {
        c[i] = p[i];
    }
    c.uber = p;
    return c;
}

var shape = {
    name: 'Shape',
    toString: function (){
        return this.name;
    }
}

var twoDee = extendCopy(shape);
twoDee.name = '2D shape ';
twoDee.toString = function (){
    return this.uber.toString() +',' + this.name;
};

var triangle = extendCopy(twoDee);
triangle.name = 'Triangle';
triangle.getArea = function() {
    return this.side*this.height/2;
}

triangle.side = 5;
triangle.height = 10;
triangle.getArea();

/**
 * 深度拷贝
 */
function deepCopy (p, c) {
    var c = [] || {};
    for(var i in p){
        if( p.hasOwnProperty(i)) {
            if (typeof p[i] === 'object') {
                c[i] = Array.isArray(p[i]) ? [] : {};
                deepCopy(p[i], c[i]);
            }else {
                c[i] = p[i];
            }
        }
    }
    return c;
}
//test
var parent = {
    numbers: [1,2,3],
    letters: ['a','b','c'],
    obj: {
        prop: 1
    },
    bool: true
};
var mydeep = deepCopy(parent,mydeep);
var myshallow = extendCopy(parent);
mydeep.numbers.push(4,5,6);

mydeep.numbers;

parent.numbers;
myshallow.numbers.push(10);
myshallow.numbers;
parent.numbers;
mydeep.numbers;

/**
 *ES3判断是数组函数
 *
 */
function isArray(){
    if(Array.isArray !== "function") {
        Array.isArray = function (candidate) {
            return Object.prototype.toString..call(dandidate) === '[object Array]';
        };
    }
}

//原型继承
function object(o){
    var n;
    function F() {};
    F.prototype = o;
    n = new F();
    n.uber = o;
    return n;
}

//多重继承
function multi () {
    var n = {},stuff, j = 0 ,len = arguments.length;
    for (j=0;j<len; j++) {
        stuff = arguments[j];
        for( var i in stuff) {
            if (stuff.hasOwnProperty(i)){
                n[i] = stuff[i];
            }
        }
    }
    return n;
}
//test
var shape = {
    name: 'shape',
    toString: function() {
        return this.name;
    }
};
var twoDee = {
    name: '2D shape',
    dimensions: 2
};
var triangle = multi(shape,twoDee,{
    name: 'Triangle',
    getArea: function() {
        return this.side*this.height/2;
    },
    side: 5,
    height: 10
});

triangle.getArea();

triangle.dimensions;
triangle.toString() 

/**
 * 第六章案例
 */
//Piont 构造期
function Point (){
    this.x=x;
    this.y=y;
}
function Line(p1,p2) {
    this.p1=p1;
    this.p2=p2;
    this.length = Math.sqrt(
        Math.pow(p1.x-p2.x,2) +
        Math.pow(p1.y-p2.y,2)
        );
}
//Shape 构造器
function Shape(){
    this.points = [];
    this.lines = [];
    this.init();
}

Shape.prototype = {
    constructor: Shape,
    init: function(){
        if(this.context===undefined){
            var canvas = document.getElementById('canvas') ;
            Shape.prototype.context = canvas.getContext('2d');
        }
    },
    draw: function(){
        var i,ctx = this.context;
        ctx.strokeStyle= this.getColor();
        ctx.beginPath();
        ctx.moveTo(this.points[0].x,this.points[0].y);
        for(i=1; i<this.points.length;i++){
            ctx.lineTo(this.points[i].x,this.points[i].y);
        }
        ctx.closePath();
        ctx.stroke();
    },
    getColor: function(){
        var i, rgb=[];
        for(i=0;i<3;i++){
            rgb[i]= Math.round(255*Math.random());
        }
        return 'rgb('+rgb.join(',')+')';
    },
    getLines: function(){
        if(this.lines.length>0) {
            return this.lines;
        }
        var i,lines = [];
        for ( i=0; i<this.points.length; i++){
            lines[i] = new Line(this.points[i],
                this.points[i+1])||this.points[0];
        }
        this.lines = lines;
        return lines;
    },
    getArea:function (){

    } ,
    getPerimeter: function(){
        var i , perim = 0,lines =this.getLines();
        for(i=0;i<liness.length;i++){
            perim += lines[i].length;
        }
        return perim;
    }
};
//Triangle构造期
function(){
    this.points = [a, b, c];
    this.getArea = function (){
        var p = this.getPerimeter;
        s = p/2;
        return Math.sqrt (
            s
            *(s-this.lines[0].length)
            *(s-this.lines[1].length)
            *(s-this.lines[2].length)
            );
    };
}

//Rectangle 构造期
function Rectangle (p, side_a,side_b){
    this.points = [
        p,
        new Point(p.x +side_a,p.y),
        new Point(p.x +side_a,p.y+side_b),
        new Point(p.x ,p.y+side_b)
    ];
    this.getArea = function(){
        return side_a* side_b;
    };
}

//Square
function Square(){
    Rectangle.call(this, p, side, side)
}

(function(){
    var s = new Shape();
    Triangle.prototype = s;
    Rectangle.prototype = s;
    Square.prototype = s;
})();

//test
var p1 = new Point(100,100);
var p2 = new Point(300,100);
var p3 = new Point(200,0);

var t = new Triangle(p1, p2, p3);
t.draw();
t.getPerimeter();

t.getArea();

//Rectangle 实例化
var r = new Rectangle(new Point(200, 200), 50 ,100);
r.draw();
r.getArea();
r.getPerimeter();

var s = new Square ( new Point(130, 130), 50);
s.draw();
s.getArea();
s.getPerimeter();

new Square(p1,200).draw();

/**
 * 遍历dom元素
 */
function walkDom(n){
    do{
        console.log(n);
        if(n.hasChildNodes()) {
            walkDom(n.firstChild);
        }
    } while ( n=n.nextSibling)
}
//test
walkDom (document.documentElement);
walkDom (document.body);

//删除某元素的所有子节点的方法
function removeAll(n) {
    while (n.firstChild) {
        n.removeChild(n.firstChild);
    }
}
removeAll(document.body);

/**
 * javascript 面向对象程序设计 
 * 第7章 浏览器环境
 * 
 */
//ajax
//创建一个xhr对象
var xhr = new XMLHttpRequest();
//设置事件监听
xhr.onreadystatechange = myCallbck;
//调用open方法
xhr.open('GET','somefile.text', true);
xhr.send('...');

//callback
function myCallback ()｛
    if(xhr.readystate<4) {
        return;
    }
    if(xhr.status!== 200)  {
        alert('Error');
        return;
    }
    alert(xhr.responseText);
｝

//在创建xhr 时兼容ie6
var ids = ['MSXML2.XMLHTTP.3.0',
        'MSXML2.XMLHTTP',
        'Microsoft.XMLHTTP'];
var xhr;
if (XMLHttpRequest) {
    xhr= new XMLHttpRequest();
}else {
    for(var i = 0; i<ids.length ; i++){
        try{
            xhr = new ActiveXObject(ids[i]);
            break;
        }catch(e) {

        }
    }
}

/**
 * callback 函数封装到一个闭包中
 */
var xhr= new XMLHttpRequest();
xhr.onreadystatechange = (function (myxhr){
    return function() {
        myCallback(myxhr);
    }
})(xhr)

xhr.open('GET','somefile.text',true);
xhr.send('');
vas str = 'http://www.phpied.com/files/jsoop/xhr.html'