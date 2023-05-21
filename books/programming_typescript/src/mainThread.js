var worker = new Worker('./src/WorkerScript.js');
worker.postMessage('some data');
worker.onmessage = function (e) {
    console.log(e.data);
};
worker.postMessage('some data');
