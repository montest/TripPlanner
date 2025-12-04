/**
 * Amman, Jordan Destination
 * 
 * Themes: historic-cultural, ancient-wonders, museums-history
 */

export default {
  name: "Amman, Jordan",
  flightTime: "3 hours",
  coordinates: { lat: 31.9539, lng: 35.9106 },
  image: "https://images.unsplash.com/photo-1555993536-0e41aa90c699?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  themes: ["historic-cultural", "ancient-wonders", "museums-history"],
  description: "Capitale jordanienne avec citadelle antique, théâtre romain et culture arabe moderne",
  activities: {
    "Culture & Musées": ["Citadelle d'Amman", "Théâtre Romain", "Musée Archéologique", "Musée du Folklore"],
    "Gastronomie & Restaurants": ["Cuisine jordanienne", "Cuisine de rue", "Restaurants traditionnels", "Cafés locaux"],
    "Shopping": ["Souq de la Citadelle", "Rainbow Street", "Marchés locaux", "Artisanat jordanien"],
    "Aventure & Sports": ["Tours de la ville", "Visites historiques", "Exploration des ruines", "Promenades culturelles"]
  },
  itinerary: {
    day1: {
      morning: "Arrivée à l'aéroport d'Amman, enregistrement à l'hôtel, petit-déjeuner",
      afternoon: "Visite de la Citadelle d'Amman, exploration des ruines antiques, déjeuner",
      evening: "Visite du Théâtre Romain, dîner au restaurant traditionnel, promenade sur Rainbow Street"
    },
    day2: {
      morning: "Petit-déjeuner, visite du Musée Archéologique, exploration du Musée du Folklore",
      afternoon: "Déjeuner, shopping à Rainbow Street, visite des souks locaux",
      evening: "Dîner jordanien traditionnel, café local, expérience du narguilé"
    },
    day3: {
      morning: "Petit-déjeuner, excursion d'une journée à Jerash (ruines romaines), exploration du site archéologique",
      afternoon: "Déjeuner à Jerash, retour à Amman, temps libre",
      evening: "Dîner au restaurant avec vue sur la ville, vie nocturne à Amman"
    },
    day4: {
      morning: "Petit-déjeuner, dernière visite ou shopping de souvenirs",
      afternoon: "Enregistrement de départ, transfert vers l'aéroport",
      evening: "Vol de retour vers Abu Dhabi"
    }
  }
}

