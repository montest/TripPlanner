/**
 * Istanbul, Turkey Destination
 * 
 * This destination has multiple plans - you can export an array of plans
 * or a single plan object. Each plan can have different themes and itineraries.
 */

export default [
  // Plan 1: Cultural & Historic Istanbul
  {
    name: "Istanbul, Turkey",
    planName: "Culturel & Historique", // Optional: distinguishes this plan
    flightTime: "3.5 hours",
    coordinates: { lat: 41.0082, lng: 28.9784 },
    image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    themes: ["historic-cultural", "architecture-art"],
    description: "Où l'Orient rencontre l'Occident - sites historiques, bazars animés et architecture époustouflante",
    activities: {
      "Culture & Musées": ["Sainte-Sophie", "Mosquée Bleue", "Palais de Topkapi", "Grand Bazar"],
      "Gastronomie & Restaurants": ["Cuisine turque", "Cuisine de rue", "Repas sur le Bosphore", "Restaurants traditionnels"],
      "Vie Nocturne & Divertissement": ["Bars sur les toits", "Bains turcs", "Croisières sur le Bosphore", "Spectacles culturels"],
      "Shopping": ["Grand Bazar", "Bazar aux Épices", "Boutiques de créateurs", "Tapis turcs"]
    },
    itinerary: {
      day1: {
        morning: {
          text: "Arrivée à l'aéroport d'Istanbul, transfert à l'hôtel, enregistrement, petit-déjeuner",
          image: ""
        },
        afternoon: {
          text: "Visite de Sainte-Sophie, Mosquée Bleue, déjeuner au restaurant traditionnel",
          image: ""
        },
        evening: {
          text: "Exploration du Grand Bazar, dîner au restaurant sur le toit avec vue sur le Bosphore",
          image: ""
        }
      },
      day2: {
        morning: {
          text: "Petit-déjeuner, visite du Palais de Topkapi, visite de la section Harem",
          image: ""
        },
        afternoon: {
          text: "Déjeuner, croisière sur le Bosphore, visite du Bazar aux Épices",
          image: ""
        },
        evening: {
          text: "Bain turc traditionnel (hammam), dîner au restaurant local, promenade nocturne",
          image: ""
        }
      },
      day3: {
        morning: {
          text: "Petit-déjeuner, visite de la Tour de Galata, exploration des quartiers de Galata et Karaköy",
          image: ""
        },
        afternoon: {
          text: "Déjeuner, visite du Palais de Dolmabahçe, promenade le long du Bosphore",
          image: ""
        },
        evening: {
          text: "Croisière-dîner sur le Bosphore, spectacle culturel turc, vie nocturne à Beyoğlu",
          image: ""
        }
      },
      day4: {
        morning: {
          text: "Petit-déjeuner, shopping de dernière minute au Grand Bazar ou Bazar aux Épices",
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
  },
  // Plan 2: Modern & Shopping Istanbul (example - you can add more plans)
  {
    name: "Istanbul, Turkey",
    planName: "Moderne & Shopping",
    flightTime: "3.5 hours",
    coordinates: { lat: 41.0082, lng: 28.9784 },
    themes: ["modern-shopping", "food-nightlife"],
    description: "Istanbul moderne avec shopping de luxe, art contemporain et vie nocturne animée",
    activities: {
      "Shopping": ["Istinye Park", "Zorlu Center", "Boutiques de Nişantaşı", "Magasins de créateurs"],
      "Gastronomie & Restaurants": ["Restaurants gastronomiques", "Bars sur les toits", "Cuisine turque moderne"],
      "Vie Nocturne & Divertissement": ["Boîtes de nuit", "Bars sur les toits", "Lieux de musique live"]
    },
    itinerary: {
      day1: {
        morning: { text: "...", image: "" },
        afternoon: { text: "...", image: "" },
        evening: { text: "...", image: "" }
      },
      day2: {
        morning: { text: "...", image: "" },
        afternoon: { text: "...", image: "" },
        evening: { text: "...", image: "" }
      },
      day3: {
        morning: { text: "...", image: "" },
        afternoon: { text: "...", image: "" },
        evening: { text: "...", image: "" }
      },
      day4: {
        morning: { text: "...", image: "" },
        afternoon: { text: "...", image: "" },
        evening: { text: "...", image: "" }
      }
    }
  }
]

