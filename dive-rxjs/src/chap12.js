var Observable = require('rxjs/Observable').Observable;
var Subject = require('rxjs/Subject').Subject;

require('rxjs/add/observable/interval');
require('rxjs/add/observable/merge');
require('rxjs/add/observable/of');
require('rxjs/add/operator/filter');
require('rxjs/add/operator/map');
require('rxjs/add/observable/range');
require('rxjs/add/operator/take');
require('rxjs/add/operator/multicast');
require('rxjs/add/operator/concat');
require('rxjs/add/operator/mapTo');
require('rxjs/add/operator/do');
require('rxjs/add/operator/delay');
require('rxjs/add/operator/merge');
require('rxjs/add/operator/publish');
require('rxjs/add/operator/share');
require('rxjs/add/operator/publishLast');


// const source$ = Observable.interval(1000).take(3);

// source$.do(
//     value =>console.log('do log source:',value),
// ).subscribe(
//     value =>console.log('data:',value),
//     error =>console.log('data:',error),
//     ()=> console.log('complete')
// )

const source$ =Observable.range(1,10)
.filter(x=>x%2 ===0)
.do( value=> console.log('source$ data after data = ',value))
.map(x=>x*x);

source$.do(
    value=> console.log('source$ data = ',value)
).subscribe(
    value => console.log('data:', value),
    error => console.log('data:', error),
    () => console.log('complete')
)