
export const result = (film) => {
    console.log(film);
    let cedFlix =document.querySelector('.cedFlix');
    
    let filmCard = document.createElement('div');
    filmCard.className = 'cardFilm'
    filmCard.innerHTML = 
    `
        <div id="image">
            <img src= ${film.show.image.medium}></img>
        </div>
        <div >
            <h2 >${film.show.name}</h2>
            <span>${film.show.genre}</span>
            <p>${film.show.summary}</p>

        </div>
    
    `
    /*
    ` <div class="card">
    <div class="card-image waves-effect waves-block waves-light" id="image">
      <img class="activator" src=${film.show.image.medium}>
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">${film.show.name}<i class="material-icons right">more_vert</i></span>
    </div>
    <p></p>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">${film.show.name}<i class="material-icons right">close</i></span>
      <p>${film.show.summary}</p>
  
    </div>
  </div>`
  */
cedFlix.appendChild(filmCard);

}