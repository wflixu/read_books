/**
 * 装饰器模式
 */
/*var tree = {};
tree.decorate = function() {
    alert('Make sure the tree won\'t fall');
}
tree.getDecorator = function(deco) {
    rtr
    tree[deco].prototype = this;
    return new tree[deco];
}

tree.RedBalls = function() {
    this.decorate = function() {
        this.RedBalls.prototype.decorate();
        alert('Put on some red balls');
    }
}

tree.BlueBalls = function() {
    this.decorate = function() {
        this.BlueBalls.prototype.decorate();
        alert('Add blue balls');
    }
}
tree.Angel = function() {
    this.decorate = function() {
        this.Angel.prototype.decorate();
        alert('An angel on the top');
    }
}

tree = tree.getDecorator('BlueBalls');
tree = tree.getDecorator('Angel');
tree = tree.getDecorator('RedBalls');

tree.decorate();
*/

/**
 * 观察者模式
 */
var observer = {
    addSubscriber: function(callback) {
        if (typeof callback == "function") {
            this.subscribers[this.subscribers.length] = callback;
        }
    },
    removeSubscriber: function(callback) {
        for (var i = 0; i < this.subscribers.length; i++) {
            if (this.subscribers[i] === callback) {
                delete this.subscribers[i];
            }
        }
    },
    publish: function(what) {
        for (var i = 0; i < this.subscribers.length; i++) {
            if (typeof this.subscribers[i] === 'function') {
                this.subscribers[i](what);
            }
        }
    },
    make: function(o) {
        for (var i in this) {
            if (this.hasOwnProperty(i)) {
                o[i] = this[i];
                o.subscribers = [];
            }
        }
    }
}

var blogger = {
    writeBlogPost: function() {
        var content = 'Today is ' + new Date();
        this.publish(content);
    }
};

var la_times = {
    newIssue: function() {
        var paper = 'Martians have landed on Earth!';
        this.publish(paper);
    }
}

observer.make(blogger);
observer.make(la_times);
var jack = {
    read: function(what) {
        console.log('I just read that ' + what);
    }
}

var jill = {
    gossip: function(what) {
        console.log('You don\'t hear it from me ,but' + what);
    }
}

blogger.addSubscriber(jack.read);
blogger.addSubscriber(jill.goosip);

// test
blogger.writeBlogPost();
blogger.removeSubscriber(jill.gossip);
blogger.writeBlogPost();

la_times.addSubscriber(jill.gossip);
la_times.newIssue();