// Fetch API -  Browser API for HTTP (AJAX) Requests
// Default - GET Requests, supports other methods as well
// Returns Promise

const url = 'https://www.course-api.com/react-tours-project'

// console.log(fetch(url));

// fetch(url)
// .then((resp)=> console.log(resp) )
// .catch((err)=> console.log(err))

const getTours = async () => {
    try {
        const resp = fetch(url)
        const data = resp.json()
        return data  //try block se jo bhi return milega usko .then se access kr skte ho kyunki promise resolve hora hai
    } catch (err) {
        console.log(err);
    }
}

console.log(getTours().then());