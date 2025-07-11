

const jButton = document.querySelector('#jokeButton');
const jList = document.querySelector('#jokes');

const loadStarWarsData = async (id)=>{
    try{
        const res = await axios.get(`https://swapi.tech/api/people/${id}`);
    console.log(res.data.result.properties); 
    }catch(e){
        console.log("error", e);
    }
    
}

loadStarWarsData(5);

const dadJoke = async()=>{
    try{
        const config = {headers:{ Accept: 'application/json'}}
        const res = await axios.get('https://icanhazdadjoke.com/', config);

        const li = document.createElement('LI');
        li.append(res.data.joke);
        jList.append(li);
        console.log(res.data);
    }catch(e){
        console.log("error in fetching jokes")
    }
}

jButton.addEventListener('click', function(){
    dadJoke();
})

