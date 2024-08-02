
export const result = (film) => {
    console.log(film);
    let cedFlix =document.querySelector('.cedFlix');
    
    let filmCard = document.createElement('div');
    filmCard.className = 'cardFilm card  col s12 m4 offset-m1 l3 offset-l1 xl2 offset-xl1'
    filmCard.innerHTML = 
    /*`
        <div class="card-image waves-effect waves-block waves-light" id="image">
            <img class="activator" src= ${film.show.image.medium}></img>
        </div>
        <div class="card-content">
            <h2 class="card-title activator grey-text text-darken-4">${film.show.name}<i class="material-icons right">more_vert</i></h2>
        <div class="card-reveal">
            <h2 class=class="card-title grey-text text-darken-4">${film.show.name}<i class="material-icons right">close</i></h2>
            <p>${film.show.summary}</p>
        </div>
    
    `*/
    ` <div class="card">
    <div class="card-image waves-effect waves-block waves-light" id="image">
      <img class="activator" src=${film.show.image.medium}>
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">${film.show.name}<i class="material-icons right">more_vert</i></span>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">${film.show.name}<i class="material-icons right">close</i></span>
      <p>Here is some more information about this product that is only revealed once clicked on.</p>
  
    </div>
  </div>`
cedFlix.appendChild(filmCard);

}