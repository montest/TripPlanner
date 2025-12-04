/**
 * Beirut, Lebanon Destination
 * 
 * Themes: historic-cultural, food-nightlife, architecture-art
 */

export default {
  name: "Beirut, Lebanon",
  flightTime: "3.5 hours",
  coordinates: { lat: 33.8938, lng: 35.5018 },
  image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  themes: ["historic-cultural", "food-nightlife", "architecture-art"],
  description: "Paris du Moyen-Orient avec histoire riche, gastronomie exceptionnelle et vie nocturne animée",
  activities: {
    "Culture & Musées": ["Musée National de Beyrouth", "Corniche de Beyrouth", "Place des Martyrs", "Mosquée Mohammad Al-Amin"],
    "Gastronomie & Restaurants": ["Cuisine libanaise", "Restaurants gastronomiques", "Cuisine de rue", "Cafés traditionnels"],
    "Vie Nocturne & Divertissement": ["Bars et clubs", "Restaurants avec vue", "Promenades nocturnes", "Spectacles culturels"],
    "Shopping": ["Souks de Beyrouth", "Boutiques de créateurs", "Marchés locaux", "Artisanat libanais"]
  },
  itinerary: {
    day1: {
      morning: "Arrivée à l'aéroport de Beyrouth, enregistrement à l'hôtel, petit-déjeuner",
      afternoon: "Visite du Musée National de Beyrouth, exploration de la Corniche, déjeuner",
      evening: "Promenade sur la Corniche au coucher du soleil, dîner libanais traditionnel, vie nocturne"
    },
    day2: {
      morning: "Petit-déjeuner, visite de la Place des Martyrs, exploration du centre-ville historique",
      afternoon: "Déjeuner, visite de la Mosquée Mohammad Al-Amin, shopping dans les souks",
      evening: "Dîner gastronomique libanais, bar sur le toit avec vue, expérience de la vie nocturne"
    },
    day3: {
      morning: "Petit-déjeuner, excursion d'une journée à Byblos (site historique), exploration des ruines",
      afternoon: "Déjeuner à Byblos, retour à Beyrouth, temps libre",
      evening: "Dîner au restaurant de fruits de mer, promenade nocturne, café traditionnel"
    },
    day4: {
      morning: "Petit-déjeuner, dernière visite ou shopping de souvenirs",
      afternoon: "Enregistrement de départ, transfert vers l'aéroport",
      evening: "Vol de retour vers Abu Dhabi"
    }
  }
}

