/**
 * Maldives Destination
 * 
 * Themes: luxury-resorts, romantic-getaway, adventure-diving
 */

export default {
  name: "Maldives",
  flightTime: "4 hours",
  coordinates: { lat: 4.1755, lng: 73.5093 },
  image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  themes: ["luxury-resorts", "romantic-getaway", "adventure-diving"],
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
        image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
      },
      afternoon: {
        text: "Déjeuner de bienvenue au restaurant de plage, détente sur la plage privée, exploration des installations du resort",
        image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
      },
      evening: {
        text: "Croisière au coucher du soleil avec cocktails, dîner romantique au restaurant sur pilotis",
        image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
      }
    },
    day2: {
      morning: "Séance de yoga tôt le matin, petit-déjeuner, excursion de snorkeling vers les récifs coralliens",
      afternoon: "Déjeuner au resort, soin spa pour deux, détente sur la plage",
      evening: "Tour de saut d'île en île, dîner au restaurant de plage avec musique live"
    },
    day3: {
      morning: "Excursion de plongée sous-marine (ou sports nautiques), buffet petit-déjeuner",
      afternoon: "Cabana de plage privée, déjeuner, massage en couple au spa",
      evening: "Excursion de pêche au coucher du soleil, préparation du dîner avec la prise fraîche, observation des étoiles"
    },
    day4: {
      morning: "Dernier moment sur la plage, petit-déjeuner, shopping de dernière minute pour souvenirs",
      afternoon: "Enregistrement de départ, transfert en hydravion vers l'aéroport",
      evening: "Vol de retour vers Abu Dhabi"
    }
  }
}

