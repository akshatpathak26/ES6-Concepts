//Filter - returns new array , can manipulate the size of new array, returns are based on conditions
//Find - returns single instance (object), returns first match, if no match - undefined

const people = [
    {
            name:"akshat",
            age: 20,
            position: "monster developer"
    },
    {
        name:"simran",
        age: 25,
        position: "developer"
},
{
    name:"pathak",
    age: 28,
    position: "intern"
},
]

//filter 
const youngPeople = people.filter((person)=>{
 return person.position === 'intern'
})



//multiple matches for find 

const singleResult = people.find((person)=>person.age >18)
console.log(singleResult);

console.log(people[2].name);