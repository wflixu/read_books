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
define(["require", "exports", "events", "worker_threads"], function (require, exports, events_1, worker_threads_1) {
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
    onmessage = function (command) {
        commandEmitter.emit.apply(commandEmitter, __spreadArray([command.data.type], command.data.data, false));
    };
    eventEmitter.on('receiveMessage', function (data) {
        postMessage({ type: 'receiveMessage', data: data });
    });
    eventEmitter.on('creatThread', function (data) {
        postMessage({ type: 'creatThread', data: data });
    });
    commandEmitter.on('sendMessageToThread', function (threadID, message) {
        console.log("ok , i will send a message to threadID ".concat(worker_threads_1.threadId));
    });
    eventEmitter.emit('creatThread', 123, [456, 789]);
});
//# sourceMappingURL=WorkerScript.js.map