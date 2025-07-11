fetch("https://swapi.tech/api/people/1")
.then((res)=>{
    console.log("Resolved", res);
    return res.json();
})
.then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log("error", err);
})

const loadStarWarsData = async () =>{
    try{
        const res = await fetch("https://swapi.tech/api/people/3");
    const data = await res.json();
    console.log(data);
    }catch(e){
        console.log("error", e);
    }
    
}

loadStarWarsData();