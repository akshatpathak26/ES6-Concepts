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


const ages = people.map((person)=>{
    return person.age *2 ;
});


console.log(ages);

const newPeople = people.map((item)=>{
    return {
        firstName: item.name.toUpperCase(),
        oldAge:    item.age + 20,
    }
})

console.log(newPeople);