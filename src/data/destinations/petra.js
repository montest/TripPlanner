/**
 * Petra, Jordan Destination
 * 
 * Themes: merveilles-antiques, historique-culturel
 */

export default {
  name: "Petra, Jordan",
  flightTime: "2.5 hours (to Amman)",
  coordinates: { lat: 30.3285, lng: 35.4444 },
  image: "https://res.cloudinary.com/ddjuftfy2/image/upload/f_webp,c_fill,q_100,w_500/memphis/xlarge/184203755_Petra.jpg",
  themes: ["historique-culturel", "merveilles-antiques"],
  description: "Ancienne ville nabatéenne sculptée dans des falaises rose-rouge, l'une des 7 Nouvelles Merveilles",
  activities: {
    "Culture & Musées": ["Site archéologique de Pétra", "Musée de Pétra", "Petite Pétra", "Culture bédouine"],
    "Aventure & Sports": ["Randonnée à Pétra", "Balades à dos de chameau", "Exploration du désert", "Escalade de montagne"],
    "Gastronomie & Restaurants": ["Cuisine jordanienne", "Repas bédouins", "Restaurants traditionnels", "Repas dans le désert"],
    "Shopping": ["Artisanat local", "Souvenirs de Pétra", "Bijoux bédouins", "Articles traditionnels"]
  },
  itinerary: {
    day1: {
      morning: {
        text: "Arrivée à l'aéroport d'Amman, transfert vers Pétra (3 heures), enregistrement à l'hôtel",
        image: ""
      },
      afternoon: {
        text: "Déjeuner, première visite de Pétra -- Chemin du Siq au Trésor",
        image: "https://fr.visitjordan.com/uploads/attractions/1ff34e35-af03-425c-a924-d9d6a3507147.png"
      },
      evening: {
        text: "Dîner jordanien traditionnel, repos après le voyage",
        image: ""
      }
    },
    day2: {
      morning: {
        text: "Petit-déjeuner tôt, journée complète à Pétra (Trésor, Monastère, Tombes Royales)",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDfjMfDk_baQFPXtIV2rGPo3zK4tL4hu-jVA&s"
      },
      afternoon: {
        text: "Déjeuner à Pétra, poursuite de l'exploration, visite du Haut Lieu de Sacrifice",
        image: "https://i0.wp.com/familyinjordan.com/wp-content/uploads/2019/12/IMG_0987-scaled.jpg?resize=750%2C500&ssl=1"
      },
      evening: {
        text: "Dîner chill",
        image: ""
      }
    },
    day3: {
      morning: {
        text: "Petit-déjeuner, visite de la Petite Pétra (Siq al-Barid) et exploration des sites archéologiques proches",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Siq_al-Berid_04.jpg/2560px-Siq_al-Berid_04.jpg"
      },
      afternoon: {
        text: "Déjeuner, puis visite du Musée de Pétra",
        image: "https://i0.wp.com/flowtraveljo.com/wp-content/uploads/2023/02/img_e2817-1.webp?fit=1024%2C768&ssl=1"
      },
      evening: {
        text: "Dîner bédouin traditionnel, spectacle culturel, observation des étoiles",
        image: "https://cf.bstatic.com/xdata/images/hotel/max500/405292807.jpg?k=75f99cca0df0370029e9bb55f9b87588d4601013c502d5b89d8dbc72764b2176&o=&hp=1"
      }
    },
    day4: {
      morning: {
        text: "Petit-déjeuner tranquille, transfert vers l'aéroport d'Amman (3 heures)",
        image: "https://pix10.agoda.net/hotelImages/6605853/-1/84fff692d0a4a9133dadcdb313093594.jpg?ca=7&ce=1&s=414x232"
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
  },
}
