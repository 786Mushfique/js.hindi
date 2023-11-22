// Immediately Invoked Function Expressions (iife)

// function chai(){
//     console.log(`DB CONNECTED`)
// }
// chai()

(function chai(){  // named iffe
    console.log(`DB CONNECTED`)
})();

(  () =>{
    console.log(`DB CONNECTED TWO`)
})();


(  (name) =>{
    console.log(`DB CONNECTED TWO ,${name}`)
})("hitesh")
