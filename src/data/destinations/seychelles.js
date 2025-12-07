/**
 * Seychelles Destination
 * 
 * Themes: chiller-sur-une-ile, repos-en-bord-de-plage
 */

export default {
  name: "Seychelles",
  flightTime: "4 hours",
  coordinates: { lat: -4.6796, lng: 55.4915 },
  image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73a6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  themes: ["chiller-sur-une-ile", "repos-en-bord-de-plage"],
  description: "Plages immaculées, rochers de granit et forêts tropicales luxuriantes",
  activities: {
    "Détente & Spa": ["Détente sur la plage", "Soins spa", "Promenades dans la nature", "Pique-niques sur la plage"],
    "Aventure & Sports": ["Randonnée", "Snorkeling", "Kayak", "Exploration d'îles"],
    "Gastronomie & Restaurants": ["Cuisine créole", "Repas en bord de plage", "Fruits de mer frais", "Cocktails tropicaux"]
  },
  itinerary: {
    day1: {
      morning: {
        text: "Arrivée à l'aéroport de Mahé, transfert vers le resort, enregistrement",
        image: ""
      },
      afternoon: {
        text: "Boisson de bienvenue, exploration de la plage, déjeuner au resort",
        image: ""
      },
      evening: {
        text: "Observation du coucher du soleil à la plage de Beau Vallon, dîner au restaurant de plage",
        image: ""
      }
    },
    day2: {
      morning: {
        text: "Petit-déjeuner, visite d'Anse Lazio (l'une des meilleures plages au monde), snorkeling",
        image: ""
      },
      afternoon: {
        text: "Déjeuner, promenade nature dans la Vallée de Mai (site UNESCO), dégustation de noix de coco",
        image: ""
      },
      evening: {
        text: "Retour au resort, séance spa, dîner romantique",
        image: ""
      }
    },
    day3: {
      morning: {
        text: "Petit-déjeuner tôt, tour de saut d'île en île vers Praslin et La Digue",
        image: ""
      },
      afternoon: {
        text: "Déjeuner sur La Digue, visite de la plage d'Anse Source d'Argent, séance photo",
        image: ""
      },
      evening: {
        text: "Retour au resort, croisière au coucher du soleil, dîner créole",
        image: ""
      }
    },
    day4: {
      morning: {
        text: "Dernier moment sur la plage, petit-déjeuner, shopping de souvenirs aux marchés locaux",
        image: ""
      },
      afternoon: {
        text: "Vol de retour vers Abu Dhabi",
        image: "https://cdn.prod.website-files.com/65f8a2608247a99bd7aaba13/683ef923c63703391cf8d18e_Abu%20dhabi%20airport%20drop%20off.jpg"
      },
      evening: {
        text: "Dodo dans notre lit",
        image: ""
      }
    }
  }
}

