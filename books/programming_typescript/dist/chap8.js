define(["require", "exports", "fs"], function (require, exports, fs_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // import * as Redis from 'redis'
    // import { appendFile, readFile } from "fs/promises";
    // setTimeout(() => {
    //    console.info('A',1); 
    //    console.info('B',2); 
    // }, );
    // console.info('C')
    (0, fs_1.readFile)('./data/log', { encoding: 'utf8' }, function (error, data) {
        if (error) {
            console.error("error reading!", error);
        }
        console.info("success reading", data);
    });
    (0, fs_1.appendFile)('./data/log', 'new access log entry', function (err) {
        console.error('error writing!', err);
    });
    function createProtocol(script) {
        return function (command) { return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return new Promise(function (resolve, reject) {
                var worker = new Worker(script);
                worker.onerror = reject;
                worker.onmessage = function (event) { return resolve(event.data.data); };
                worker.postMessage({ command: command, args: args });
            });
        }; };
    }
    var runWithMatrixProtocol = createProtocol('matrix-worker-script.js');
    var pararelDeterminat = runWithMatrixProtocol('invert');
    pararelDeterminat([[1, 2], [3, 5]]).then(function (determinat) { return console.log(determinat); });
});
//# sourceMappingURL=chap8.js.map