/**
 * Seychelles Destination
 * 
 * Themes: chiller-sur-une-ile, repos-en-bord-de-plage
 */

export default {
  name: "Seychelles",
  flightTime: "4 hours",
  coordinates: { lat: -4.6796, lng: 55.4915 },
  image: "https://lp-cms-production.imgix.net/2024-10/GettyRF482344994.jpg?auto=format,compress&q=72&fit=crop",
  themes: ["chiller-sur-une-ile", "repos-en-bord-de-plage"],
  description: "Plages immaculées, rochers de granit et forêts tropicales luxuriantes",
  activities: {
    "Détente & Spa": ["Détente sur la plage", "Soins spa", "Promenades dans la nature", "Pique-niques sur la plage"],
    "Aventure & Sports": ["Randonnée", "Snorkeling", "Kayak", "Exploration d'îles"],
    "Gastronomie & Restaurants": ["Cuisine créole", "Repas en bord de plage", "Fruits de mer frais", "Cocktails tropicaux"]
  },
  itinerary: {
    day1: {
      morning: {
        text: "Arrivée à l'aéroport de Mahé, transfert vers le resort, enregistrement",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGCMQcGXctDjO61ZM5ebWFZgcO2m7r0231fA&s"
      },
      afternoon: {
        text: "Boisson de bienvenue, exploration de la plage, déjeuner au resort",
        image: "https://assets.hiltonstatic.com/hilton-asset-cache/image/upload/c_fill,w_1920,h_1080,q_70,f_auto,g_auto/Imagery/Property%20Photography/Hilton%20Hotels%20and%20Resorts/S/SEZHIHI/image00004.jpg"
      },
      evening: {
        text: "Observation du coucher du soleil à la plage de Beau Vallon, dîner au restaurant de plage",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgFJORiC8dn1esvq5xhvQDc90UL7bS0a-o6A&s"
      }
    },
    day2: {
      morning: {
        text: "Petit-déjeuner, visite d'Anse Lazio (l'une des meilleures plages au monde), snorkeling",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdptsRLFlllq27rxgMqGVMSTx7T7mWB-Wn4w&s"
      },
      afternoon: {
        text: "Déjeuner, promenade nature dans la Vallée de Mai (site UNESCO), dégustation de noix de coco",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoYdeaTFQepRooMSQ2e46R_2UdrqwidGjkVA&s"
      },
      evening: {
        text: "Retour au resort, séance spa, dîner romantique",
        image: ""
      }
    },
    day3: {
      morning: {
        text: "Petit-déjeuner tôt, tour de saut d'île en île vers Praslin et La Digue",
        image: ""
      },
      afternoon: {
        text: "Déjeuner sur La Digue, visite de la plage d'Anse Source d'Argent, séance photo",
        image: "https://cdn.audleytravel.com/4255/3032/79/1324333-anse-cocos-la-digue.jpg"
      },
      evening: {
        text: "Retour au resort, croisière au coucher du soleil, dîner créole",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTGApG7RZzMtNhCvcCg-lwtr4KAd_fZXRZTA&s"
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

