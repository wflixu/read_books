var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "postgres"], function (require, exports, postgres_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    postgres_1 = __importDefault(postgres_1);
    var model = {
        url: window.location.href,
    };
    var input = document.createElement('input');
    input.classList.add('Input', 'URlinput');
    input.classList.add('dd');
    input.value;
    input.addEventListener('change', function () {
        model.url = input.value.toUpperCase();
    });
    document.body.appendChild(input);
    document.querySelector('.element').value;
    var client = (0, postgres_1.default)({});
    var res = await client;
});
//# sourceMappingURL=chap9.js.map