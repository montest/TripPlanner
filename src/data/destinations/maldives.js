/**
 * Maldives Destination
 * 
 * Themes: repos-en-bord-de-plage, chiller-sur-une-ile
 */

export default {
  name: "Maldives",
  flightTime: "4 hours",
  coordinates: { lat: 4.1755, lng: 73.5093 },
  image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  themes: ["repos-en-bord-de-plage", "chiller-sur-une-ile"],
  description: "Îles paradisiaques aux eaux cristallines, villas sur pilotis et plongée de classe mondiale",
  activities: {
    "Détente & Spa": ["Farniente sur la plage", "Soins spa", "Croisières au coucher du soleil", "Séances de yoga"],
    "Aventure & Sports": ["Snorkeling", "Plongée sous-marine", "Sports nautiques", "Saut d'île en île"],
    "Gastronomie & Restaurants": ["Repas en bord de plage", "Restaurants de fruits de mer", "Dîners romantiques", "Buffets du resort"]
  },
  itinerary: {
    day1: {
      morning: {
        text: "Arrivée à l'aéroport de Malé, transfert en hydravion vers le resort, enregistrement à la villa sur pilotis",
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/0c/de/66/caption.jpg?w=1200&h=700&s=1"
      },
      afternoon: {
        text: "Déjeuner de bienvenue au restaurant de plage, détente sur la plage privée, exploration des installations du resort",
        image: "https://assets.minorhotels.com/image/upload/q_auto,f_auto,c_limit,w_756/media/minor/nh/images/nh-collection-maldives-havodda-resort/03_dining__ok1/01_the_reef/nh_collection_maldives_havodda_resort_restaurant_reef_960x519_new.jpg"
      },
      evening: {
        text: "Croisière au coucher du soleil avec cocktails, dîner romantique au restaurant sur pilotis",
        image: "https://medias.exotismes.fr/images/miniature/article/153/sun-island-restaurant-pilotis-maldives-coucher-soleil.jpg"
      }
    },
    day2: {
      morning: {
        text: "Séance de yoga tôt le matin, petit-déjeuner, excursion de snorkeling vers les récifs coralliens",
        image: "https://d1l3wviaauwkfu.cloudfront.net/2022/04/Untitled-1900-%C3%97-1000-px-900-%C3%97-700-px-1900-%C3%97-1000-px.jpg"
      },
      afternoon: {
        text: "Déjeuner au resort, soin spa pour deux, détente sur la plage",
        image: "https://assets.anantara.com/image/upload/q_auto,f_auto,c_limit,w_1045/media/minor/anantara/images/anantara-dhigu-maldives-resort/spa/anantara_dhigu_spa_double_treatment_room_944x510.jpg"
      },
      evening: {
        text: "Dîner sur la plage",
        image: "https://www.kudadoo.com/wp-content/uploads/2019/04/Pool_dinner_retreat.jpg"
      }
    },
    day3: {
      morning: {
        text: "Excursion de plongée sous-marine (ou sports nautiques), buffet petit-déjeuner",
        image: "https://maldives.baglionihotels.com/baglioni_resort_maldives_jet_ski_da6cfc4219.jpg"
      },
      afternoon: {
        text: "Cabana de plage privée, déjeuner, massage en couple au spa",
        image: "https://assets.minorhotels.com/image/upload/q_auto,f_auto,c_limit,w_1045/media/minor/anantara/images/naladhu-private-island-maldives/accommodation/details-page/ocean-house-with-pool/new---nov-2025/mnld_ocean_house_with-pool_and_private_beach_cabana_2_944x510.jpg"
      },
      evening: {
        text: "Excursion de pêche au coucher du soleil, préparation du dîner avec la prise fraîche, observation des étoiles",
        image: "https://i0.wp.com/www.lesmaldives.fr/wp-content/uploads/2019/04/journne-peche-dhoni-maldives.jpg?fit=700%2C525&ssl=1"
      }
    },
    day4: {
      morning: {
        text: "Dernier moment sur la plage, petit-déjeuner, shopping de dernière minute pour souvenirs",
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

