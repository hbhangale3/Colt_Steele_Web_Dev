console.log("Hello from my first script");

// let userInput = prompt("Enter your number");

// if(parseInt(userInput)%2===0){
//     console.log("even");
// }

// if(userInput=="stop"){
//     console.log("red");
// }else if(userInput=="slow"){
//     console.log("yellow");
// }else if(userInput=="go"){
//     console.log("green");
// }else{
//     console.log("purple");
// }

// for(let i=0;i<6;i++){
//     console.log("Da ba dee da ba daa");
// }
    

const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"]; //DONT TOUCH THIS LINE!

// WRITE YOUR LOOP BELOW THIS LINE:

for(let i=0;i<people.length;i++){
    let string = people[i].toUpperCase();
    console.log(string);
}