function photographerTemplate(data) {
    const { name, portrait, city, country, tagline, price, id } = data;

    const picture = `assets/photographes/photos-photographes/${portrait}`;

    function getUserCardDOM() {
        //Créer les éléments
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        const h2 = document.createElement( 'h2' );
        const localisation = document.createElement('h3');
        const description = document.createElement('p');
        const prix = document.createElement('span');
        const div = document.createElement('div');
        const a = document.createElement('a');
        //Ajouter des attributs
        img.setAttribute("alt", `photo de ${name}`);
        //Associer des éléments
        h2.textContent = name;
        img.setAttribute("src", picture);
        a.setAttribute("aria-label", name);
        a.setAttribute("href", `photographer.html?id=${id}`)
        localisation.textContent = `${city}, ${country}`;
        description.textContent = tagline;
        prix.textContent = `${price}€/jour`;
        //Ajouter les nouveaux éléments dans article
        a.appendChild(img);
        a.appendChild(h2);
        div.appendChild(localisation);
        div.appendChild(description);
        div.appendChild(prix);
        article.appendChild(a);
        article.appendChild(div);
        //Retourner article pour l'afficher
        return (article);
    }
    return { name, picture, getUserCardDOM }
}