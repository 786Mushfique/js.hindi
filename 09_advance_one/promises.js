const promiseOne = new Promise(function(resolve , reject){
    setTimeout(function(){
        console.log("Asnyc task is complete");
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("promised consumed")
})

new Promise(function(resolve , reject){
    setTimeout(function(){
        console.log("Asnyc task2");
        resolve()
    },1000)
}).then(function(){
    console.log("Async2 Resolved")
})

const promiseThree = new Promise(function(resolve , reject){
    setTimeout(function(){
        resolve({username:"chai" , Email:"chai@Example.com"})

    },1000)
})
promiseThree.then(function(user){
    console.log(user)

})

const promiseFour = new Promise(function(resolve , reject){
    setTimeout(function(){
        let error = false;
        if (!error) {

            resolve({username:"hitesh" , password:"123"})
        }else{
            reject('ERROR:something went wromg')
        }
    },1000)
})
.then((user)=>{
    console.log(user)
    return user.username;
})
.then((username)=>{
    console.log(username)

})
.catch((error)=>{
    console.log(error)

}).finally(()=>{
    console.log("the promise either resolve or rejected")
})

const promiseFive = new Promise(function(resolve , reject){
    setTimeout(function(){
        let error = true;
        if (!error) {

            resolve({username:"javascript" , password:"123"})
        }else{
            reject('ERROR:js went wromg')
        }
    },1000)
});

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}
consumePromiseFive()

async function getAllUsers(){
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
    
            const data = await response.json()
            console.log(data);
        } catch (error) {
            console.log("E: ", error);
        }
    }

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.