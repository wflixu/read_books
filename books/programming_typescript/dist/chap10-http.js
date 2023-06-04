"use strict";
var NetWork;
(function (NetWork) {
    var HTTP;
    (function (HTTP) {
        function get(url) {
            return Promise.resolve('');
        }
        HTTP.get = get;
    })(HTTP = NetWork.HTTP || (NetWork.HTTP = {}));
})(NetWork || (NetWork = {}));
//# sourceMappingURL=chap10-http.js.map