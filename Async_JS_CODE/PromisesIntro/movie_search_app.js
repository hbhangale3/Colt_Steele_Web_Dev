const form = document.querySelector('#form');
const sbutton = document.querySelector('#sButton');
const ip = document.querySelector('#ip');

sbutton.addEventListener('click', async function(e){
    //preventing default submission behavior
    e.preventDefault();
    //fetching data from the text field
    const data = ip.value;

    //sending a get query 
    //pass the stringQeury using the axios params feature.
    const config = {params:{q:data}}
    const res = await axios.get(`https://api.tvmaze.com/search/shows`,config);
    console.log(res.data);
    makeImages(res.data);
    ip.value='';
})

//function to create new image tags and append them to the body of the webpage.
const makeImages = (shows)=>{
    for(let images of shows){
        if(images.show.image){
            const img = document.createElement('IMG');
            img.src=images.show.image.medium;
            document.body.append(img);
        }
        
    }
    
}