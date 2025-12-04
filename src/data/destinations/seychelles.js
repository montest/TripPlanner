/**
 * Seychelles Destination
 * 
 * Themes: island-hopping, romantic-getaway, adventure-diving
 */

export default {
  name: "Seychelles",
  flightTime: "4 hours",
  coordinates: { lat: -4.6796, lng: 55.4915 },
  image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73a6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  themes: ["island-hopping", "romantic-getaway", "adventure-diving"],
  description: "Plages immaculées, rochers de granit et forêts tropicales luxuriantes",
  activities: {
    "Détente & Spa": ["Détente sur la plage", "Soins spa", "Promenades dans la nature", "Pique-niques sur la plage"],
    "Aventure & Sports": ["Randonnée", "Snorkeling", "Kayak", "Exploration d'îles"],
    "Gastronomie & Restaurants": ["Cuisine créole", "Repas en bord de plage", "Fruits de mer frais", "Cocktails tropicaux"]
  },
  itinerary: {
    day1: {
      morning: "Arrivée à l'aéroport de Mahé, transfert vers le resort, enregistrement",
      afternoon: "Boisson de bienvenue, exploration de la plage, déjeuner au resort",
      evening: "Observation du coucher du soleil à la plage de Beau Vallon, dîner au restaurant de plage"
    },
    day2: {
      morning: "Petit-déjeuner, visite d'Anse Lazio (l'une des meilleures plages au monde), snorkeling",
      afternoon: "Déjeuner, promenade nature dans la Vallée de Mai (site UNESCO), dégustation de noix de coco",
      evening: "Retour au resort, séance spa, dîner romantique"
    },
    day3: {
      morning: "Petit-déjeuner tôt, tour de saut d'île en île vers Praslin et La Digue",
      afternoon: "Déjeuner sur La Digue, visite de la plage d'Anse Source d'Argent, séance photo",
      evening: "Retour au resort, croisière au coucher du soleil, dîner créole"
    },
    day4: {
      morning: "Dernier moment sur la plage, petit-déjeuner, shopping de souvenirs aux marchés locaux",
      afternoon: "Enregistrement de départ, transfert vers l'aéroport",
      evening: "Vol de retour vers Abu Dhabi"
    }
  }
}

