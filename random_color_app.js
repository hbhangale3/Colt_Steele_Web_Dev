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

const btn2 = document.querySelector('#v2').addEventListener('click', function(e){
    console.log(e);
})

const ip = document.querySelector('input').addEventListener('keydown', function(e){
    console.log(e);
})

const form = document.querySelector('#shelterForm');
form.addEventListener('submit', function(e){
    console.log('submitted');
    e.preventDefault();
    console.log('submitted!!');
})