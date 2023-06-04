"use strict";
// type Color = "Black" | "White";
// type File = "A" | "B" | "C" | "D" | "E" | "F" | "G" | "H";
// type Rank = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function serializable(Constructor) {
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        class_1.prototype.serizlize = function () {
            return this.getValue().toString();
        };
        return class_1;
    }(Constructor));
}
// 示例提示报错
var APIPayload = /** @class */ (function () {
    function APIPayload() {
    }
    APIPayload.prototype.getValue = function () {
        return {};
    };
    APIPayload = __decorate([
        serializable
    ], APIPayload);
    return APIPayload;
}());
// let APIPayloadddd = serialize(class APIPayload {
//   getValue():Payload {
//     return {} 
//   }
// } )
var MessageQueue = /** @class */ (function () {
    function MessageQueue(message) {
        this.message = message;
    }
    MessageQueue.create = function (messge) {
        return new MessageQueue([]);
    };
    return MessageQueue;
}());
var BalletFlet = /** @class */ (function () {
    function BalletFlet() {
        this.purpose = 'dancing';
    }
    return BalletFlet;
}());
var Boot = /** @class */ (function () {
    function Boot() {
        this.purpose = 'woodcutting';
    }
    return Boot;
}());
var Sneaker = /** @class */ (function () {
    function Sneaker() {
        this.purpose = 'walking';
    }
    return Sneaker;
}());
var Shoe = {
    create: function (type) {
        switch (type) {
            case 'BalletFlet': return new BalletFlet;
            case "Boot": return new Boot;
            case "Sneaker": return new Sneaker;
        }
    }
};
Shoe.create('Boot');
var RequestBuilder = /** @class */ (function () {
    function RequestBuilder() {
        this.data = null;
        this.method = null;
        this.url = null;
    }
    RequestBuilder.prototype.setMethod = function (method) {
        this.method = method;
        return this;
    };
    RequestBuilder.prototype.setData = function (data) {
        this.data = data;
        return this;
    };
    RequestBuilder.prototype.setURL = function (url) {
        this.url = url;
        return this;
    };
    RequestBuilder.prototype.send = function () {
    };
    return RequestBuilder;
}());
new RequestBuilder().setURL('/users').setMethod('post').setData({ firstName: 'Anna' }).send();
//# sourceMappingURL=chap5.js.map