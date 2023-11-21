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

console.log(loginUserMessage());