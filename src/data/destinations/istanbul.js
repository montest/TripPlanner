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
    themes: ["historique-culturel"],
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
          image: "https://www.istairport.com/media/yj2fkrl0/1446x800-desktop.jpg?format=webp"
        },
        afternoon: {
          text: "Visite de Sainte-Sophie, Mosquée Bleue, déjeuner au restaurant traditionnel",
          image: "https://medias.histoire-et-civilisations.com/api/v1/images/view/62c6eece4c2d6f1e5108540b/width_1000/image.jpg"
        },
        evening: {
          text: "Exploration du Grand Bazar, dîner au restaurant sur le toit avec vue sur le Bosphore",
          image: "https://lp-cms-production.imgix.net/2025-01/500pxRF94774693.jpg?auto=format,compress&q=72&w=1440&h=810&fit=crop"
        }
      },
      day2: {
        morning: {
          text: "Petit-déjeuner, visite du Palais de Topkapi, visite de la section Harem",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiNdS1vO_zd5RiOQ_X0QB7dgxHfQ9oVlA5vg&s"
        },
        afternoon: {
          text: "Déjeuner, croisière sur le Bosphore, visite du Bazar aux Épices",
          image: "https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/ef/4b/7e.jpg"
        },
        evening: {
          text: "Bain turc traditionnel (hammam), dîner au restaurant local, promenade nocturne",
          image: "https://toutistanbul.com/wp-content/uploads/2023/01/meilleurs-hammams-a-istanbul-1.jpeg"
        }
      },
      day3: {
        morning: {
          text: "Petit-déjeuner, visite de la Tour de Galata, exploration des quartiers de Galata et Karaköy",
          image: "https://media1.thrillophilia.com/filestore/d6vkimlauthuu1goc69srb4ztu30_shutterstock_2171476409%20(1).jpg"
        },
        afternoon: {
          text: "Déjeuner, visite du Palais de Dolmabahçe, promenade le long du Bosphore",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQexFsgbuzKHjEddumqpp6sqfTR5RgOpBarbw&s"
        },
        evening: {
          text: "Croisière-dîner sur le Bosphore, spectacle culturel turc, vie nocturne à Beyoğlu",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWDOV6vLTNzOZXFV-vIZFnKFmm0EVMHyUpWg&s"
        }
      },
      day4: {
        morning: {
          text: "Petit-déjeuner, shopping de dernière minute au Grand Bazar ou Bazar aux Épices",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Istanbul_spice_bazaar_02.jpg/1200px-Istanbul_spice_bazaar_02.jpg"
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
  // // Plan 2: Modern & Shopping Istanbul (example - you can add more plans)
  // {
  //   name: "Istanbul, Turkey",
  //   planName: "Moderne & Shopping",
  //   flightTime: "3.5 hours",
  //   coordinates: { lat: 41.0082, lng: 28.9784 },
  //   themes: ["moderne-shopping", "gastronomie-vie-nocturne"],
  //   description: "Istanbul moderne avec shopping de luxe, art contemporain et vie nocturne animée",
  //   activities: {
  //     "Shopping": ["Istinye Park", "Zorlu Center", "Boutiques de Nişantaşı", "Magasins de créateurs"],
  //     "Gastronomie & Restaurants": ["Restaurants gastronomiques", "Bars sur les toits", "Cuisine turque moderne"],
  //     "Vie Nocturne & Divertissement": ["Boîtes de nuit", "Bars sur les toits", "Lieux de musique live"]
  //   },
  //   itinerary: {
  //     day1: {
  //       morning: { text: "...", image: "" },
  //       afternoon: { text: "...", image: "" },
  //       evening: { text: "...", image: "" }
  //     },
  //     day2: {
  //       morning: { text: "...", image: "" },
  //       afternoon: { text: "...", image: "" },
  //       evening: { text: "...", image: "" }
  //     },
  //     day3: {
  //       morning: { text: "...", image: "" },
  //       afternoon: { text: "...", image: "" },
  //       evening: { text: "...", image: "" }
  //     },
  //     day4: {
  //       morning: { text: "...", image: "" },
  //       afternoon: { text: "...", image: "" },
  //       evening: { text: "...", image: "" }
  //     }
  //   }
  // }
]

