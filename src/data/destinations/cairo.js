/**
 * Cairo, Egypt Destination
 * 
 * Themes: ancient-wonders, historic-cultural
 */

export default {
  name: "Cairo, Egypt",
  flightTime: "3.5 hours",
  coordinates: { lat: 30.0444, lng: 31.2357 },
  image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73a6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  themes: ["ancient-wonders", "historic-cultural"],
  description: "Merveilles antiques, pyramides et riche histoire égyptienne",
  activities: {
    "Culture & Musées": ["Pyramides de Gizeh", "Musée Égyptien", "Khan el-Khalili", "Le Caire Islamique"],
    "Gastronomie & Restaurants": ["Cuisine égyptienne", "Restaurants traditionnels", "Cuisine de rue", "Repas sur le Nil"],
    "Aventure & Sports": ["Balades à dos de chameau", "Croisières sur le Nil", "Tours du désert", "Exploration des pyramides"],
    "Shopping": ["Bazar Khan el-Khalili", "Boutiques de papyrus", "Marchés d'épices", "Artisanat traditionnel"]
  },
  itinerary: {
    day1: {
      morning: {
        text: "Arrivée à l'aéroport du Caire, enregistrement à l'hôtel, petit-déjeuner",
        image: ""
      },
      afternoon: {
        text: "Visite des Pyramides de Gizeh et du Sphinx, balade à dos de chameau, déjeuner",
        image: ""
      },
      evening: {
        text: "Spectacle Son et Lumière aux pyramides, dîner égyptien traditionnel",
        image: ""
      }
    },
    day2: {
      morning: {
        text: "Petit-déjeuner, visite du Musée Égyptien (trésors de Toutankhamon), exploration des expositions",
        image: ""
      },
      afternoon: {
        text: "Déjeuner, visite du bazar Khan el-Khalili, shopping de souvenirs",
        image: ""
      },
      evening: {
        text: "Croisière-dîner sur le Nil avec divertissement traditionnel, balade en felouque",
        image: ""
      }
    },
    day3: {
      morning: {
        text: "Petit-déjeuner, visite du Caire Islamique (Mosquée Al-Azhar, Rue Al-Muizz)",
        image: ""
      },
      afternoon: {
        text: "Déjeuner, visite du Caire Copte (Église Suspendue, Musée Copte)",
        image: ""
      },
      evening: {
        text: "Dîner égyptien traditionnel, visite d'un café local, expérience du narguilé",
        image: ""
      }
    },
    day4: {
      morning: {
        text: "Petit-déjeuner, visite optionnelle de Saqqarah ou Memphis, shopping de dernière minute",
        image: ""
      },
      afternoon: {
        text: "Enregistrement de départ, visite de la Citadelle de Saladin, transfert vers l'aéroport",
        image: ""
      },
      evening: {
        text: "Vol de retour vers Abu Dhabi",
        image: "https://cdn.prod.website-files.com/65f8a2608247a99bd7aaba13/683ef923c63703391cf8d18e_Abu%20dhabi%20airport%20drop%20off.jpg"
      }
    }
  }
}

