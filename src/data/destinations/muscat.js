/**
 * Muscat, Oman Destination
 * 
 * Themes: traditional-culture, historic-cultural
 */

export default {
  name: "Muscat, Oman",
  flightTime: "1 hour 10 minutes",
  coordinates: { lat: 23.5859, lng: 58.4059 },
  image: "https://images.unsplash.com/photo-1559827260-dbea01e5e788?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  themes: ["traditional-culture", "historic-cultural"],
  description: "Capitale omanaise avec forts, souks et côte époustouflante",
  activities: {
    "Culture & Musées": ["Grande Mosquée du Sultan Qaboos", "Opéra Royal", "Fort de Mutrah", "Bait Al Zubair"],
    "Gastronomie & Restaurants": ["Cuisine omanaise", "Fruits de mer", "Restaurants traditionnels", "Café arabe"],
    "Aventure & Sports": ["Observation des dauphins", "Snorkeling", "Tours du désert", "Randonnée en montagne"],
    "Shopping": ["Souq de Mutrah", "Artisanat traditionnel", "Argent omanais", "Encens"]
  },
  itinerary: {
    day1: {
      morning: {
        text: "Arrivée à l'aéroport de Mascate, enregistrement à l'hôtel, petit-déjeuner",
        image: ""
      },
      afternoon: {
        text: "Visite de la Grande Mosquée du Sultan Qaboos, déjeuner au restaurant traditionnel",
        image: ""
      },
      evening: {
        text: "Exploration du Souq de Mutrah, promenade sur la corniche, dîner au restaurant de fruits de mer",
        image: ""
      }
    },
    day2: {
      morning: {
        text: "Petit-déjeuner, visite de l'Opéra Royal, Musée Bait Al Zubair",
        image: ""
      },
      afternoon: {
        text: "Déjeuner, visite du Fort de Mutrah, exploration de la vieille Mascate",
        image: ""
      },
      evening: {
        text: "Tour d'observation des dauphins, dîner au restaurant de plage",
        image: ""
      }
    },
    day3: {
      morning: {
        text: "Petit-déjeuner, excursion d'une journée à Nizwa (fort et souq), déjeuner omanais traditionnel",
        image: ""
      },
      afternoon: {
        text: "Retour à Mascate, visite du Palais Al Alam (vue extérieure), shopping",
        image: ""
      },
      evening: {
        text: "Dîner omanais traditionnel, visite d'un café local, narguilé",
        image: ""
      }
    },
    day4: {
      morning: {
        text: "Petit-déjeuner, shopping de dernière minute au Souq de Mutrah, visite de la plage",
        image: ""
      },
      afternoon: {
        text: "Vol de retour vers Abu Dhabi",
        image: "https://cdn.prod.website-files.com/65f8a2608247a99bd7aaba13/683ef923c63703391cf8d18e_Abu%20dhabi%20airport%20drop%20off.jpg"
      },
      evening: {
        text: "Dodo dans notre lit",
        image: ""
      }
    }
  }
}

