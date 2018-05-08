//yield遍历完全二叉树
// 西安吗是二叉树的构造函数
// 三个参数分别是左树，当前节点，右树

/*function Tree(left, label, right) {
    this.left = left;
    this.label = label;
    this.right = right;
}

// 下面是中序遍历函数
function* inorder(t) {
    if (t) {
        yield* inorder(t.left);
        yield t.label;
        yield* inorder(t.right);
    }
}

// 生产二叉树
function make(array) {
    if (array.length == 1) {
        return new Tree(null, array[0], null);
    }
    return new Tree(make(array[0], array[1], make[2]));
}

let tree = make([
    [
        ['a'], 'b', ['c']
    ], 'd', [
        ['e'], 'f', ['g']
    ]
]);
var result = [];
for (let node of inorder(tree)) {
    result.push(node);
}

console.log(result);*/

// Generator函数推到，
/*let gen = function*() {
    for (let i = 0; i < 6; i++) {
        yield i;
    }
}

// let squared = (
// for (n of generator()) n * n);

let squared = Array.from(gen()).map(n => n * n);
console.log(...squared);*/


/*function showLoadingScreen() {
    console.log('show loading screen');
}

function loadUIDataAsynchromonusly() {
    console.log('load ui');
}

function hideLoadingScreen() {
    console.log('hide loading screen ');
}

function* loadUI() {
    showLoadingScreen();
    yield loadUIDataAsynchromonusly();
    hideLoadingScreen();
}
var loader = loadUI();
loader.next();

loader.next();*/

// promise对象实现的Ajax操作的例子

var getJSON = function(url) {
    var promise = new Promise(function(resolve, reject) {
        var client = new XMLHttpRequest();
        client.open('GET', url);
        client.onreadystatechange = handler;
        client.responseType = "json";
        client.setRequestHeader("Accept", "Application/json");
        client.send();

        function handler() {
            if (this.status === 200) {
                resolve(this.response);
            } else {
                reject(new Error(this.statusText));
            }
        }
    });
    return promise;
}

getJSON('url').then(function(json) {
    console.log('Contents' + json);
}, function(error) {
    console.error('出错了，', error);
})

function* helloGenerator() {
    console.log('start');
    yield 'hello';

    console.log('22222222');
    yield 'world';

    return 'ending';
}

var hg = helloGenerator();
console.log(hg.next());