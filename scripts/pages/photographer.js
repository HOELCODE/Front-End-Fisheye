// fonction pour récupérer les datas
async function getPhotographers() {
    try {
        const response = await fetch('data/photographers.json');
        if (!response.ok) {
            throw new Error("Pas de réponse");
        }
        return await response.json();
    } catch (error) {
        console.error("Erreur lors du fetch", error);
    }
}

// fonction pour récupérer uniquement les medias
async function getMedia() {
    try {
        const response = await fetch('data/photographers.json');
        if (!response.ok) {
            throw new Error("Pas de réponse");
        }
        const data = await response.json();
        return data.media;  // Retourner uniquement la partie media
    } catch (error) {
        console.error("Erreur lors du fetch", error);
    }
}

//fonction pour afficher les éléments dans le dom 
async function createDomHeader(photographe) {
    //Récupérer les éléments du DOM
    const nameTitle = document.querySelector(".photograph-name");
    const localisation = document.querySelector(".photograph-localisation");
    const description = document.querySelector(".photograph-slogan");
    const photoPhotographe = document.querySelector(".image-photographe");

    //Associer les éléments
    nameTitle.textContent = photographe.name;
    localisation.textContent = `${photographe.city}, ${photographe.country}`;
    description.textContent = photographe.tagline;
    photoPhotographe.setAttribute("alt", `photo de ${photographe.name}`);
    photoPhotographe.setAttribute("src", `assets/photographes/photos-photographes/${photographe.portrait}`);
}

//Fonction pour afficher la galerie
async function createDomGalerie(photographe) {
    //Récupérer les éléments du DOM
    const nameTitle = document.querySelector(".photograph-name");
    const localisation = document.querySelector(".photograph-localisation");
    const description = document.querySelector(".photograph-slogan");
    const photoPhotographe = document.querySelector(".image-photographe");

    //Associer les éléments
    nameTitle.textContent = photographe.name;
    localisation.textContent = `${photographe.city}, ${photographe.country}`;
    description.textContent = photographe.tagline;
    photoPhotographe.setAttribute("alt", `photo de ${photographe.name}`);
    photoPhotographe.setAttribute("src", `assets/photographes/photos-photographes/${photographe.portrait}`);
}

//Fonction pour associer la bonne galerie en fonction de l'id du photographe
async function getGalerie() {
    const media = await getMedia();  // Tu récupères directement les médias
    
}

// fonction pour associer le photographe en fonction de l'id dans l'url 
async function getUrl() {
    const { photographers } = await getPhotographers();
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');

    photographers.forEach(element => {
        if (element.id === parseInt(id)) {
            createDomHeader(element);
        }
    });
}

//fonction pour lancer les différentes fonctions
async function init() {
    await getUrl();  // Assure que les fonctions asynchrones sont bien exécutées
    await getGalerie();
}

init();
