const btn = document.querySelector('#v2');

btn.onclick=function(){
    console.log("You clicked me");
}

function scream(){
    console.log('AAAAAAAAHHHHHHHHH');
    console.log('leave me alone');
}

btn.onmouseenter = scream;

const btn3 = document.querySelector('#v3');
btn3.addEventListener('click', function(){
    alert('Clicked');
})