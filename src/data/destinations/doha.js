/**
 * Doha, Qatar Destination
 * 
 * Themes: modern-shopping, architecture-art, food-nightlife
 */

export default {
  name: "Doha, Qatar",
  flightTime: "1 hour",
  coordinates: { lat: 25.2854, lng: 51.5310 },
  image: "https://stories.forbestravelguide.com/wp-content/uploads/2024/02/HeroBestDohaHotels-RafflesDoha-ExteriorDay-CreditRafflesDoha.jpg",
  themes: ["modern-shopping", "architecture-art", "food-nightlife"],
  description: "Métropole moderne avec architecture futuriste, shopping de luxe et culture arabe",
  activities: {
    "Culture & Musées": ["Musée d'Art Islamique", "Souq Waqif", "Katara Cultural Village", "Musée National du Qatar"],
    "Gastronomie & Restaurants": ["Cuisine qatarie", "Restaurants gastronomiques", "Cuisine internationale", "Cafés traditionnels"],
    "Shopping": ["The Pearl-Qatar", "Villaggio Mall", "Souq Waqif", "Boutiques de luxe", "Al Wakrah Old Souq"],
    "Vie Nocturne & Divertissement": ["Bars sur les toits", "Restaurants avec vue", "Croisières en dhow", "Spectacles culturels"]
  },
  itinerary: {
    day1: {
      morning: {
        text: "Arrivée à l'aéroport de Doha, enregistrement à l'hôtel, petit-déjeuner",
        image: "https://www.timeoutdoha.com/cloud/timeoutdoha/2025/07/08/hamad-airport.png"
      },
      afternoon: {
        text: "Visite du Musée d'Art Islamique, exploration de la Corniche, déjeuner",
        image: "https://www.e-taqafa.ma/sites/default/files/field/image/couverture/expo%20future.jpg"
      },
      evening: {
        text: "Exploration du Souq Waqif, dîner au restaurant traditionnel, promenade nocturne",
        image: "https://www.timeoutdoha.com/cloud/timeoutdoha/2021/08/17/Souq-Waqif1.jpg"
      }
    },
    day2: {
      morning: {
        text: "Petit-déjeuner, visite du Katara Cultural Village, exploration de l'architecture moderne",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROXXuQ7Bk6YJ3ifk2z1672n-IB79leKowSsA&s"
      },
      afternoon: {
        text: "Déjeuner, shopping à The Pearl-Qatar ou Villaggio Mall",
        image: "https://www.thepearlqatar.com/-/media/project/tpq/tpqwebsite/images/explore-1.jpg?cx=0.5&amp;cy=0.5&amp;cw=0&amp;ch=0&amp;hash=B373B55EFD4EE03541FD09E13121E91F"
      },
      evening: {
        text: "Dîner au restaurant avec vue sur la baie",
        image: "https://a.storyblok.com/f/116532/1920x1080/b05884ee48/sky-view-doha.webp"
      }
    },
    day3: {
      morning: {
        text: "Petit-déjeuner, visite du Musée National du Qatar, exploration de l'architecture futuriste",
        image: "https://media.privileges-voyages.com/resizer/r/700-450-1-70-0/56824_Musee-du-Qatar-.jpg"
      },
      afternoon: {
        text: "Déjeuner, visite du Al Wakrah Old Souq pour shopping d'artisanat",
        image: "https://marhaba.qa/wp-content/uploads/2023/08/souq-al-wakrah.jpg"
      },
      evening: {
        text: "Dîner gastronomique, bar sur le toit avec vue panoramique, vie nocturne",
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

