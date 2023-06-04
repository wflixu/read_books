var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "child_process", "events"], function (require, exports, child_process_1, events_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    events_1 = __importDefault(events_1);
    var SafeEmitter = /** @class */ (function () {
        function SafeEmitter() {
            this.emitter = new events_1.default();
        }
        SafeEmitter.prototype.emit = function (channel) {
            var _a;
            var data = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                data[_i - 1] = arguments[_i];
            }
            return (_a = this.emitter).emit.apply(_a, __spreadArray([channel], data, false));
        };
        SafeEmitter.prototype.on = function (channel, listener) {
            return this.emitter.on(channel, listener);
        };
        return SafeEmitter;
    }());
    var commandEmitter = new SafeEmitter();
    var eventEmitter = new SafeEmitter();
    var worker = new Worker('WorkerScript.js');
    worker.postMessage('some data');
    worker.onmessage = function (event) {
        eventEmitter.emit.apply(eventEmitter, __spreadArray([event.type], event.data.data, false));
    };
    commandEmitter.on('sendMessageToThread', function (data) {
        worker.postMessage({ type: 'sendMessageToThread', data: data });
    });
    commandEmitter.on('creatThread', function (data) {
        worker.postMessage({ type: 'creatThread', data: data });
    });
    eventEmitter.on('creatThread', function (threadId, participants) {
        console.log('created a new chat thread!');
    });
    commandEmitter.emit('creatThread', [456, 789]);
    // 8.6.2 
    var child = (0, child_process_1.fork)('child-thread.js');
    child.on('message', function (data) {
        console.info('Child process sent a message');
    });
    child.send({ type: 'syn', data: [3] });
});
//# sourceMappingURL=mainThread.js.map