/**
 * Cairo, Egypt Destination
 * 
 * Themes: ancient-wonders, museums-history, religious-sites
 */

export default {
  name: "Cairo, Egypt",
  flightTime: "3.5 hours",
  coordinates: { lat: 30.0444, lng: 31.2357 },
  image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73a6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  themes: ["ancient-wonders", "museums-history", "religious-sites"],
  description: "Merveilles antiques, pyramides et riche histoire égyptienne",
  activities: {
    "Culture & Musées": ["Pyramides de Gizeh", "Musée Égyptien", "Khan el-Khalili", "Le Caire Islamique"],
    "Gastronomie & Restaurants": ["Cuisine égyptienne", "Restaurants traditionnels", "Cuisine de rue", "Repas sur le Nil"],
    "Aventure & Sports": ["Balades à dos de chameau", "Croisières sur le Nil", "Tours du désert", "Exploration des pyramides"],
    "Shopping": ["Bazar Khan el-Khalili", "Boutiques de papyrus", "Marchés d'épices", "Artisanat traditionnel"]
  },
  itinerary: {
    day1: {
      morning: "Arrivée à l'aéroport du Caire, enregistrement à l'hôtel, petit-déjeuner",
      afternoon: "Visite des Pyramides de Gizeh et du Sphinx, balade à dos de chameau, déjeuner",
      evening: "Spectacle Son et Lumière aux pyramides, dîner égyptien traditionnel"
    },
    day2: {
      morning: "Petit-déjeuner, visite du Musée Égyptien (trésors de Toutankhamon), exploration des expositions",
      afternoon: "Déjeuner, visite du bazar Khan el-Khalili, shopping de souvenirs",
      evening: "Croisière-dîner sur le Nil avec divertissement traditionnel, balade en felouque"
    },
    day3: {
      morning: "Petit-déjeuner, visite du Caire Islamique (Mosquée Al-Azhar, Rue Al-Muizz)",
      afternoon: "Déjeuner, visite du Caire Copte (Église Suspendue, Musée Copte)",
      evening: "Dîner égyptien traditionnel, visite d'un café local, expérience du narguilé"
    },
    day4: {
      morning: "Petit-déjeuner, visite optionnelle de Saqqarah ou Memphis, shopping de dernière minute",
      afternoon: "Enregistrement de départ, visite de la Citadelle de Saladin, transfert vers l'aéroport",
      evening: "Vol de retour vers Abu Dhabi"
    }
  }
}

