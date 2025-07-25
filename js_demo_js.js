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

//Arrow function
const add = (x,y) =>{
    return x+y;
}

const double = (x) =>{
    return x*2;
}

const rollDies = () =>{
    return Math.floor(Math.random()*6)+1;
}

//setTimeout

// console.log("Hello...")
// setTimeout(()=>{
//     console.log("...Are you still there?")
// },3000);

// //setInterval
// const id=setInterval(()=>{
//     console.log(Math.random())
// }, 2000);


//filter

const odd = arr2.filter(n=>{
    return n%2===1; //if n%2=1 then add n into the new array.
})


//some & every

const exams=[80,90,72,85,99,79,91,82,83,77];

let results1 = exams.every(scores=>{
    return scores>=75;
})

let result2 = exams.some(scores=>{
    return scores>=75;
})

//reduce

let maxMarks = exams.reduce((max,curr)=>{
    if(curr>max){
        return curr;
    }else
    return max;
})

let sumMarks = exams.reduce((total,curr)=>{
    return total+curr; 
})

let minMarks = exams.reduce((min,curr)=>{
    if(curr<min){
        return curr;
    }else
    return min;
})


//default params
function rollDie2(numSide=6){
    return Math.floor(Math.random()*numSide);
    //if we dont pass any number, it will assume 6 as argument.
}

function greet(person,msg='Hey There'){
    console.log(`${msg}, ${person}`);
}

//rest

function customSum(...nums){
    return nums.reduce((total,el)=> total+el);
}
