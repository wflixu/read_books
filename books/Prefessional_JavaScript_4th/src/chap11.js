// setTimeout(console.log,0,111)

async function foo(){
    return 'foo';
}

foo().then(console.log);

async function bar(){
    return ['bar'];
}

bar().then(console.log);