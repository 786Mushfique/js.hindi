function sayMyname() {

    console.log("H")
    console.log("I")
    console.log("T")
    console.log("E")
    console.log("S")
    console.log("H")

}

// sayMyname()

function addTWoNumbers(num1 ,num2) {
//    console.log(num1 + num2);

// let result = num1 + num2;
// return result;

return num1 + num2;
    
}

const result = addTWoNumbers(3,5)
// console.log(result)

function loginUserMessage(username){
    if(username===undefined){
        console.log("please enter the user name")
        return;

    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("hitesh"))

// console.log(loginUserMessage());


function calculateCartPrice(...num1){ //rest operator
    return num1;

}
// console.log(calculateCartPrice(200,300,444))


const user = {
    username: "hitesh",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user);
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));