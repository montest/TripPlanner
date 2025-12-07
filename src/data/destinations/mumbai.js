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
      morning: {
        text: "Arrivée à l'aéroport de Mumbai, enregistrement à l'hôtel, petit-déjeuner",
        image: ""
      },
      afternoon: {
        text: "Visite de la Porte de l'Inde, exploration de Colaba, déjeuner au restaurant célèbre",
        image: ""
      },
      evening: {
        text: "Coucher du soleil à Marine Drive, dîner au restaurant gastronomique, promenade nocturne",
        image: ""
      }
    },
    day2: {
      morning: {
        text: "Petit-déjeuner, ferry vers les Grottes d'Elephanta (site UNESCO), exploration des temples troglodytes",
        image: ""
      },
      afternoon: {
        text: "Retour en ville, déjeuner, visite de la Gare Chhatrapati Shivaji (bâtiment patrimonial)",
        image: ""
      },
      evening: {
        text: "Tour de cuisine de rue à Colaba, visite d'une galerie d'art, dîner",
        image: ""
      }
    },
    day3: {
      morning: {
        text: "Petit-déjeuner, tour des studios de Bollywood (si disponible), visite du quartier de Bandra",
        image: ""
      },
      afternoon: {
        text: "Déjeuner, shopping à Colaba Causeway ou dans les centres commerciaux haut de gamme",
        image: ""
      },
      evening: {
        text: "Coucher du soleil au Bandra-Worli Sea Link, dîner au restaurant sur le toit, vie nocturne à Bandra",
        image: ""
      }
    },
    day4: {
      morning: {
        text: "Petit-déjeuner, shopping de dernière minute à Chor Bazaar ou aux marchés locaux",
        image: ""
      },
      afternoon: {
        text: "Enregistrement de départ, visite du Haji Ali Dargah ou du Parc National Sanjay Gandhi, transfert vers l'aéroport",
        image: ""
      },
      evening: {
        text: "Vol de retour vers Abu Dhabi",
        image: "https://cdn.prod.website-files.com/65f8a2608247a99bd7aaba13/683ef923c63703391cf8d18e_Abu%20dhabi%20airport%20drop%20off.jpg"
      }
    }
  }
}

