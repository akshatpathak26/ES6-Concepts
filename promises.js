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


// const btn = document.querySelector('.btn');

// btn.addEventListener('click',()=>{
// addColor(1000,'.first','red').then(()=>addColor(3000,'.second','blue'))
// .then(()=>addColor(2000,'.third','green'))
// .catch((err)=> console.log(err))
// })

// function addColor(time, selector, color) {
//     const element = document.querySelector(selector)
//     return new Promise((resolve, reject)=>{
//         if (element) {
//             setTimeout(() => {
//                 element.style.color = color
//                 resolve()
//             }, time);
//         } else{
//             reject(`there is no such element : "${selector}"`)
//         }
//     })
// }