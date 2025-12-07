/**
 * Riyadh, Saudi Arabia Destination
 * 
 * Themes: historique-culturel, moderne-shopping
 */

export default {
  name: "Riyadh, Saudi Arabia",
  flightTime: "1.5 hours",
  coordinates: { lat: 24.7136, lng: 46.6753 },
  image: "https://images.unsplash.com/photo-1605540436563-5bca919ae766?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  themes: ["historique-culturel", "moderne-shopping"],
  description: "Capitale moderne avec patrimoine historique, architecture contemporaine et culture saoudienne authentique",
  activities: {
    "Culture & Musées": ["Fort de Masmak", "Musée National d'Arabie Saoudite", "Diriyah (At-Turaif)", "Palais Murabba"],
    "Gastronomie & Restaurants": ["Cuisine saoudienne", "Restaurants traditionnels", "Cuisine internationale", "Cafés locaux"],
    "Shopping": ["Kingdom Centre", "Al Faisaliah Mall", "Souq Al Zal", "Boutiques de luxe"],
    "Architecture & Art": ["Kingdom Tower", "Al Faisaliah Tower", "Diriyah", "Musée d'Art Contemporain"]
  },
  itinerary: {
    day1: {
      morning: {
        text: "Arrivée à l'aéroport de Riyadh, enregistrement à l'hôtel, petit-déjeuner",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO3pYPxFUBQvnXfw-YZM0awvO-Y__EUxGWcQ&s"
      },
      afternoon: {
        text: "Visite du Fort de Masmak, exploration du quartier historique, déjeuner",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Masmak_Fort_%2812753717253%29.jpg/2560px-Masmak_Fort_%2812753717253%29.jpg"
      },
      evening: {
        text: "Visite du Musée National d'Arabie Saoudite, dîner au restaurant traditionnel",
        image: "https://cdn.platinumlist.net/upload/event/national_museum_of_saudi_2021_jan_01_national_museum_of_riyadh_81055-full-en1628766056.png"
      }
    },
    day2: {
      morning: {
        text: "Petit-déjeuner, excursion à Diriyah (At-Turaif - site UNESCO), exploration du patrimoine",
        image: ""
      },
      afternoon: {
        text: "Déjeuner à Diriyah, retour à Riyadh, shopping au Kingdom Centre",
        image: "https://images.ctfassets.net/9crgcb5vlu43/4kM7dz31wACsHBWG0FsB3v/9874ea31b0012016fc5d5704e52ee5a1/Diriyah_Header_4.jpg"
      },
      evening: {
        text: "Observation du coucher du soleil depuis Kingdom Tower, dîner au restaurant avec vue panoramique",
        image: "https://excursionmania.com/cdn-cgi/image/quality=75,format=webp,w=auto,h=auto,fit=scale-down,trim=border/https://excursionmania.com/uploads/blog/gallery/2384/1739284244.jpg"
      }
    },
    day3: {
      morning: {
        text: "Petit-déjeuner, visite du Palais Murabba, exploration de l'architecture moderne",
        image: "https://res.cloudinary.com/ddjuftfy2/image/upload/f_webp,c_fill,q_auto/memphis/large/452850871_iStock-2159155815.webp"
      },
      afternoon: {
        text: "Déjeuner, shopping à Al Faisaliah Mall ou Souq Al Zal",
        image: "https://destinationksa.com/wp-content/uploads/2025/02/soukalzal.webp"
      },
      evening: {
        text: "Dîner saoudien traditionnel, visite d'un café local",
        image: ""
      }
    },
    day4: {
      morning: {
        text: "Petit-déjeuner, dernière visite ou shopping de souvenirs",
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

