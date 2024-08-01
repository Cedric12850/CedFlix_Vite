export const result = (film) => {
    console.log(film);
    let cedFlix =document.querySelector('.cedFlix');
    cedFlix.innerHTML = `
    <div>
        
        <div>
        <h2>${film.show.name}</h2>
        <p>${film.show.summary}</p>
        </div>
    </div>
    `


}