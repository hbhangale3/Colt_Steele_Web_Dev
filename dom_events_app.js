const btn = document.querySelector('#v2');

btn.onclick=function(){
    console.log("You clicked me");
}

function scream(){
    console.log('AAAAAAAAHHHHHHHHH');
    console.log('leave me alone');
}

btn.onmouseenter = scream;