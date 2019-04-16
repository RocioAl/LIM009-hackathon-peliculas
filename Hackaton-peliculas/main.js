// const content = document.getElementById('content');
// const card =document.getElementById('card');
// //const movies = document.getElementById('input-movie');
// const btn = document.getElementById('btn');
// const movies = ["tt0458339", "tt0231426", "tt0800080", "tt1228705", "tt0800369", "tt0848228", "tt1300854", "tt1981115", "tt1843866", "tt2015381", "tt2395427", "tt0478970", "tt3498820", "tt2250912", "tt1211837", "tt1825683", "tt3896198", "tt3501632", "tt4154756", "tt5095030", "tt4154664"];

// const showMovie = movies.map((id) =>{
//     fetch('http://www.omdbapi.com/?i='+ id +'&apikey=71fc669b')
//     .then(res => res.json())
//     .then(data =>{
//         console.log(data);
//         content.innerHTML += data.Title;
//     }) 
// })

// btn.addEventListener("click", ()=>{
//     if(movies.value === ""){
//         return alert('Por favor ingresa el nombre de la pelicula');
//     }else{
//         return data();
//     }
// })
// parte 2
//carrusel de imágenes
window.onload = function () {
    // Variables
    const IMAGENES = [
        'img/1.jpg',
        'img/2.jpg',
        'img/3.jpg',
        'img/4.jpg',


    ];
    const TIEMPO_INTERVALO_MILESIMAS_SEG = 1000;
    let posicionActual = 0;
    let $botonRetroceder = document.querySelector('#retroceder');
    let $botonAvanzar = document.querySelector('#avanzar');
    let $imagen = document.querySelector('#imagen');
    let $botonPlay = document.querySelector('#play');
    let $botonStop = document.querySelector('#stop');
    let intervalo;

    // Funciones

    /**
     * Funcion que cambia la foto en la siguiente posicion
     */
    function pasarFoto() {
        if(posicionActual >= IMAGENES.length - 1) {
            posicionActual = 0;
        } else {
            posicionActual++;
        }
        renderizarImagen();
    }

    /**
     * Funcion que cambia la foto en la anterior posicion
     */
    function retrocederFoto() {
        if(posicionActual <= 0) {
            posicionActual = IMAGENES.length - 1;
        } else {
            posicionActual--;
        }
        renderizarImagen();
    }

    /**
     * Funcion que actualiza la imagen de imagen dependiendo de posicionActual
     */
    function renderizarImagen () {
        $imagen.style.backgroundImage = `url(${IMAGENES[posicionActual]})`;
    }

    /**
     * Activa el autoplay de la imagen
     */
    function playIntervalo() {
        intervalo = setInterval(pasarFoto, TIEMPO_INTERVALO_MILESIMAS_SEG);
        // Desactivamos los botones de control
        $botonAvanzar.setAttribute('disabled', true);
        $botonRetroceder.setAttribute('disabled', true);
        $botonPlay.setAttribute('disabled', true);
        $botonStop.removeAttribute('disabled');

    }

    /**
     * Para el autoplay de la imagen
     */
    function stopIntervalo() {
        clearInterval(intervalo);
        // Activamos los botones de control
        $botonAvanzar.removeAttribute('disabled');
        $botonRetroceder.removeAttribute('disabled');
        $botonPlay.removeAttribute('disabled');
        $botonStop.setAttribute('disabled', true);
    }

    // Eventos
    $botonAvanzar.addEventListener('click', pasarFoto);
    $botonRetroceder.addEventListener('click', retrocederFoto);
    $botonPlay.addEventListener('click', playIntervalo);
    $botonStop.addEventListener('click', stopIntervalo);
    // Iniciar
    renderizarImagen();
}





