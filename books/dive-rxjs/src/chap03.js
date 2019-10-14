
var Observable = require('rxjs/Observable').Observable;
require('rxjs/add/operator/map');

const onSubscribe= observer =>{
    observer.next(1);
    observer.next(2);
    observer.next(3);
}

const source$ = new Observable(onSubscribe);
source$.map(x=>x*x).subscribe(item=>console.log(item));