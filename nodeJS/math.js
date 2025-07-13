
const add = (x,y)=>{
    return x+y;
}

const square = (x) =>{
    return x**2;
}

const sub = (x,y)=>{
    return x-y;
}

// module.exports.add = add;
// module.exports.sub = sub;
// module.exports.square = square;

//else we cam also create an object and add all the function inside it
//and export the entire object at once.

const math_obj = {
    add:add,
    sub:sub,
    square:square

}

module.exports=math_obj;