// Peliculas
let adventureMovie1 = document.getElementById('movie1');
let adventureMovie2=document.getElementById('movie2');
let adventureMovie3=document.getElementById('movie3');
let adventureMovie4 = document.getElementById('movie4');
let adventureMovie5 = document.getElementById('movie5');
let adventureMovie6= document.getElementById('movie6');
let adventureMovie7= document.getElementById('movie7');
let adventureMovie8 = document.getElementById('movie8');
let adventureMovie9 = document.getElementById('movie9');
let adventureMovie10 = document.getElementById('movie10');
let adventureMovie11 = document.getElementById('movie11');

// interacciones
adventureMovie1.addEventListener('click', () => {
marvelData1();
document.getElementById('container-movie').innerHTML = '';
document.getElementById('container-movie').innerHTML = adventureMovie1;
});
adventureMovie2.addEventListener('click', () => {
marvelData2();
document.getElementById('container-movie').innerHTML = '';
document.getElementById('container-movie').innerHTML = adventureMovie2;
});
adventureMovie3.addEventListener('click', () => {
marvelData3();
document.getElementById('container-movie').innerHTML = '';
document.getElementById('container-movie').innerHTML = adventureMovie3;
});
adventureMovie4.addEventListener('click', () => {
marvelData4();
document.getElementById('container-movie').innerHTML = '';
document.getElementById('container-movie').innerHTML = adventureMovie4;
});
adventureMovie5.addEventListener('click', () => {
mar
velData5();
document.getElementById('container-movie').innerHTML = '';
document.getElementById('container-movie').innerHTML = adventureMovie5;
});
adventureMovie6.addEventListener('click', () => {
marvelData6();
document.getElementById('container-movie').innerHTML = '';
document.getElementById('container-movie').innerHTML = adventureMovie6;
});
adventureMovie7.addEventListener('click', () => {
marvelData7();
document.getElementById('container-movie').innerHTML = '';
document.getElementById('container-movie').innerHTML = adventureMovie7;
});
adventureMovie8.addEventListener('click', () => {
marvelData8();
document.getElementById('container-movie').innerHTML = '';
document.getElementById('container-movie').innerHTML = adventureMovie8;
});
adventureMovie9.addEventListener('click', () => {
marvelData9();
document.getElementById('container-movie').innerHTML = '';
document.getElementById('container-movie').innerHTML = adventureMovie9;
});
adventureMovie10.addEventListener('click', () => {
marvelData10();
document.getElementById('container-movie').innerHTML = '';
document.getElementById('container-movie').innerHTML = adventureMovie10;
});
adventureMovie11.addEventListener('click', () => {
marvelData11();
document.getElementById('init').innerHTML = '';
document.getElementById('init').innerHTML = adventureMovie11;
});

//json-fetch
const movies1= ['tt0371746','tt0800080']
const movies2=['tt1228705']
const movies3=['tt0800369','tt0458339']
const movies4= ['tt0848228']
const movies5= ['tt1300854','tt1981115']
const movies6= ['tt1843866','tt2015381']
const movies7= ['tt2395427','tt0478970']
const movies8= ['tt3498820','tt1211837']
const movies9= ['tt3896198','tt2250912','tt3501632']
const movies10= ['tt1825683','tt4154756','tt5095030']
const movies11= ['tt4154664']

const marvelData1= () =>{
  for(let i=0; i<movies1.length;i++){
  fetch('https://www.omdbapi.com/?i=' + movies1[i] + '&apikey=fe2ab715')
  .then (data => data.json())
  .then (data => {

     document.getElementById('container-movie').innerHTML += `
  <img src="${data.Poster}" id="cardposter" class="card-img-top" alt="..." style="width:150px;"">
  <h5 >${data.Title}</h5>
  <p >Calificación: ${data.imdbRating}</p>
  <p >Género: ${data.Genre}</p>`
  })
  }
}

