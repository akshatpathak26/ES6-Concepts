let person = {
    names: "",
    job : ""
};

    const app = person['names'] = 'akshatpathka'
    console.log(app);

function updateState(key,value){
    person[key] = value;
}

updateState('names','akshat');
console.log(person.names);
console.log(app);
updateState('job','developer')
console.log(person.job);