// dates

// let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let createNewDate = new Date(2023 , 0 , 23);
// console.log(createNewDate.toDateString());
// let createNewDate = new Date(2023 , 0 , 23 , 5 ,3);

let createNewDate = new Date("2023-01-23");
// console.log(createNewDate.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(createNewDate.getTime());
// console.log(Math.floor(Date.now()/1000)); // to convert in second

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

newDate.toLocaleString('default', {
    weekday: "long",
    
})