const marvelData2= () =>{
  for(let i=0; i<movies2.length;i++){
  fetch('https://www.omdbapi.com/?i=' + movies2[i] + '&apikey=fe2ab715')
  .then (data => data.json())
  .then (data => {
  document.getElementById('container-movie').innerHTML +=`
  <img src="${data.Poster}" class="card-img-top" alt="..." style="width:150px;"">
  <h5>${data.Title}</h5>
  <p>Calificación: ${data.imdbRating}</p>
  <p >Género: ${data.Genre}</p>  `
  })
  }
}
const marvelData3= () =>{
  for(let i=0; i<cmovies3.length;i++){
  fetch('https://www.omdbapi.com/?i=' + movies3[i] + '&apikey=fe2ab715')
  .then (data => data.json())
  .then (data => {
  document.getElementById('container-movie').innerHTML +=`
  <img src="${data.Poster}" class="card-img-top" alt="..." style="width:150px;"">
  <h5 >${data.Title}</h5>
  <p >Calificación: ${data.imdbRating}</p>
  <p >Género: ${data.Genre}</p>`
  })
  }
}
const marvelData4= () =>{
  for(let i=0; i<movies4.length;i++){
  fetch('https://www.omdbapi.com/?i=' + movies4[i] + '&apikey=fe2ab715')
  .then (data => data.json())
  .then (data => {
   document.getElementById('container-movie').innerHTML +=`
   <img src="${data.Poster}" id="cardposter" class="card-img-top" alt="..." style="width:150px;"">
   <h5 >${data.Title}</h5>
   <p >Calificación: ${data.imdbRating}</p>
   <p >Género: ${data.Genre}</p>  `
  })
  }
}
const marvelData5= () =>{
  for(let i=0; i<movies5.length;i++){
  fetch('https://www.omdbapi.com/?i=' + movies5[i] + '&apikey=fe2ab715')
  .then (data => data.json())
  .then (data => {
     document.getElementById('container-movie').innerHTML += `
     <img src="${data.Poster}" id="cardposter" class="card-img-top" alt="..." style="width:150px;"">
     <h5 >${data.Title}</h5>
     <p >Calificación: ${data.imdbRating}</p>
    <p >Género: ${data.Genre}</p>`
  })
  }
}
const marvelData6= () =>{
  for(let i=0; i<movies6.length;i++){
  fetch('https://www.omdbapi.com/?i=' + movies6[i] + '&apikey=fe2ab715')
  .then (data => data.json())
  .then (data => {
     document.getElementById('container-movie').innerHTML += `
     <img src="${data.Poster}" id="cardposter" class="card-img-top" alt="..." style="width:150px;"">
     <h5 >${data.Title}</h5>
     <p >Calificación: ${data.imdbRating}</p>
     <p >Género: ${data.Genre}</p>`
  })
  }
}
const marvelData7= () =>{
  for(let i=0; i<movies7.length;i++){
  fetch('https://www.omdbapi.com/?i=' + movies7[i] + '&apikey=fe2ab715')
  .then (data => data.json())
  .then (data => {
     document.getElementById('container-movie').innerHTML += `
     <img src="${data.Poster}" id="cardposter" class="card-img-top" alt="..." style="width:150px;"">
     <h5>${data.Title}</h5>
     <p>Calificación: ${data.imdbRating}</p>
     <p>Género: ${data.Genre}</p>  `
  })
  }
}
const marvelData8= () =>{
  for(let i=0; i<movies8.length;i++){
  fetch('https://www.omdbapi.com/?i=' + movies8[i] + '&apikey=fe2ab715')
  .then (data => data.json())
  .then (data => {
     document.getElementById('container-movie').innerHTML += `
     <img src="${data.Poster}" id="cardposter" class="card-img-top" alt="..." style="width:150px;"">
     <h5>${data.Title}</h5>
     <p>Calificación: ${data.imdbRating}</p>
     <p>Género: ${data.Genre}</p>  `
  })
  }
}
const marvelData9= () =>{
  for(let i=0; i<movies9.length;i++){
  fetch('https://www.omdbapi.com/?i=' + movies9[i] + '&apikey=fe2ab715')
  .then (data => data.json())
  .then (data => {
     document.getElementById('container-movie').innerHTML += `
     <img src="${data.Poster}" id="cardposter" class="card-img-top" alt="..." style="width:150px;"">
     <h5>${data.Title}</h5>
     <p>Calificación: ${data.imdbRating}</p>
     <p>Género: ${data.Genre}</p>  `
  })
  }
}
const marvelData10= () =>{
  for(let i=0; i<movies10.length;i++){
  fetch('https://www.omdbapi.com/?i=' + movies10[i] + '&apikey=fe2ab715')
  .then (data => data.json())
  .then (data => {
     document.getElementById('container-movie').innerHTML += `
<img src="${data.Poster}" id="cardposter" class="card-img-top" alt="..." style="width:150px;"">

  <h5 >${data.Title}</h5>
  <p >Calificación: ${data.imdbRating}</p>
  <p >Género: ${data.Genre}</p>

`
  })
  }
}
const marvelData11= () =>{
  for(let i=0; i<movies11.length;i++){
  fetch('https://www.omdbapi.com/?i=' + movies11[i] + '&apikey=fe2ab715')
  .then (data => data.json())
  .then (data => {

     document.getElementById('container-movie').innerHTML +=
     `
<img src="${data.Poster}" id="cardposter" class="card-img-top" alt="..." style="width:150px;"">

  <h5 >${data.Title}</h5>
  <p >Calificación: ${data.imdbRating}</p>
  <p >Género: ${data.Genre}</p>

`
  })
  }
}

