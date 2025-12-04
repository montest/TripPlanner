/**
 * Muscat, Oman Destination
 * 
 * Themes: religious-sites, traditional-culture, museums-history
 */

export default {
  name: "Muscat, Oman",
  flightTime: "1 hour 10 minutes",
  coordinates: { lat: 23.5859, lng: 58.4059 },
  image: "https://images.unsplash.com/photo-1559827260-dbea01e5e788?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  themes: ["religious-sites", "traditional-culture", "museums-history"],
  description: "Capitale omanaise avec forts, souks et côte époustouflante",
  activities: {
    "Culture & Musées": ["Grande Mosquée du Sultan Qaboos", "Opéra Royal", "Fort de Mutrah", "Bait Al Zubair"],
    "Gastronomie & Restaurants": ["Cuisine omanaise", "Fruits de mer", "Restaurants traditionnels", "Café arabe"],
    "Aventure & Sports": ["Observation des dauphins", "Snorkeling", "Tours du désert", "Randonnée en montagne"],
    "Shopping": ["Souq de Mutrah", "Artisanat traditionnel", "Argent omanais", "Encens"]
  },
  itinerary: {
    day1: {
      morning: "Arrivée à l'aéroport de Mascate, enregistrement à l'hôtel, petit-déjeuner",
      afternoon: "Visite de la Grande Mosquée du Sultan Qaboos, déjeuner au restaurant traditionnel",
      evening: "Exploration du Souq de Mutrah, promenade sur la corniche, dîner au restaurant de fruits de mer"
    },
    day2: {
      morning: "Petit-déjeuner, visite de l'Opéra Royal, Musée Bait Al Zubair",
      afternoon: "Déjeuner, visite du Fort de Mutrah, exploration de la vieille Mascate",
      evening: "Tour d'observation des dauphins, dîner au restaurant de plage"
    },
    day3: {
      morning: "Petit-déjeuner, excursion d'une journée à Nizwa (fort et souq), déjeuner omanais traditionnel",
      afternoon: "Retour à Mascate, visite du Palais Al Alam (vue extérieure), shopping",
      evening: "Dîner omanais traditionnel, visite d'un café local, narguilé"
    },
    day4: {
      morning: "Petit-déjeuner, shopping de dernière minute au Souq de Mutrah, visite de la plage",
      afternoon: "Enregistrement de départ, transfert vers l'aéroport",
      evening: "Vol de retour vers Abu Dhabi"
    }
  }
}

