// node 环境 省去dom, 点击事件用node 事件代替 EventEmitter

const EventEmitter = require('events').EventEmitter;



//关闭状态
function OffLightState(light) {
    this.light = light;
};

OffLightState.prototype  = new State();

OffLightState.prototype.buttonWasPressed = function () {
    console.log('弱光');
    this.light.setState(this.light.weakLightState);
    setTimeout(() => {
        this.light.button.emit('mockClick');
    }, 3000);
};

// 弱光状态
function WeakLightState(light) {
    this.light = light;
};

WeakLightState.prototype = new State();

WeakLightState.prototype.buttonWasPressed = function () {
    console.log('强光');
    this.light.setState(this.light.strongLightState);
    setTimeout(() => {
        this.light.button.emit('mockClick');
    }, 3000);
};

// 强光状态
function StrongLightState(light) {
    this.light = light;
};
StrongLightState.prototype = new State();
StrongLightState.prototype.buttonWasPressed = function () {
    console.log('关灯');
    this.light.setState(this.light.offLightState);
    setTimeout(() => {
        this.light.button.emit('mockClick');
    }, 3000);
};



function Light() {
    this.offLightState = new OffLightState(this);    // 持有状态对象的引用   
    this.weakLightState = new WeakLightState(this);
    this.strongLightState = new StrongLightState(this);
    this.button = new EventEmitter();
}

Light.prototype.init = function () {
    let self = this;
    this.button = new EventEmitter();
    this.currState = this.offLightState;
    console.log(self);
    
    this.button.on('mockClick', function () {
        console.log('mockClick 事件触发');
        self.currState.buttonWasPressed();
    });

    setTimeout(() => {
        this.button.emit('mockClick');
    }, 3000);
}
Light.prototype.setState = function (newState) {
    this.currState = newState;
};


const light = new Light();
light.init();


function State () { };
State.prototype.buttonWasPressed = function () {
    throw new Error('父类的buttonWasPressed方法必须被重写');
};






