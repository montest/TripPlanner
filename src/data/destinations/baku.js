/**
 * Baku, Azerbaijan Destination
 * 
 * Themes: historic-cultural, architecture-art, modern-shopping
 */

export default {
  name: "Baku, Azerbaijan",
  flightTime: "3 hours",
  coordinates: { lat: 40.4093, lng: 49.8671 },
  image: "https://images.travelandleisureasia.com/wp-content/uploads/sites/3/2024/07/24185058/baku-city-1.jpeg?tr=w-1200,q-60",
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
      morning: {
        text: "Arrivée à l'aéroport de Bakou, enregistrement à l'hôtel, petit-déjeuner",
        image: ""
      },
      afternoon: {
        text: "Visite de la Vieille Ville (Icherisheher - site UNESCO), exploration des rues historiques, déjeuner",
        image: ""
      },
      evening: {
        text: "Promenade sur le Boulevard de la Caspienne, dîner azerbaïdjanais traditionnel, observation des Flame Towers",
        image: ""
      }
    },
    day2: {
      morning: {
        text: "Petit-déjeuner, visite du Palais des Shirvanshahs, Tour de la Vierge",
        image: ""
      },
      afternoon: {
        text: "Déjeuner, visite du Centre Heydar Aliyev (architecture moderne), exploration de l'art contemporain",
        image: ""
      },
      evening: {
        text: "Dîner au restaurant avec vue sur les Flame Towers, promenade nocturne, café local",
        image: ""
      }
    },
    day3: {
      morning: {
        text: "Petit-déjeuner, visite du Musée d'Art Moderne, exploration de l'architecture moderne de Bakou",
        image: ""
      },
      afternoon: {
        text: "Déjeuner, shopping sur Nizami Street, visite des marchés locaux",
        image: ""
      },
      evening: {
        text: "Dîner gastronomique, observation des Flame Towers illuminées, expérience culturelle",
        image: ""
      }
    },
    day4: {
      morning: {
        text: "Petit-déjeuner, dernière visite ou shopping de souvenirs",
        image: ""
      },
      afternoon: {
        text: "Enregistrement de départ, transfert vers l'aéroport",
        image: ""
      },
      evening: {
        text: "Vol de retour vers Abu Dhabi",
        image: "https://cdn.prod.website-files.com/65f8a2608247a99bd7aaba13/683ef923c63703391cf8d18e_Abu%20dhabi%20airport%20drop%20off.jpg"
      }
    }
  }
}

