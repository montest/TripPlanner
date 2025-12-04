/**
 * Riyadh, Saudi Arabia Destination
 * 
 * Themes: historic-cultural, modern-shopping, architecture-art
 */

export default {
  name: "Riyadh, Saudi Arabia",
  flightTime: "1.5 hours",
  coordinates: { lat: 24.7136, lng: 46.6753 },
  image: "https://images.unsplash.com/photo-1605540436563-5bca919ae766?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  themes: ["historic-cultural", "modern-shopping", "architecture-art"],
  description: "Capitale moderne avec patrimoine historique, architecture contemporaine et culture saoudienne authentique",
  activities: {
    "Culture & Musées": ["Fort de Masmak", "Musée National d'Arabie Saoudite", "Diriyah (At-Turaif)", "Palais Murabba"],
    "Gastronomie & Restaurants": ["Cuisine saoudienne", "Restaurants traditionnels", "Cuisine internationale", "Cafés locaux"],
    "Shopping": ["Kingdom Centre", "Al Faisaliah Mall", "Souq Al Zal", "Boutiques de luxe"],
    "Architecture & Art": ["Kingdom Tower", "Al Faisaliah Tower", "Diriyah", "Musée d'Art Contemporain"]
  },
  itinerary: {
    day1: {
      morning: "Arrivée à l'aéroport de Riyadh, enregistrement à l'hôtel, petit-déjeuner",
      afternoon: "Visite du Fort de Masmak, exploration du quartier historique, déjeuner",
      evening: "Visite du Musée National d'Arabie Saoudite, dîner au restaurant traditionnel"
    },
    day2: {
      morning: "Petit-déjeuner, excursion à Diriyah (At-Turaif - site UNESCO), exploration du patrimoine",
      afternoon: "Déjeuner à Diriyah, retour à Riyadh, shopping au Kingdom Centre",
      evening: "Observation du coucher du soleil depuis Kingdom Tower, dîner au restaurant avec vue panoramique"
    },
    day3: {
      morning: "Petit-déjeuner, visite du Palais Murabba, exploration de l'architecture moderne",
      afternoon: "Déjeuner, shopping à Al Faisaliah Mall ou Souq Al Zal",
      evening: "Dîner saoudien traditionnel, visite d'un café local, expérience culturelle"
    },
    day4: {
      morning: "Petit-déjeuner, dernière visite ou shopping de souvenirs",
      afternoon: "Enregistrement de départ, transfert vers l'aéroport",
      evening: "Vol de retour vers Abu Dhabi"
    }
  }
}

