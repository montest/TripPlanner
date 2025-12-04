/**
 * Goa, India Destination
 * 
 * Themes: adventure-diving, romantic-getaway
 */

export default {
  name: "Goa, India",
  flightTime: "2.5 hours",
  coordinates: { lat: 15.2993, lng: 74.1240 },
  image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  themes: ["adventure-diving", "romantic-getaway"],
  description: "Plages tropicales, patrimoine portugais et culture vibrante",
  activities: {
    "Détente & Spa": ["Farniente sur la plage", "Spa ayurvédique", "Yoga sur la plage", "Observation du coucher du soleil"],
    "Aventure & Sports": ["Sports nautiques", "Observation des dauphins", "Parapente", "Beach-volley"],
    "Gastronomie & Restaurants": ["Cuisine goanaise", "Cabanes de plage", "Fruits de mer", "Plats d'influence portugaise"],
    "Culture & Musées": ["Églises de la vieille Goa", "Architecture portugaise", "Plantations d'épices"]
  },
  itinerary: {
    day1: {
      morning: "Arrivée à l'aéroport de Goa, transfert vers le resort de plage, enregistrement",
      afternoon: "Déjeuner de bienvenue, temps sur la plage à Calangute ou Baga Beach, exploration du resort",
      evening: "Coucher du soleil à Anjuna Beach, dîner dans une cabane de plage, visite du marché de nuit"
    },
    day2: {
      morning: "Petit-déjeuner, visite de la vieille Goa (Basilique du Bom Jesus, Cathédrale Se)",
      afternoon: "Déjeuner, visite de plantation d'épices, démonstration de cuisine goanaise traditionnelle",
      evening: "Retour à la plage, croisière au coucher du soleil, dîner au restaurant portugais"
    },
    day3: {
      morning: "Tour d'observation des dauphins tôt le matin, petit-déjeuner sur le bateau",
      afternoon: "Sports nautiques (parapente, jet ski), détente sur la plage, déjeuner",
      evening: "Séance spa ayurvédique, dîner en bord de plage avec musique live"
    },
    day4: {
      morning: "Dernier moment sur la plage, petit-déjeuner, shopping de souvenirs aux marchés locaux",
      afternoon: "Enregistrement de départ, visite du Fort Aguada, transfert vers l'aéroport",
      evening: "Vol de retour vers Abu Dhabi"
    }
  }
}

