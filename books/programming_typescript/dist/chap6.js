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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
define(["require", "exports", "./zip"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Currency = void 0;
    // type ExistingUser = {
    //   id: number;
    //   name: string;
    // };
    // type NewUser = {
    //   name: string;
    // };
    // function deleteUser(user: { id?: number; name: string }) {
    //   delete user.id;
    // }
    // let existingUser:ExistingUser = {
    //   id: 12333,
    //   name: "i am a user",
    // };
    // deleteUser(existingUser);
    // type LegacyUser = {
    //   id: number | string;
    //   name: string;
    // };
    // let legacyUser: LegacyUser = {
    //   id: "79555",
    //   name: 'xin yang'
    // };
    // deleteUser(legacyUser)
    var Animal = /** @class */ (function () {
        function Animal() {
        }
        return Animal;
    }());
    var Bird = /** @class */ (function (_super) {
        __extends(Bird, _super);
        function Bird() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Bird.prototype.chirp = function () { };
        return Bird;
    }(Animal));
    var Crow = /** @class */ (function (_super) {
        __extends(Crow, _super);
        function Crow() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Crow.prototype.caw = function () { };
        return Crow;
    }(Bird));
    // function chirp(bird: Bird): Bird {
    //   bird.chirp();
    //   return bird;
    // }
    // chirp(new Animal)
    // chirp(new Bird)
    // chirp(new Crow)
    function clone(f) { }
    // function birdToBird(b: Bird): Bird {
    //   return b;
    // }
    // clone(birdToBird);
    // function birdToCrow(b: Bird): Crow {
    //   return b as Crow;
    // }
    // clone(birdToCrow);
    // function birdToAnimal(b:Bird):Animal{
    //     return b as Animal
    // }
    // clone(birdToAnimal)
    // function animalToBird(a:Animal):Bird {
    //     return a as Bird;
    // }
    // clone(animalToBird)
    // function crowToBird(c:Crow):Bird {
    //     return c as Bird
    // }
    // clone(crowToBird)
    // // 类型拓宽
    // let a = 'x';
    // let b = 3;
    // var c = true;
    // const  d = {x:3}
    // enum E {X,Y,Z}
    // let e = E.X;
    // const dd = 'x';
    // let cc = {x:3} as const;
    // let ee = [1, {x:2}] as const;
    // let ff = null;
    // function x () {
    //     let a = null;
    //     a = '222'
    //     a = 1;
    //     return a
    // }
    // let rc = x();
    // type Options = {
    //   baseURL: string;
    //   cacheSize?: number;
    //   tier?: "prod" | "dev";
    // };
    // class API {
    //   constructor(private options: Options) {}
    // }
    // new API({
    //   baseURL: "https://api.mysite.com",
    //   tier: "prod",
    // });
    // new API({
    //   baseURL: "https://api.mysite.com",
    //   badTier: "prod",
    // });
    // new API({
    //   baseURL: "https://api.mysite.com",
    //   badTier: "prod",
    // } as Options);
    // let badoptions = {
    //   baseURL: "https://api.mysite.com",
    //   badTier: "prod",
    // };
    // new API(badoptions);
    // let options:Options = {
    //     baseURL: "https://api.mysite.com",
    //     badTier: "prod",
    // }
    // new API(options);
    // type Unit = "cm" | "px" | "%";
    // type Width = {
    //   unit: Unit;
    //   value: number;
    // };
    // let units: Unit[] = ["px", "cm", "%"];
    // function parseWidth(width: number | string | null | undefined): Width | null {
    //   if (width == null) {
    //     return null;
    //   }
    //   if (typeof width == "number") {
    //     return {
    //       unit: "px",
    //       value: width,
    //     };
    //   }
    //   let unit = parseUnit(width);
    //   if (unit) {
    //     return {
    //       unit,
    //       value: parseFloat(width),
    //     };
    //   }
    //   return null;
    // }
    // function parseUnit(value: string): Unit | null {
    //   for (let index = 0; index < units.length; index++) {
    //     const element = units[index];
    //     if(value.endsWith(element)){
    //         return element;
    //     }
    //   }
    //   return null;
    // }
    // type UserTextEvent = { type:"TextEvent", value: string ,target: HTMLInputElement};
    // type UserMouseEvent = { type:"MouseEvent", value: [number, number],target: HTMLElement  };
    // type UserEvent = UserTextEvent | UserMouseEvent;
    // function handle(event: UserEvent) {
    //   if (event.type === "TextEvent") {
    //     event.value;
    //     event.target;
    //     return;
    //   }
    //   event.value;
    //   event.target;
    // }
    // function getNextDay(w: Weekday): Day {
    //   switch (w) {
    //     case "Mon":
    //       return "Tue";
    //     // default:
    //     //   return "Mon";
    //   }
    // }
    function isBig(n) {
        if (n >= 100) {
            return true;
        }
        else {
            return false;
        }
    }
    function getAPIResponse() {
        return Promise.resolve({});
    }
    function renderFriendList(friendList) { }
    (function () { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getAPIResponse()];
                case 1:
                    response = _a.sent();
                    renderFriendList(response.user.friendList);
                    return [2 /*return*/];
            }
        });
    }); })();
    function getType(o, k) {
        return o[k];
    }
    var activityLog = { lastEvent: new Date(), events: [] };
    var lastEvent = getType(activityLog, "lastEvent");
    var getType2 = function (ob) {
        var keys = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            keys[_i - 1] = arguments[_i];
        }
        var result = ob;
        keys.forEach(function (k) { return (result = result[k]); });
        return result;
    };
    var test = getType2(activityLog, "events", 0, "type");
    exports.Currency = {
        DEFAULT: "USD",
        from: function (value, unit) {
            if (unit === void 0) { unit = exports.Currency.DEFAULT; }
            return {
                unit: unit,
                value: value,
            };
        },
    };
    var aaa = [1, true];
    function tuple() {
        var ts = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            ts[_i] = arguments[_i];
        }
        return ts;
    }
    var t1 = tuple(1, true);
    //
    // function isString(str: unknown): boolean {
    //   return typeof str === "string";
    // }
    function isString(str) {
        return typeof str === "string";
    }
    var strTest1 = isString("x");
    var strTest2 = isString(["x"]);
    function parseInput(input) {
        var formattedInput;
        if (isString(input)) {
            formattedInput = input.toUpperCase();
        }
    }
    // 6.6 
    function formatInpt(input) {
        return input;
    }
    function getUserInput() {
        return '';
    }
    var input = getUserInput();
    formatInpt(input);
    formatInpt(input);
    function addToList(list, item) {
    }
    addToList('this is really,', 'really unsafe');
    function queryForUser(id) {
        // ...
    }
    // 另一种方式
    function CompanyID(id) {
        return id;
    }
    function OrderID(id) {
        return id;
    }
    function UserID(id) {
        return id;
    }
    var companyId = CompanyID('a9jd9jb9');
    var orderId = OrderID('8937nvyu34');
    var userId = UserID('j9304583');
    // queryForUser(userId);
    // queryForUser(companyId);
    // 6.8
    [1, 2, 3].map(function (n) { return n * 2; }).zip(['a', 'b', 'c']);
});
//# sourceMappingURL=chap6.js.map