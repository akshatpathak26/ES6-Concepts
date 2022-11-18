//promises - used to avoid cb hell
//Pending , Rejected, Fullfilled   (by default we will be at pending)


const value = 2;

const promise = new Promise((resolve,reject)=>{
    const random = Math.floor(Math.random() * 3)
    if (random === value) {
        resolve('you gussed the correct number')
    } else{
        reject('Wrong Number')
    }
   
   
})
console.log(promise);

promise.then((data)=> console.log(data)).catch((err)=> console.log(err))