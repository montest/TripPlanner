/**
 * Doha, Qatar Destination
 * 
 * Themes: modern-shopping, architecture-art, food-nightlife
 */

export default {
  name: "Doha, Qatar",
  flightTime: "1 hour",
  coordinates: { lat: 25.2854, lng: 51.5310 },
  image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  themes: ["modern-shopping", "architecture-art", "food-nightlife"],
  description: "Métropole moderne avec architecture futuriste, shopping de luxe et culture arabe authentique",
  activities: {
    "Culture & Musées": ["Musée d'Art Islamique", "Souq Waqif", "Katara Cultural Village", "Musée National du Qatar"],
    "Gastronomie & Restaurants": ["Cuisine qatarie", "Restaurants gastronomiques", "Cuisine internationale", "Cafés traditionnels"],
    "Shopping": ["The Pearl-Qatar", "Villaggio Mall", "Souq Waqif", "Boutiques de luxe"],
    "Vie Nocturne & Divertissement": ["Bars sur les toits", "Restaurants avec vue", "Croisières en dhow", "Spectacles culturels"]
  },
  itinerary: {
    day1: {
      morning: "Arrivée à l'aéroport de Doha, enregistrement à l'hôtel, petit-déjeuner",
      afternoon: "Visite du Musée d'Art Islamique, exploration de la Corniche, déjeuner",
      evening: "Exploration du Souq Waqif, dîner au restaurant traditionnel, promenade nocturne"
    },
    day2: {
      morning: "Petit-déjeuner, visite du Katara Cultural Village, exploration de l'architecture moderne",
      afternoon: "Déjeuner, shopping à The Pearl-Qatar ou Villaggio Mall",
      evening: "Croisière en dhow traditionnel au coucher du soleil, dîner au restaurant avec vue sur la baie"
    },
    day3: {
      morning: "Petit-déjeuner, visite du Musée National du Qatar, exploration de l'architecture futuriste",
      afternoon: "Déjeuner, visite du Souq Waqif pour shopping d'artisanat, café traditionnel",
      evening: "Dîner gastronomique, bar sur le toit avec vue panoramique, vie nocturne"
    },
    day4: {
      morning: "Petit-déjeuner, dernière visite ou shopping de souvenirs",
      afternoon: "Enregistrement de départ, transfert vers l'aéroport",
      evening: "Vol de retour vers Abu Dhabi"
    }
  }
}

