// Rest Operator...
// gathers/collects items and put them all into an Array
// destructuring, functions
// placement important, careful with the same name
// rest when declare function, spread when invoke the function


// arrays
const fruits = ['apple', 'orange', 'lemon', 'banana', 'pear'];


const [first,second,...restOfTheFruits] = fruits;
console.log(first,restOfTheFruits);

const specificFruit = restOfTheFruits.find((fruit)=> fruit ==='lemon')
console.log(specificFruit);

//objects
const person = { name: 'john', lastName: 'smith', job: 'developer' };
const {lastName,...rest} = person;  //rest should always be at the end because it collects the rest of the items
console.log(lastName,rest);

//function
function getAverage(name,...scores) {
    console.log(name);
    console.log(scores);
    const average = scores.reduce((total,item)=>{return total += item},0)/scores.length;
    console.log(average);
    
}

getAverage(person.name,89,75,67,30,88)