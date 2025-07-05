//function expression

const square = function(x){
    return x*x;
}

//higher order function
function callTwice(func){
    func();
    func();
}

function rollDie(){
    const roll = Math.floor(Math.random()*6)+1;
    console.log(roll);
}

//we are not passing rollDie() but rollDie as otherwise it would first get executed and then pass the random number generated, rather than the function itself.
callTwice(rollDie);