const user = {

    username:"Hitesh",
    price:999,

    welcomeMessage: function(){
        // console.log(`${this.username} , welcome to website`)
        // console.log(this)
    }


}

// user.welcomeMessage();
// user.username = "sam";
// user.welcomeMessage();
// console.log(this)

// function chai(){
//     let username = "hitesh"
//     // console.log(this)
//     console.log(this.username)
// }
// chai()

const chai = () =>{
    let username = "hitesh"
    // console.log(this)
    // console.log(this.username)
    // console.log(this)

}
chai()


// const addTwo = (num1 , num2)=>{ // arrow function

//     return num1 + num2;

// }

// console.log(addTwo(3,4))


// const addTwo = (num1 , num2)=> (num1 + num2); // arrow function implicit return

const addTwo = (num1 , num2)=> ({username:"hitesh"})

console.log(addTwo(3,4))