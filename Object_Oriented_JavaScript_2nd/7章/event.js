function myevent(element,event_name,callback){

}

var myevent = {
	addListener: function(element, event_name,callback){
        
	},
	removeListener: function(element,event_name,callback){

	},
	getEvent:function (event) {

	},
	getTarget: function(event){

	},
	stopPropagation:function(){

	},
	preventDefault (event){

	}
}

var myevent = (function() {
    // wrap some private stuff in a closure
    var add, remove, toStr = Object.prototype.toString;
    // helper
    function toArray(a) {
        // already an array
        if (toStr.call(a) === '[object Array]') {
            return a;
        }

        // duck-typing HTML collections, arguments etc
        var result, i, len;
        if ('length' in a) {
            for (result = [], i = 0, len = a.length; i < len; i++) {
                result[i] = a[i];
            }
            return result;
        }
        // primitives and non-array-like objects
        // become the first and single array element
        return [a];
    }
    // define add() and remove() depending
    // on the browser's capabilities
    if (document.addEventListener) {
        add = function(node, ev, cb) {
            node.addEventListener(ev, cb, false);
        };
        remove = function(node, ev, cb) {
            node.removeEventListener(ev, cb, false);
        };
    } else if (document.attachEvent) {
        add = function(node, ev, cb) {
            node.attachEvent('on' + ev, cb);
        };
        remove = function(node, ev, cb) {
            node.detachEvent('on' + ev, cb);
        };
    } else {
        add = function(node, ev, cb) {
            node['on' + ev] = cb;
        };
        remove = function(node, ev) {
            node['on' + ev] = null;
        };
    }
    // public API
    return {
        addListener: function(element, event_name, callback) {
            // element could also be an array of elements
            element = toArray(element);
            for (var i = 0; i < element.length; i++) {
                add(element[i], event_name, callback);
            }
        },
        removeListener: function(element, event_name, callback) {
            // same as add(), only practicing a different loop
            var i = 0,
                els = toArray(element),
                len = els.length;
            for (; i < len; i++) {
                remove(els[i], event_name, callback);
            }
        },
        getEvent: function(event) {
            return event || window.event;
        },
        getTarget: function(event) {
            var e = this.getEvent(event);
            return e.target || e.srcElement;
        },
        stopPropagation: function(event) {
            var e = this.getEvent(event);
            if (e.stopPropagation) {
                e.stopPropagation();
            } else {
                e.cancelBubble = true;
            }
        },
        preventDefault: function(event) {
            var e = this.getEvent(event);
            if (e.preventDefault) {
                e.preventDefault();
            } else {
                e.returnValue = false;
            }
        }
    };
}());


//test

// add a div to the bottom of the page
var div = document.createElement('div');
div.style.cssText = 'width: 100px; height: 100px; background: red; position: absolute;';
document.body.appendChild(div);
// remember coordinates
var x = div.offsetLeft;
var y = div.offsetTop;
myevent.addListener(document.body, 'keydown', function(e) {
    // prevent scrolling
    myevent.preventDefault(e);
    switch (e.keyCode) {
        case 37: // left
            x--;
            break;
        case 38: // up
            y--;
            break;
        case 39: // right
            x++;
            break;
        case 40: // down
            y++;
            break;
        default:
            // not interested
    }
    // move
    div.style.left = x + 'px';
    div.style.top = y + 'px';
});

