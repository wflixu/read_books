var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "./chap6"], function (require, exports, chap6_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var defalut = chap6_1.Currency.DEFAULT;
    var a;
    function first() {
        console.log("first(): factory evaluated");
        return function (target, propertyKey, descriptor) {
            console.log("first(): called");
        };
    }
    function second() {
        console.log("second(): factory evaluated");
        return function (target, propertyKey, descriptor) {
            console.log("second(): called");
        };
    }
    var ExampleClass = /** @class */ (function () {
        function ExampleClass() {
        }
        ExampleClass.prototype.test = function () { };
        __decorate([
            first(),
            second()
        ], ExampleClass.prototype, "test", null);
        return ExampleClass;
    }());
    var el = new ExampleClass();
    el.test();
});
//# sourceMappingURL=de.js.map