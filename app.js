console.log("Hello from my first script");

let userInput = prompt("Enter your prompt");

// if(parseInt(userInput)%2===0){
//     console.log("even");
// }

if(userInput=="stop"){
    console.log("red");
}else if(userInput=="slow"){
    console.log("yellow");
}else if(userInput=="go"){
    console.log("green");
}else{
    console.log("purple");
}