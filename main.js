import './style.css';
import { searchfilm} from './search';

//import 'materialize-css/dist/css/materialize.min.css';
//import 'materialize-css/dist/js/materialize.min.js';


document.querySelector('#app').innerHTML = `

  <h1>CedFlix Prime+</h1>
      <section class="searchSection">
          <label for="search"></label>
          <input id="search" type="search" name="q" placeholder="Rechercher" />
      </section>


      <section class="boxFilm">
          <div class="cedFlix">
          </div>
      </section>
`
const search = document.querySelector('#search')
search.addEventListener('input', () => {
  let userSearch = search.value; // variable qui récupère la saisie utilisateur
  searchfilm(userSearch);
})