// Series
// dom
let adventureSerie1 = document.getElementById('seriesScreen1');
let adventureSerie2 = document.getElementById('seriesScreen2');
let adventureSerie3= document.getElementById('seriesScreen3');

// interacciones
    adventureSerie1.addEventListener('click', () => {
      serieData1();
      document.getElementById('container-serie').innerHTML = '';
      document.getElementById('container-serie').innerHTML =   serieScreen1;

        });
    adventureSerie2.addEventListener('click', () => {
      serieData2();
      document.getElementById('container-serie').innerHTML = '';
      document.getElementById('container-serie').innerHTML = serieScreen2;

        });
    adventureSerie3.addEventListener('click', () => {
      serieData3();
      document.getElementById('container-serie').innerHTML = '';
      document.getElementById('container-serie').innerHTML = serieScreen3;

        });

//json-fetch-serieScreen1

    const serie1= ['tt2364582']
    const serie2= ['tt3067038','tt3322312','tt2357547']
    const serie3= ['tt5675620','tt3322314']

    const serieData1= () =>{
        for(let i=0; i<serie1.length;i++){
        fetch('https://www.omdbapi.com/?i=' + serie1[i] + '&apikey=fe2ab715')
        .then (data => data.json())
        .then (data => {
           document.getElementById('container-serie').innerHTML +=`
           <img src="${data.Poster}" id="cardposter" class="card-img-top" alt="..." style="width:150px;"">
           <h5>${data.Title}</h5>
           <p>Calificación: ${data.imdbRating}</p>
           <p>Género: ${data.Genre}</p>`
        })
        }
    }
    const serieData2= () =>{
        for(let i=0; i<serie2.length;i++){
        fetch('https://www.omdbapi.com/?i=' + serie2[i] + '&apikey=fe2ab715')
        .then (data => data.json())
        .then (data => {
           document.getElementById('container-serie').innerHTML += `
           <img src="${data.Poster}" id="cardposter" class="card-img-top" alt="..." style="width:150px;"">
           <h5>${data.Title}</h5>
           <p>Calificación: ${data.imdbRating}</p>
           <p>Genre: ${data.Genre}</p>  `
        })
        }
    }
    const serieData3= () =>{
        for(let i=0; i<serie3.length;i++){
        fetch('https://www.omdbapi.com/?i=' + serie3[i] + '&apikey=fe2ab715')
        .then (data => data.json())
        .then (data => {
           document.getElementById('container-serie').innerHTML += `
          <img src="${data.Poster}" id="cardposter" class="card-img-top" alt="..." style="width:150px;"">
          <h5>${data.Title}</h5>
          <p>Calificación: ${data.imdbRating}</p>
          <p>Género: ${data.Genre}</p>  `
        })
        }
    }
