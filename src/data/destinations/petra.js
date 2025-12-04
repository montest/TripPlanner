/**
 * Petra, Jordan Destination
 * 
 * Themes: ancient-wonders, traditional-culture
 */

export default {
  name: "Petra, Jordan",
  flightTime: "2.5 hours (to Amman)",
  coordinates: { lat: 30.3285, lng: 35.4444 },
  image: "https://images.unsplash.com/photo-1559827260-dbea01e5e788?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  themes: ["ancient-wonders", "traditional-culture"],
  description: "Ancienne ville nabatéenne sculptée dans des falaises rose-rouge, l'une des 7 Nouvelles Merveilles",
  activities: {
    "Culture & Musées": ["Site archéologique de Pétra", "Musée de Pétra", "Petite Pétra", "Culture bédouine"],
    "Aventure & Sports": ["Randonnée à Pétra", "Balades à dos de chameau", "Exploration du désert", "Escalade de montagne"],
    "Gastronomie & Restaurants": ["Cuisine jordanienne", "Repas bédouins", "Restaurants traditionnels", "Repas dans le désert"],
    "Shopping": ["Artisanat local", "Souvenirs de Pétra", "Bijoux bédouins", "Articles traditionnels"]
  },
  itinerary: {
    day1: {
      morning: "Arrivée à l'aéroport d'Amman, transfert vers Pétra (3 heures), enregistrement à l'hôtel",
      afternoon: "Déjeuner, première visite de Pétra (entrée par le Siq, vue du Trésor)",
      evening: "Dîner jordanien traditionnel, repos après le voyage"
    },
    day2: {
      morning: "Petit-déjeuner tôt, journée complète à Pétra (Trésor, Monastère, Tombes Royales)",
      afternoon: "Déjeuner à Pétra, poursuite de l'exploration, visite du Haut Lieu de Sacrifice",
      evening: "Expérience Pétra de Nuit (si disponible), dîner à l'hôtel"
    },
    day3: {
      morning: "Petit-déjeuner, visite de la Petite Pétra, exploration des sites archéologiques proches",
      afternoon: "Déjeuner, tour optionnel du désert de Wadi Rum ou randonnée dans les montagnes de Pétra",
      evening: "Dîner bédouin traditionnel, spectacle culturel, observation des étoiles"
    },
    day4: {
      morning: "Petit-déjeuner, dernière visite de Pétra ou shopping de souvenirs",
      afternoon: "Enregistrement de départ, transfert vers l'aéroport d'Amman (3 heures)",
      evening: "Vol de retour vers Abu Dhabi"
    }
  }
}

