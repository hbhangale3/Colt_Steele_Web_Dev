const fakeRequest=(url)=>{
    return new Promise((resolve, reject)=>{
        const rand = Math.random();
        setTimeout(()=>{
            if(rand>0.7){
                resolve('Your fake request');
            }
            reject('error in connection');
        },1000)
    })
}

fakeRequest('/dogs')
.then((data)=>{
    console.log('your connection was succesfull');
    console.log(data);
})
.catch((err)=>{
    console.log('error');
    console.log(err);
})

const delayedColorChange=(color,delay)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            document.body.style.backgroundColor=color;
            resolve();
        },delay)
    })
}

delayedColorChange('violet',1000)
.then(()=>{
    return delayedColorChange('indigo',1000)
})
.then(()=>{
    return delayedColorChange('blue',1000)
} )
.then(()=>{
    return delayedColorChange('green',1000)
})
.then(()=>{
    return delayedColorChange('blue',1000)
})
.then(()=>{
    return delayedColorChange('yellow',1000)
})
.then(()=>{
    return delayedColorChange('orange',1000)
})
.then(()=>{
    return delayedColorChange('red',1000)
})

async function rainbow(){
    await delayedColorChange('red', 1000);
    await delayedColorChange('green', 1000);
    await delayedColorChange('orange', 1000);
    await delayedColorChange('blue', 1000);
    await delayedColorChange('yellow', 1000);
    await delayedColorChange('cyan', 1000);
}

rainbow().then(()=>{
    console.log('end of rainbow');
}).catch(()=>{
    console.log('error');
})