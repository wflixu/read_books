define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.renderBase = void 0;
    window.emialListModule = {
        renderList: function () { },
    };
    window.emailComposeModule = {
        renderComposer: function () { },
    };
    window.appModule = {
        renderApp: function () {
            window.emialListModule.renderList();
            window.emailComposeModule.renderComposer;
        },
    };
    var emailList = require('emailListModule');
    var emailComposer = require('emailComposerModule');
    module.exports.renderBase = function () { };
    define('emailBaseModule', ['require', 'exports', 'emailListModule', 'emailComposerModule'], function (require, exports, emailListModule, emailComposeModule) {
        exports.renderBase = function () {
            // ....
        };
    });
    function renderBase() {
        // ...
    }
    exports.renderBase = renderBase;
});
//# sourceMappingURL=chap10.js.js.map