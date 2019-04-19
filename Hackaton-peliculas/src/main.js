const content = document.getElementById('content');
const card =document.getElementById('card');
const btn = document.getElementById('btn');
const movies = ["tt0458339", "tt0231426", "tt0800080", "tt1228705", "tt0800369", "tt0848228", "tt1300854", "tt1981115", "tt1843866", "tt2015381", "tt2395427", "tt0478970", "tt3498820", "tt2250912", "tt1211837", "tt1825683", "tt3896198", "tt3501632", "tt4154756", "tt5095030", "tt4154664"];
const btnSearch = document.getElementById("search");



let showCard=(data)=>{
    return   `
      <div class="col-12 col-sm-6 col-md-3">
          <div class="card">
              <img class="card-img-top" src="${data.Poster}" alt="Card image cap">
              <div class="card-body">
              <h5 class="card-title">${data.Title}</h5>
              <p>Country : ${data.Country}</p>
              <p>Year : ${data.Year}  </p>
              <p>Director : ${data.Director}</p>
              <p>${data.Plot}</p>
              <p>IMDB : ${data.imdbRating}</p>
              </div>
          </div>
      </div> `
      }

const showMovie = movies.map((id) =>{
    fetch('https://www.omdbapi.com/?i='+ id +'&apikey=71fc669b')
    .then(res => res.json())
    .then(data =>{
        //console.log(data);
        content.innerHTML += showCard(data);
    });
});


//solo
const arrSolos= ["tt0231426", "tt1228705", "tt1300854", "tt0800080", "tt0800369", "tt1981115", "tt3501632", "tt0458339", "tt1843866", "tt3498820", "tt2250912", "tt1211837", "tt1825683", "tt0478970", "tt4154664"];

const showSolos = arrSolos.map((id) => {
   fetch('https://www.omdbapi.com/?i='+ id +'&apikey=71fc669b')
     .then(res => res.json())
     .then(data => {
        document.getElementById('allMovies').innerHTML += showCard(data);
    
      })
   })

const arrGuardianes =["tt2015381", "tt3896198"];
const showGuardianes = arrGuardianes.map((id) => {
    fetch('https://www.omdbapi.com/?i='+ id +'&apikey=71fc669b')
      .then(res => res.json())
      .then(data => {
         document.getElementById('allMovies2').innerHTML += showCard(data);
     
       })
    })

const arrAvengers = ["tt0848228", "tt2395427", "tt4154756", "tt3498820"];
const showAvengers = arrAvengers.map((id) => {
    fetch('https://www.omdbapi.com/?i='+ id +'&apikey=71fc669b')
      .then(res => res.json())
      .then(data => {
         document.getElementById('allMovies3').innerHTML += showCard(data);
     
       })
    })
// btn.addEventListener("click", ()=>{
//     if(movies.value === ""){
//         return alert('Por favor ingresa el nombre de la pelicula');
//     }else{
//         return data();
//     }
// })

//   const filterByYear = (selectYear) => {
//     fetch('http://www.omdbapi.com/?i='+ id +'&apikey=71fc669b')
//     .then(res => res.json())
//     .then(data =>{ 
//         dataFilter = data.filter(dat => dat.Year === selectYear);
//         content.innerHTML += showCard(dataFilter);
//     })
//   };


  btnSearch.addEventListener('click', () => {
    let selectYear = document.getElementById('selected_year').value;
    content.innerHTML = "";
    const filter = movies.map((id) =>{
        fetch('https://www.omdbapi.com/?i='+ id +'&apikey=71fc669b')
        .then(res => res.json())
        .then(data =>{
            if (data.Year === selectYear){
                content.innerHTML += showCard(data);
            }
        })
    });
});



