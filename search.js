import {result} from "./result";

export const searchfilm = async (userSearch) => {
    const reponse = await fetch(`https://api.tvmaze.com/search/shows?q=` + userSearch);  //syntaxe qui permet d'utiliser la variable qui écupère la saisie utilisateur pour l'ajouter à la fin de lien de recherche 'q='
    const results = await reponse.json();
        results.map(film=>{
        result(film);
    })
}