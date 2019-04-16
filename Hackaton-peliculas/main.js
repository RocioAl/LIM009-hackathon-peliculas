const content = document.getElementById('content');
const card =document.getElementById('card');
//const movies = document.getElementById('input-movie');
const btn = document.getElementById('btn');
const movies = ["tt0458339", "tt0231426", "tt0800080", "tt1228705", "tt0800369", "tt0848228", "tt1300854", "tt1981115", "tt1843866", "tt2015381", "tt2395427", "tt0478970", "tt3498820", "tt2250912", "tt1211837", "tt1825683", "tt3896198", "tt3501632", "tt4154756", "tt5095030", "tt4154664"];

const showMovie = movies.map((id) =>{
    fetch('http://www.omdbapi.com/?i='+ id +'&apikey=71fc669b')
    .then(res => res.json())
    .then(data =>{
        console.log(data);
        content.innerHTML += data.Title;
    }) 
})

btn.addEventListener("click", ()=>{
    if(movies.value === ""){
        return alert('Por favor ingresa el nombre de la pelicula');
    }else{
        return data();
    }
})