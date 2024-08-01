export const result = (film) => {
    console.log(film);
    let cedFlix =document.querySelector('.cedFlix');
    cedFlix.innerHTML = `
    <div>
        <img src="${film.show.image.original}" alt="Affiche du film></img>
        <div>
        <h2>${film.show.name}</h2>
        <p>${film.show.summary}</p>
        </div>
    </div>
    `


}