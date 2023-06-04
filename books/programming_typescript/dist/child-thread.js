"use strict";
process.on('message', function (data) {
    console.info('parent process sent a message', data);
});
process.send({ type: 'ack', data: [3] });
//# sourceMappingURL=child-thread.js.map