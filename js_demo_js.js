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

//higher order function that returns a function

function mystryFunction(){
    let rand = Math.random();
    if(rand>0.5){
        return function(){
            console.log('Congratulations, you won a million dollars');
            console.log('Share your bank details immediately.')
        }
    }else{
        return function(){
            console.log('Your computer has been infected by a virus');
            console.log('Do not close the window');
        }
    }
}

//defining own methods.

const myMath = {
    PI: 3.14159,
    square: function(num){
        return num*num;
    },
    cube: function(num){
        return num**3;
    }
}

//understanding the this keyword.
const person = {
    first: 'shivangi',
    last: 'goyal',
    fullname: function(){
        console.log(this);
        return `${this.first} & ${this.last}`
    }
}

const person2 = person.fullname;

//forEach
const arr = [1,2,3,4,5,6,7,8,9];

//the standard pattern is to write the function definition inline
arr.forEach(function(el){
    console.log(el*el);
})


//Map
const arr2 = [1,2,3,4,5,6,7,8,9];

const doubles = arr2.map(function(el){
    return el*2;
})

