import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [

    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/Menu de l’application", "Menu de l’application", "/pages/Menu de l’application.html"),
    new Route("/ vue globale de tous les services", " vue globale de tous les services", "/pages/ vue globale de tous les services.html"),
    new Route("/vue globale des habitats", "vue globale des habitats", "/pages/vue globale des habitats.html"),
    new Route("/Avis", "Avis", "/pages/Avis.html"),
    new Route("/Espace Administrateur", "Espace Administrateur", "/pages/Espace Administrateur.html"),
    new Route("/Espace Employé", "Espace Employé", "/pages/home.Espace Employé"),
    new Route("/: Espace Vétérinaire", ": Espace Vétérinaire", "/pages/: Espace Vétérinaire.html"),
    new Route("/Connexion", "Connexion", "/pages/Connexion.html"),
    new Route("/Contact", "Contact", "/pages/Contact.html"),
    new Route("/Statistique sur la consultation des habitats", "Statistique sur la consultation des habitats", "/pages/Statistique sur la consultation des habitats.html"),

];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Zoo arcadia";