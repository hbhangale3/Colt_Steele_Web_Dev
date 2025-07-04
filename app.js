console.log("Hello from my first Guessing game");

let range = Number(prompt("Please enter the range"));
let target = Math.floor(Math.random()*range);
while(true){
    let num = Number(prompt("Guess the number"));
    if(num<target){
        alert("too low");
    }else if(num>target){
        alert("too high");
    }else if(num===target){
        console.log(`You guessed it right, the correct number is ${target}`);
        break;
    }
}
