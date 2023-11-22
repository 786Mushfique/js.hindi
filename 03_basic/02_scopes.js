// let a = 10;
// const b = 20;
// var c = 30;

// console.log(a);
// console.log(b);
// console.log(c);

// var c = 300

let a = 300;


if(true){

    let a = 10;
    const b = 20;
    // var c = 30;
    // console.log("INNER:" , a)

}

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(a);

function one(){
    const username = "Hitesh";

    function two(){
        const website = "utube";
        console.log(username)
    }

    // console.log(website);

    //  two()

}

one()


if(true){
    const username = "hitesh";

    if(username==="hitesh"){
        const website = " utube";
        // console.log(username + website)
    }
    // console.log(website)
}

// console.log(username)

// *************************************Intresting****************************

console.log(addone(5))
function addone(num){
    return num + 1
}

// addone(5)

addTwo(5)
const addTwo = function(num){
    return num + 2
}

// addTwo(5)