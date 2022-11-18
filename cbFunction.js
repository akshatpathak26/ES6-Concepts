function makeUppercase(value) {
    console.log(value.toUpperCase());
    
}

function handleName(name, cb) {
    const fullName = `${name} smith`
    cb(fullName)
}

handleName('Akshat',makeUppercase)
handleName('Pathak',(value)=> console.log(value))