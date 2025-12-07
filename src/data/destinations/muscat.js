/**
 * Muscat, Oman Destination
 * 
 * Themes: historique-culturel
 */

export default {
  name: "Muscat, Oman",
  flightTime: "1 hour 10 minutes",
  coordinates: { lat: 23.5859, lng: 58.4059 },
  image: "https://media.cntravellerme.com/photos/6798b1d5ef028473ebb86e99/16:9/w_2560%2Cc_limit/1379966790",
  themes: ["historique-culturel"],
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
        image: "https://www.consultancy-me.com/illustrations/news/spotlight/2024-02-09-033613577-German_airport_consultants_helping_Muscat_Airport_with_preparation_spot.jpg"
      },
      afternoon: {
        text: "Visite de la Grande Mosquée du Sultan Qaboos, déjeuner au restaurant traditionnel",
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2f/36/10/f0/sultan-qaboos-grand-mosque.jpg?w=900&h=500&s=1"
      },
      evening: {
        text: "Exploration du Souq de Mutrah, promenade sur la corniche, dîner au restaurant de fruits de mer",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzyt2AiBj82k4qAKJ6EUYl2AqDz08UAZ0RKA&s"
      }
    },
    day2: {
      morning: {
        text: "Petit-déjeuner, visite de l'Opéra Royal, Musée Bait Al Zubair",
        image: "https://upload.wikimedia.org/wikipedia/commons/b/b3/Opera_house_Muscat.jpg"
      },
      afternoon: {
        text: "Déjeuner, visite du Fort de Mutrah, exploration de la vieille Mascate",
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/27/d5/6d/5f/matrah-fort-oman.jpg?w=1200&h=1200&s=1"
      },
      evening: {
        text: "Tour d'observation des dauphins, dîner au restaurant de plage",
        image: "https://cdn.getyourguide.com/image/format=auto,fit=contain,gravity=auto,quality=60,width=1440,height=650,dpr=1/tour_img/cd3cb1be002b2e86d67bc7b21db52e887edd198598177dbe633f72b0522a7274.jpeg"
      }
    },
    day3: {
      morning: {
        text: "Petit-déjeuner, excursion d'une journée à Nizwa (fort et souq), déjeuner omanais traditionnel",
        image: "https://peregrinetreks.com/wp-content/uploads/2024/09/Nizwa-Fort.webp"
      },
      afternoon: {
        text: "Retour à Mascate, visite du Palais Al Alam (vue extérieure), shopping",
        image: "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/59000/59920-Old-Muscat.jpg"
      },
      evening: {
        text: "Dîner omanais traditionnel, visite d'un café local, narguilé",
        image: "https://c8.alamy.com/comp/2C6415G/delicious-dishes-of-traditional-omani-food-served-on-carpet-in-traditional-restaurant-oman-2C6415G.jpg"
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

