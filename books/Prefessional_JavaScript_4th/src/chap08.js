let person = {
    name:'nicholas',
    friends:['shellby', 'court', 'van']
}

let antherPerson = Object.create(person);

antherPerson.name ='Greg';
antherPerson.friends.push('Rob');

let yetPerson = Object.create(person);

yetPerson.name = 'Linda';

yetPerson.friends.push('Barbie');

console.log(person.friends);