//first create a new object for XMLHttpRequest
const req = new XMLHttpRequest();

//first open the request where you select the method/action and URl
req.open("GET","https://swapi.tech/api/people/1");
//next send the req
req.send();

//we also need two function one to handle the success case and one for handling failure

//success
req.onload = function(){
    console.log("IT WORKED!!");
    const data = JSON.parse(this.responseText);
    console.log(data);
    console.log(data.result.properties.name,data.result.properties.eye_color);
}

req.onerror=function(){
    console.log("Error!!");
    console.log(this);
}