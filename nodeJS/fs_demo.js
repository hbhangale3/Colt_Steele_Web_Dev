//unlke global, fs does not have global scope and needs to be 
//included everytime we need it

const fs = require('fs');

//async versiom
//pass the folder which needs to be created, callback function which will get executed
//once task is completed.
fs.mkdir('test_folder', {recursive: true}, (err)=>{
    console.log("inside callback");
    if(err) throw err;
})

console.log("after fs mkdir");

//sync version
fs.mkdirSync('test_folder_2');
console.log('after fs sync mkdir');