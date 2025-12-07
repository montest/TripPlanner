/**
 * Goa, India Destination
 * 
 * Themes: repos-en-bord-de-plage
 */

export default {
  name: "Goa, India",
  flightTime: "6 hours (no direct flight)",
  coordinates: { lat: 15.2993, lng: 74.1240 },
  image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  themes: ["repos-en-bord-de-plage"],
  description: "Plages tropicales, patrimoine portugais et culture vibrante",
  activities: {
    "Détente & Spa": ["Farniente sur la plage", "Spa ayurvédique", "Yoga sur la plage", "Observation du coucher du soleil"],
    "Aventure & Sports": ["Sports nautiques", "Observation des dauphins", "Parapente", "Beach-volley"],
    "Gastronomie & Restaurants": ["Cuisine goanaise", "Cabanes de plage", "Fruits de mer", "Plats d'influence portugaise"],
    "Culture & Musées": ["Églises de la vieille Goa", "Architecture portugaise", "Plantations d'épices"]
  },
  itinerary: {
    day1: {
      morning: {
        text: "Arrivée à l'aéroport de Goa, transfert vers le resort de plage, enregistrement",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_3-0tWU4LtidNj8Nq9EkUR-7Mh8X2jILInQ&s"
      },
      afternoon: {
        text: "Déjeuner de bienvenue, temps sur la plage à Calangute ou Baga Beach, exploration du resort",
        image: "https://media1.thrillophilia.com/filestore/b8iqw6n62s37df5vqj13dpxr17cg_shutterstock_1850377780.jpg?w=400&dpr=2"
      },
      evening: {
        text: "Coucher du soleil à Anjuna Beach, dîner dans une cabane de plage, visite du marché de nuit",
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/f4/18/f9/good-evening.jpg?w=900&h=500&s=1"
      }
    },
    day2: {
      morning: {
        text: "Petit-déjeuner, visite de la vieille Goa (Basilique du Bom Jesus, Cathédrale Se)",
        image: "https://www.shutterstock.com/image-photo/basilica-bom-jesus-borea-jezuchi-600nw-1917937613.jpg"
      },
      afternoon: {
        text: "Déjeuner, visite de plantation d'épices, démonstration de cuisine goanaise traditionnelle",
        image: "https://www.agoda.com/wp-content/uploads/2023/12/Featured-image-Indian-vegetarian-food-course-1244x700.jpg"
      },
      evening: {
        text: "Retour à la plage, croisière au coucher du soleil, dîner au restaurant portugais",
        image: ""
      }
    },
    day3: {
      morning: {
        text: "Tour d'observation des dauphins tôt le matin, petit-déjeuner sur le bateau",
        image: "https://travools.com/images/trip/1644486244_6204de64422eb_banner.jfif"
      },
      afternoon: {
        text: "Sports nautiques (parapente, jet ski), détente sur la plage, déjeuner",
        image: "https://goatourspackage.com/wp-content/uploads/jet-ski-goa.jpg"
      },
      evening: {
        text: "Séance spa ayurvédique, dîner en bord de plage avec musique live",
        image: "https://herbalpark.ae/wp-content/webp-express/webp-images/uploads/2023/05/tender-african-woman-smiling-enjoying-massage-with-closed-eyes-spa-resort-3.png.webp"
      }
    },
    day4: {
      morning: {
        text: "Dernier moment sur la plage, petit-déjeuner, shopping de souvenirs aux marchés locaux",
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

