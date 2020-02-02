export default class Dep {
    constructor(){
        this.subs = []; 
    }
    addSub (sub){
        this.subs.push(sub)
    }
    removeSub(sub){
        this.removeSub(this.subs,sub)
    }
    depend(){
        if(window.target){
            this.addSub(window.target);
        }
    }
    notify(){
        const subs = this.subs.slice();
        for (let index = 0; index <subs.length; index++) {
           subs[index].update();
        }
    }
}

function remove (arr,item){
    if(arr.length){
        const index = arr.indexOf(item);
        if(index>-1){
            return arr.splice(index,1);
        }
    }
}