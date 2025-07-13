const fs = require('fs');

const folderName = process.argv[2];
//sync version to create folder first then files.
fs.mkdirSync(folderName);
console.log("folder created");

//creating files using writeFileSync
try{
    fs.writeFileSync(`${folderName}/index.html`,'');
    fs.writeFileSync(`${folderName}/app.js`,'');
    fs.writeFileSync(`${folderName}/style.css`,'');
    console.log("files created inside the requested folder");
}catch(e){
    console.log("Something went wrong!!!");
    console.log(e);
}