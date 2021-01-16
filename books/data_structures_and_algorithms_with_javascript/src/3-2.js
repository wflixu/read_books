
import {List} from './List.js';
import {Customer} from './Customer.js';
function createArr(file) {
    let arr =  Deno.readTextFileSync(file).split('\n');

    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].trim();
    }

    return arr;
}


let movies = createArr('./data/films.txt');

let movieList = new List();
let customers = new List();

for(let i = 0; i < movies.length; i++) {
    movieList.append(movies[i]);
}

function displayList(list){
    for(list.front();list.curPos()<list.length();list.next()){
        let cur = list.getElement();
        if(cur instanceof Customer){
            console.log(`${cur['name']},${cur['movie']}`);
        }else {
            console.log(cur);
        }
    }
}

displayList(movieList);

checkout('jane doe', 'The Godfather',movieList,customers);

console.log('coutomer rentals:\n');

displayList(customers);





function checkout(name,movie,filmList,customerList){
    if(movieList.contains(movie)){
        let c = new Customer(name,movie);
        customerList.append(c);
        filmList.remove(c);
    }else{
        console.log(movie+'is not available');
    }
}
