/**
 * Colombo, Sri Lanka Destination
 * 
 * Themes: religious-sites, traditional-culture, museums-history
 */

export default {
  name: "Colombo, Sri Lanka",
  flightTime: "4 hours",
  coordinates: { lat: 6.9271, lng: 79.8612 },
  image: "https://images.unsplash.com/photo-1559827260-dbea01e5e788?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  themes: ["religious-sites", "traditional-culture", "museums-history"],
  description: "Capitale vibrante avec architecture coloniale, temples et culture riche",
  activities: {
    "Culture & Musées": ["Temple Gangaramaya", "Musée National", "Architecture coloniale", "Temples bouddhistes"],
    "Gastronomie & Restaurants": ["Cuisine sri-lankaise", "Cuisine de rue", "Fruits de mer", "Currys traditionnels"],
    "Aventure & Sports": ["Tours de la ville", "Activités de plage", "Shopping", "Spectacles culturels"],
    "Shopping": ["Marché de Pettah", "Artisanat", "Pierres précieuses et bijoux", "Épices"]
  },
  itinerary: {
    day1: {
      morning: "Arrivée à l'aéroport de Colombo, enregistrement à l'hôtel, petit-déjeuner",
      afternoon: "Visite du Temple Gangaramaya, exploration du Marché de Pettah, déjeuner",
      evening: "Promenade d'architecture coloniale, dîner au restaurant gastronomique, Galle Face Green"
    },
    day2: {
      morning: "Petit-déjeuner, visite du Musée National, exploration de la zone du Fort",
      afternoon: "Déjeuner, visite de l'Independence Square, shopping à Odel ou Barefoot",
      evening: "Dîner sri-lankais traditionnel, spectacle de danse culturelle"
    },
    day3: {
      morning: "Petit-déjeuner, excursion d'une journée à Kandy (Temple de la Dent, Jardins Botaniques Royaux)",
      afternoon: "Déjeuner à Kandy, retour à Colombo, temps sur la plage",
      evening: "Dîner de fruits de mer, vie nocturne à Colombo"
    },
    day4: {
      morning: "Petit-déjeuner, shopping de dernière minute pour épices et artisanat",
      afternoon: "Enregistrement de départ, visite de la plage ou dernière exploration de la ville, transfert vers l'aéroport",
      evening: "Vol de retour vers Abu Dhabi"
    }
  }
}

