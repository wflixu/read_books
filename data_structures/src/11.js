function Vertex(label) {
    this.label = label;
}

function Graph(v) {
    this.vertices = v;
    this.edges = 0;
    this.adj = [];
    for (var i = 0; i < this.vertices; ++i) {
        this.adj[i] = [];
        this.adj[i].push('');
    }
    this.marked = [];
    for (let i = 0; i < this.vertices; i++) {
        this.marked[i]=false;
        
    }
    this.dfs = dfs;
    this.addEdge = addEdge;
    this.toString = toString;
    this.showGraph = showGraph;
}

function addEdge(v, w) {
    this.adj[v].push(w);
    this.adj[w].push(v);
    this.edges++;
}

function showGraph() {
    for (var i = 0; i < this.vertices; i++) {
        var pustr = i + '->';
        for (var j = 0; j < this.vertices; ++j) {
            if (this.adj[i][j] != undefined) {
                pustr+=(this.adj[i][j] + ' ');
            }
        }
        console.log(pustr);
    }
}

function dfs (v){
    this.marked[v] = true;
    if(this.adj[v]!=undefined){
        console.log('visited veertex: '+v);
    }
    for (var index = 1; index < this.adj[v].length; index++) {
        var temp = this.adj[v][index] ;
        if(!this.marked[temp]){
            this.dfs(temp);
        }
    
    }
  
}
// 调用

const g = new Graph(5);
g.addEdge(0,1);
g.addEdge(0,2);
g.addEdge(1,3);
g.addEdge(2,4);
g.showGraph();
g.dfs(0);



