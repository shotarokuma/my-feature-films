import axios from "axios";
import { refreshAllFilms, refreshFeaturedFilm } from "./rendering.js";
import "./style.css";



refreshAllFilms();
refreshFeaturedFilm();

const formsubmit = event => {
  event.preventDefault();
  let newFilm = {
    title: document.getElementById('form-title').value, summary: document.getElementById('form-summary').value
  };
  axios.post('/api/films', newFilm)
  .then(() => {
    refreshAllFilms();
    refreshFeaturedFilm();
  })
  .catch(e => console.log(e));
}
let form = document.getElementById('form')
form.addEventListener('submit', formsubmit);




