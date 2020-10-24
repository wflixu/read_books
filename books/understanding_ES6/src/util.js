
const fs = require('fs');
function run(taskDef){
    let task = taskDef();
    let result = task.next();

    (function step(){
        if(!result.done){
            Promise.resolve(result.value)
            .then(function(value){
                result = task.next();
                step();
            }).catch(function(err){
                result = task.throw(err);
                step();
            })
        }
    })();
}

 function readFile(filename){
    return new Promise(function(resolve, reject){
        fs.readFile(filename, function(err,contents){
            if(err){
                reject(err);
            }else {
                resolve(contents);
            }
        });
    })
}

exports.run = run;
exports.readFile = readFile;