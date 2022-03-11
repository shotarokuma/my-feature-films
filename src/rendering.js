import axios from "axios";

const refreshAllFilms = () => {
  let container = document.getElementById('all-films');

  axios.get('/api/films').then(results => {
    container.innerHTML = null;
    results.data.forEach(film => {
      container.innerHTML += `
      <li>
       <h3>${film.title}</h3>
       <h4>Summary: </h4>
       <p>${film.summary}</p>
      </li>
     `
    })
  })
    .catch(error => console.log(error));
}


const selectFeature = (films) => {
  let container = document.getElementById('featured-film');
    const film = films[Math.floor(Math.random() * films.length)]; 
    container.innerHTML = `
     <h1>Featured: ${film.title}</h3>
     <p>${film.summary}</p>
   `
}

const refreshFeaturedFilm = () => {
  axios.get('/api/films')
    .then(results => {
      const films = results.data;
      selectFeature(films);
      setInterval(selectFeature, 3000,films); 
    })
    .catch(error => console.log(error));
}

export { refreshAllFilms, refreshFeaturedFilm };
