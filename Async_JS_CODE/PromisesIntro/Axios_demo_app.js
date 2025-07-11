
const loadStarWarsData = async (id)=>{
    try{
        const res = await axios.get(`https://swapi.tech/api/people/${id}`);
    console.log(res.data.result.properties); 
    }catch(e){
        console.log("error", e);
    }
    
}

loadStarWarsData(5);