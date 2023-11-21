// singleton
// Object.create

// object literals

const mysym = Symbol("key1")

const JsUser = {
    name:"Hitesh",
    "full name":"Hitesh Choudray",
    [mysym]:"mykey1",
    age:18,
    location:"jaipur",
    email:"hitesh@google.com",
    isLoggedIn:false,
    lastLoggedInDays:["Monday" , "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mysym])

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)

JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser)

JsUser.greeting = function(){
    console.log("hello js user")
}


JsUser.greetingTwo = function(){
    console.log(`hello js user , ${this.name}`  )
}

console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())
