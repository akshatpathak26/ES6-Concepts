

// Spread Operator...
// Allows and iterable to spread/expand individually inside reciever
// Split into single items and COPY them

const udemy = 'udemy';
const letters = [...udemy];
console.log(letters);

const boys = ['john', 'peter', 'bob'];
const girls = ['susan', 'anna'];
const bestFriend = "buddy";

const friends = [...boys,...girls,bestFriend];
console.log(friends);

const person = { name: 'john', job: 'developer' };
const newPerson = {...person,city:"Noida"};
console.log(newPerson);