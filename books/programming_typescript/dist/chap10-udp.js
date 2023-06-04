"use strict";
var NetWork;
(function (NetWork) {
    var UDP;
    (function (UDP) {
        function send(url, packets) {
            return Promise.resolve('');
        }
        UDP.send = send;
    })(UDP = NetWork.UDP || (NetWork.UDP = {}));
    var HTTP;
    (function (HTTP) {
        function get(url, count) {
            count++;
            return Promise.resolve(url + count);
        }
        HTTP.get = get;
    })(HTTP = NetWork.HTTP || (NetWork.HTTP = {}));
})(NetWork || (NetWork = {}));
//# sourceMappingURL=chap10-udp.js.map