/**
 * Baku, Azerbaijan Destination
 * 
 * Themes: historic-cultural, architecture-art, modern-shopping
 */

export default {
  name: "Baku, Azerbaijan",
  flightTime: "3 hours",
  coordinates: { lat: 40.4093, lng: 49.8671 },
  image: "https://images.unsplash.com/photo-1605540436563-5bca919ae766?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  themes: ["historic-cultural", "architecture-art", "modern-shopping"],
  description: "Capitale azerbaïdjanaise où l'ancien rencontre le moderne - Vieille Ville UNESCO et architecture futuriste",
  activities: {
    "Culture & Musées": ["Vieille Ville (Icherisheher)", "Palais des Shirvanshahs", "Tour de la Vierge", "Musée d'Art Moderne"],
    "Gastronomie & Restaurants": ["Cuisine azerbaïdjanaise", "Restaurants traditionnels", "Cuisine internationale", "Cafés locaux"],
    "Architecture & Art": ["Flame Towers", "Centre Heydar Aliyev", "Boulevard de la Caspienne", "Architecture moderne"],
    "Shopping": ["Nizami Street", "Marchés locaux", "Boutiques de créateurs", "Artisanat azerbaïdjanais"]
  },
  itinerary: {
    day1: {
      morning: "Arrivée à l'aéroport de Bakou, enregistrement à l'hôtel, petit-déjeuner",
      afternoon: "Visite de la Vieille Ville (Icherisheher - site UNESCO), exploration des rues historiques, déjeuner",
      evening: "Promenade sur le Boulevard de la Caspienne, dîner azerbaïdjanais traditionnel, observation des Flame Towers"
    },
    day2: {
      morning: "Petit-déjeuner, visite du Palais des Shirvanshahs, Tour de la Vierge",
      afternoon: "Déjeuner, visite du Centre Heydar Aliyev (architecture moderne), exploration de l'art contemporain",
      evening: "Dîner au restaurant avec vue sur les Flame Towers, promenade nocturne, café local"
    },
    day3: {
      morning: "Petit-déjeuner, visite du Musée d'Art Moderne, exploration de l'architecture moderne de Bakou",
      afternoon: "Déjeuner, shopping sur Nizami Street, visite des marchés locaux",
      evening: "Dîner gastronomique, observation des Flame Towers illuminées, expérience culturelle"
    },
    day4: {
      morning: "Petit-déjeuner, dernière visite ou shopping de souvenirs",
      afternoon: "Enregistrement de départ, transfert vers l'aéroport",
      evening: "Vol de retour vers Abu Dhabi"
    }
  }
}

