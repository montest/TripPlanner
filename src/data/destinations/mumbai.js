/**
 * Mumbai, India Destination
 * 
 * Themes: modern-shopping, food-nightlife, architecture-art
 */

export default {
  name: "Mumbai, India",
  flightTime: "3 hours",
  coordinates: { lat: 19.0760, lng: 72.8777 },
  image: "https://images.unsplash.com/photo-1529253355930-dbea01e5e788?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  themes: ["modern-shopping", "food-nightlife", "architecture-art"],
  description: "Métropole animée avec le glamour de Bollywood, sites historiques et délicieuse cuisine de rue",
  activities: {
    "Culture & Musées": ["Porte de l'Inde", "Grottes d'Elephanta", "Promenades patrimoniales de Mumbai", "Galeries d'art"],
    "Gastronomie & Restaurants": ["Tours de cuisine de rue", "Restaurants gastronomiques", "Fruits de mer", "Cuisine maharashtrienne"],
    "Vie Nocturne & Divertissement": ["Tours de Bollywood", "Vie nocturne à Bandra", "Marine Drive", "Spectacles de théâtre"],
    "Shopping": ["Colaba Causeway", "Chor Bazaar", "Centres commerciaux haut de gamme", "Marchés locaux"]
  },
  itinerary: {
    day1: {
      morning: "Arrivée à l'aéroport de Mumbai, enregistrement à l'hôtel, petit-déjeuner",
      afternoon: "Visite de la Porte de l'Inde, exploration de Colaba, déjeuner au restaurant célèbre",
      evening: "Coucher du soleil à Marine Drive, dîner au restaurant gastronomique, promenade nocturne"
    },
    day2: {
      morning: "Petit-déjeuner, ferry vers les Grottes d'Elephanta (site UNESCO), exploration des temples troglodytes",
      afternoon: "Retour en ville, déjeuner, visite de la Gare Chhatrapati Shivaji (bâtiment patrimonial)",
      evening: "Tour de cuisine de rue à Colaba, visite d'une galerie d'art, dîner"
    },
    day3: {
      morning: "Petit-déjeuner, tour des studios de Bollywood (si disponible), visite du quartier de Bandra",
      afternoon: "Déjeuner, shopping à Colaba Causeway ou dans les centres commerciaux haut de gamme",
      evening: "Coucher du soleil au Bandra-Worli Sea Link, dîner au restaurant sur le toit, vie nocturne à Bandra"
    },
    day4: {
      morning: "Petit-déjeuner, shopping de dernière minute à Chor Bazaar ou aux marchés locaux",
      afternoon: "Enregistrement de départ, visite du Haji Ali Dargah ou du Parc National Sanjay Gandhi, transfert vers l'aéroport",
      evening: "Vol de retour vers Abu Dhabi"
    }
  }
}

