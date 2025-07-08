const btn = document.querySelector('button');
const h1 = document.querySelector('h1');

btn.addEventListener('click', function(){
    const newColor = makeRandColor();
    document.body.style.backgroundColor= newColor;
    h1.innerText=newColor;
})

function makeRandColor(){
    const r = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);
    
    return `rgb(${r},${g},${b})`
}

//event object and keyboard event object
const btn2 = document.querySelector('#v2').addEventListener('click', function(e){
    console.log(e);
})

const ip = document.querySelector('input').addEventListener('keydown', function(e){
    console.log(e);
})


//prevent default or change normal form behavior
const form = document.querySelector('#shelterForm');
const input = document.querySelector('#ip');

const ul = document.querySelector('#op');

form.addEventListener('submit', function(e){
    //console.log('submitted');
    e.preventDefault();
    const val = input.value;
    const li = document.createElement('li');
    li.innerText=val;
    ul.append(li);
    console.log('submitted!!');
})

ul.addEventListener('click', function(e){
    if(e.target.nodeName==='LI'){
        e.target.remove();
    }
})

//change and input type

const ip2 = document.querySelector('#ip2');

ip2.addEventListener('change', function(e){
    console.log('You left the input.');
})

const ip3 = document.querySelector('#ip3');
const h2 = document.querySelector('#h2');
ip3.addEventListener('input', function(e){
    h2.innerText=`Hello, welcome ${ip3.value}`;
})

