/**
 * Amman, Jordan Destination
 * 
 * Themes: historic-cultural, ancient-wonders
 */

export default {
  name: "Amman, Jordan",
  flightTime: "3 hours",
  coordinates: { lat: 31.9539, lng: 35.9106 },
  image: "https://i0.wp.com/www.touristjordan.com/wp-content/uploads/2022/08/jordan12.jpg?resize=800%2C533&ssl=1",
  themes: ["historic-cultural", "ancient-wonders"],
  description: "Capitale jordanienne avec citadelle antique, théâtre romain, rainbow street et culture arabe moderne",
  activities: {
    "Culture & Musées": ["Citadelle d'Amman", "Théâtre Romain", "Musée Archéologique", "Musée du Folklore"],
    "Gastronomie & Restaurants": ["Cuisine jordanienne", "Cuisine de rue", "Restaurants traditionnels", "Cafés locaux"],
    "Shopping": ["Souq de la Citadelle", "Rainbow Street", "Marchés locaux", "Artisanat jordanien"],
    "Aventure & Sports": ["Tours de la ville", "Visites historiques", "Exploration des ruines", "Promenades culturelles"]
  },
  itinerary: {
    day1: {
      morning: {
        text: "Arrivée à l'aéroport d'Amman, enregistrement à l'hôtel, petit-déjeuner",
        image: ""
      },
      afternoon: {
        text: "Visite de la Citadelle d'Amman, exploration des ruines antiques, déjeuner",
        image: "https://international.visitjordan.com/uploads/attractions/a7d6a5a1-d918-4e04-b54f-98c453de6396.png"
      },
      evening: {
        text: "Visite du Théâtre Romain, dîner au restaurant traditionnel, promenade sur Rainbow Street",
        image: "https://www.voyage-jordanie.com/cdn/jo-public/theatre_romain_6130c994ddbb5b646bc20b3b.jpg"
      }
    },
    day2: {
      morning: {
        text: "Petit-déjeuner, visite du Musée Archéologique, exploration du Musée du Folklore",
        image: ""
      },
      afternoon: {
        text: "Déjeuner, shopping à Rainbow Street, visite des souks locaux",
        image: "https://jordanmw.com/wp-content/uploads/2025/05/What-to-do-in-Rainbow-Street-Amman.webp"
      },
      evening: {
        text: "Dîner jordanien traditionnel, café local, expérience du narguilé",
        image: "https://media-cdn.tripadvisor.com/media/photo-s/05/f7/9b/ea/abdoun-cafe.jpg"
      }
    },
    day3: {
      morning: {
        text: "Petit-déjeuner, excursion d'une journée à Jerash (ruines romaines), exploration du site archéologique",
        image: "https://lp-cms-production.imgix.net/2023-05/shutterstock520751962.jpg"
      },
      afternoon: {
        text: "Déjeuner à Jerash, retour à Amman, temps libre",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Temple_of_Zeus_%28Gerasa%2C_Jerash_-_Jordan%29_-_%D9%85%D8%B9%D8%A8%D8%AF_%D8%B2%D9%8A%D9%88%D8%B3.jpg/330px-Temple_of_Zeus_%28Gerasa%2C_Jerash_-_Jordan%29_-_%D9%85%D8%B9%D8%A8%D8%AF_%D8%B2%D9%8A%D9%88%D8%B3.jpg"
      },
      evening: {
        text: "Dîner au restaurant avec vue sur la ville, vie nocturne à Amman",
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

