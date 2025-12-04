/**
 * Destination Data for Birthday Trip Planner
 * 
 * This file contains all destinations within 3 hours flight from Abu Dhabi.
 * 
 * TO ADD A NEW DESTINATION:
 * 1. Find the appropriate destination type (beach, city, or culture)
 * 2. Copy an existing destination object
 * 3. Fill in the details (name, flightTime, description, activities, itinerary)
 * 4. Add it to the destinations array
 * 
 * TO ADD A NEW DESTINATION TYPE:
 * 1. Copy an entire destination type object
 * 2. Change the id, name, and icon
 * 3. Add your destinations array
 * 4. Add it to the destinationTypes array
 */

export const destinationTypes = [
  {
    id: "beach",
    name: "Beach & Relaxation",
    icon: "🏖️",
    themes: [
      { id: "luxury-resorts", name: "Luxury Resorts", icon: "🏝️" },
      { id: "adventure-diving", name: "Adventure & Diving", icon: "🤿" },
      { id: "romantic-getaway", name: "Romantic Getaway", icon: "💕" },
      { id: "island-hopping", name: "Island Hopping", icon: "⛵" }
    ],
    destinations: [
      {
        name: "Maldives",
        flightTime: "3 hours",
        themes: ["luxury-resorts", "romantic-getaway", "adventure-diving"],
        description: "Paradise islands with crystal clear waters, overwater villas, and world-class diving",
        activities: {
          "Relaxation & Spa": ["Beach lounging", "Spa treatments", "Sunset cruises", "Yoga sessions"],
          "Adventure & Sports": ["Snorkeling", "Scuba diving", "Water sports", "Island hopping"],
          "Food & Dining": ["Beachfront dining", "Seafood restaurants", "Romantic dinners", "Resort buffets"]
        },
        itinerary: {
          day1: {
            morning: "Arrival at Malé airport, seaplane transfer to resort, check-in at overwater villa",
            afternoon: "Welcome lunch at beach restaurant, relax on private beach, explore resort facilities",
            evening: "Sunset cruise with cocktails, romantic dinner at overwater restaurant"
          },
          day2: {
            morning: "Early morning yoga session, breakfast, snorkeling trip to coral reefs",
            afternoon: "Lunch at resort, spa treatment for two, beach relaxation",
            evening: "Island hopping tour, dinner at beachside restaurant with live music"
          },
          day3: {
            morning: "Scuba diving excursion (or water sports), breakfast buffet",
            afternoon: "Private beach cabana, lunch, couples massage at spa",
            evening: "Sunset fishing trip, fresh catch dinner preparation, stargazing"
          },
          day4: {
            morning: "Final beach time, breakfast, last-minute souvenir shopping",
            afternoon: "Check-out, seaplane transfer to airport",
            evening: "Flight back to Abu Dhabi"
          }
        }
      },
      {
        name: "Seychelles",
        flightTime: "3 hours",
        themes: ["island-hopping", "romantic-getaway", "adventure-diving"],
        description: "Pristine beaches, granite boulders, and lush tropical forests",
        activities: {
          "Relaxation & Spa": ["Beach relaxation", "Spa treatments", "Nature walks", "Beach picnics"],
          "Adventure & Sports": ["Hiking", "Snorkeling", "Kayaking", "Island exploration"],
          "Food & Dining": ["Creole cuisine", "Beachfront dining", "Fresh seafood", "Tropical cocktails"]
        },
        itinerary: {
          day1: {
            morning: "Arrival at Mahé airport, transfer to resort, check-in",
            afternoon: "Welcome drink, beach exploration, lunch at resort",
            evening: "Sunset viewing at Beau Vallon Beach, dinner at beachfront restaurant"
          },
          day2: {
            morning: "Breakfast, visit to Anse Lazio (one of world's best beaches), snorkeling",
            afternoon: "Lunch, nature walk in Vallée de Mai (UNESCO site), coconut tasting",
            evening: "Return to resort, spa session, romantic dinner"
          },
          day3: {
            morning: "Early breakfast, island hopping tour to Praslin and La Digue",
            afternoon: "Lunch on La Digue, visit to Anse Source d'Argent beach, photo session",
            evening: "Return to resort, sunset cruise, Creole dinner"
          },
          day4: {
            morning: "Final beach time, breakfast, souvenir shopping at local markets",
            afternoon: "Check-out, transfer to airport",
            evening: "Flight back to Abu Dhabi"
          }
        }
      },
      {
        name: "Goa, India",
        flightTime: "2.5 hours",
        themes: ["adventure-diving", "romantic-getaway"],
        description: "Tropical beaches, Portuguese heritage, and vibrant culture",
        activities: {
          "Relaxation & Spa": ["Beach lounging", "Ayurvedic spa", "Beach yoga", "Sunset watching"],
          "Adventure & Sports": ["Water sports", "Dolphin watching", "Parasailing", "Beach volleyball"],
          "Food & Dining": ["Goan cuisine", "Beach shacks", "Seafood", "Portuguese-influenced dishes"],
          "Culture & Museums": ["Old Goa churches", "Portuguese architecture", "Spice plantations"]
        },
        itinerary: {
          day1: {
            morning: "Arrival at Goa airport, transfer to beach resort, check-in",
            afternoon: "Welcome lunch, beach time at Calangute or Baga Beach, explore resort",
            evening: "Sunset at Anjuna Beach, dinner at beach shack, night market visit"
          },
          day2: {
            morning: "Breakfast, visit to Old Goa (Basilica of Bom Jesus, Se Cathedral)",
            afternoon: "Lunch, spice plantation tour, traditional Goan cooking demo",
            evening: "Return to beach, sunset cruise, dinner at Portuguese restaurant"
          },
          day3: {
            morning: "Early morning dolphin watching tour, breakfast on boat",
            afternoon: "Water sports (parasailing, jet skiing), beach relaxation, lunch",
            evening: "Ayurvedic spa session, beachside dinner with live music"
          },
          day4: {
            morning: "Final beach time, breakfast, souvenir shopping at local markets",
            afternoon: "Check-out, visit to Fort Aguada, transfer to airport",
            evening: "Flight back to Abu Dhabi"
          }
        }
      }
    ]
  },
  {
    id: "city",
    name: "City & Urban",
    icon: "🏙️",
    themes: [
      { id: "historic-cultural", name: "Historic & Cultural", icon: "🏛️" },
      { id: "modern-shopping", name: "Modern & Shopping", icon: "🛍️" },
      { id: "food-nightlife", name: "Food & Nightlife", icon: "🍽️" },
      { id: "architecture-art", name: "Architecture & Art", icon: "🎨" }
    ],
    destinations: [
      {
        name: "Istanbul, Turkey",
        flightTime: "3 hours",
        themes: ["historic-cultural", "architecture-art", "food-nightlife"],
        description: "Where East meets West - historic sites, vibrant bazaars, and stunning architecture",
        activities: {
          "Culture & Museums": ["Hagia Sophia", "Blue Mosque", "Topkapi Palace", "Grand Bazaar"],
          "Food & Dining": ["Turkish cuisine", "Street food", "Bosphorus dining", "Traditional restaurants"],
          "Nightlife & Entertainment": ["Rooftop bars", "Turkish baths", "Bosphorus cruises", "Cultural shows"],
          "Shopping": ["Grand Bazaar", "Spice Bazaar", "Designer boutiques", "Turkish carpets"]
        },
        itinerary: {
          day1: {
            morning: "Arrival at Istanbul airport, transfer to hotel, check-in, breakfast",
            afternoon: "Visit Hagia Sophia, Blue Mosque, lunch at traditional restaurant",
            evening: "Explore Grand Bazaar, dinner at rooftop restaurant with Bosphorus view"
          },
          day2: {
            morning: "Breakfast, visit Topkapi Palace, Harem section tour",
            afternoon: "Lunch, Bosphorus cruise, visit to Spice Bazaar",
            evening: "Traditional Turkish bath (hammam), dinner at local restaurant, night walk"
          },
          day3: {
            morning: "Breakfast, visit Galata Tower, explore Galata and Karaköy neighborhoods",
            afternoon: "Lunch, visit Dolmabahçe Palace, walk along Bosphorus",
            evening: "Dinner cruise on Bosphorus, Turkish cultural show, nightlife in Beyoğlu"
          },
          day4: {
            morning: "Breakfast, last-minute shopping at Grand Bazaar or Spice Bazaar",
            afternoon: "Check-out, visit to Basilica Cistern, transfer to airport",
            evening: "Flight back to Abu Dhabi"
          }
        }
      },
      {
        name: "Mumbai, India",
        flightTime: "2.5 hours",
        themes: ["modern-shopping", "food-nightlife", "architecture-art"],
        description: "Bustling metropolis with Bollywood glamour, historic sites, and amazing street food",
        activities: {
          "Culture & Museums": ["Gateway of India", "Elephanta Caves", "Mumbai heritage walks", "Art galleries"],
          "Food & Dining": ["Street food tours", "Fine dining", "Seafood", "Maharashtrian cuisine"],
          "Nightlife & Entertainment": ["Bollywood tours", "Nightlife in Bandra", "Marine Drive", "Theater shows"],
          "Shopping": ["Colaba Causeway", "Chor Bazaar", "High-end malls", "Local markets"]
        },
        itinerary: {
          day1: {
            morning: "Arrival at Mumbai airport, check-in at hotel, breakfast",
            afternoon: "Visit Gateway of India, explore Colaba, lunch at famous restaurant",
            evening: "Marine Drive sunset, dinner at fine dining restaurant, night walk"
          },
          day2: {
            morning: "Breakfast, ferry to Elephanta Caves (UNESCO site), explore cave temples",
            afternoon: "Return to city, lunch, visit Chhatrapati Shivaji Terminus (heritage building)",
            evening: "Street food tour in Colaba, visit to art gallery, dinner"
          },
          day3: {
            morning: "Breakfast, Bollywood studio tour (if available), visit Bandra area",
            afternoon: "Lunch, shopping at Colaba Causeway or high-end malls",
            evening: "Sunset at Bandra-Worli Sea Link, dinner at rooftop restaurant, nightlife in Bandra"
          },
          day4: {
            morning: "Breakfast, last-minute shopping at Chor Bazaar or local markets",
            afternoon: "Check-out, visit to Haji Ali Dargah or Sanjay Gandhi National Park, transfer to airport",
            evening: "Flight back to Abu Dhabi"
          }
        }
      }
    ]
  },
  {
    id: "culture",
    name: "Culture & History",
    icon: "🏛️",
    themes: [
      { id: "ancient-wonders", name: "Ancient Wonders", icon: "🔺" },
      { id: "religious-sites", name: "Religious Sites", icon: "🕌" },
      { id: "traditional-culture", name: "Traditional Culture", icon: "🎭" },
      { id: "museums-history", name: "Museums & History", icon: "📜" }
    ],
    destinations: [
      {
        name: "Cairo, Egypt",
        flightTime: "3 hours",
        themes: ["ancient-wonders", "museums-history", "religious-sites"],
        description: "Ancient wonders, pyramids, and rich Egyptian history",
        activities: {
          "Culture & Museums": ["Pyramids of Giza", "Egyptian Museum", "Khan el-Khalili", "Islamic Cairo"],
          "Food & Dining": ["Egyptian cuisine", "Traditional restaurants", "Street food", "Nile dining"],
          "Adventure & Sports": ["Camel rides", "Nile cruises", "Desert tours", "Pyramid exploration"],
          "Shopping": ["Khan el-Khalili bazaar", "Papyrus shops", "Spice markets", "Traditional crafts"]
        },
        itinerary: {
          day1: {
            morning: "Arrival at Cairo airport, check-in at hotel, breakfast",
            afternoon: "Visit Pyramids of Giza and Sphinx, camel ride, lunch",
            evening: "Sound and Light show at pyramids, traditional Egyptian dinner"
          },
          day2: {
            morning: "Breakfast, visit Egyptian Museum (Tutankhamun treasures), explore exhibits",
            afternoon: "Lunch, visit Khan el-Khalili bazaar, shopping for souvenirs",
            evening: "Nile dinner cruise with traditional entertainment, felucca ride"
          },
          day3: {
            morning: "Breakfast, visit Islamic Cairo (Al-Azhar Mosque, Al-Muizz Street)",
            afternoon: "Lunch, visit Coptic Cairo (Hanging Church, Coptic Museum)",
            evening: "Traditional Egyptian dinner, visit to local café, shisha experience"
          },
          day4: {
            morning: "Breakfast, optional visit to Saqqara or Memphis, last-minute shopping",
            afternoon: "Check-out, visit to Citadel of Saladin, transfer to airport",
            evening: "Flight back to Abu Dhabi"
          }
        }
      },
      {
        name: "Petra, Jordan",
        flightTime: "2.5 hours (to Amman)",
        themes: ["ancient-wonders", "traditional-culture"],
        description: "Ancient Nabatean city carved into rose-red cliffs, one of the New 7 Wonders",
        activities: {
          "Culture & Museums": ["Petra archaeological site", "Petra Museum", "Little Petra", "Bedouin culture"],
          "Adventure & Sports": ["Hiking in Petra", "Camel rides", "Desert exploration", "Mountain climbing"],
          "Food & Dining": ["Jordanian cuisine", "Bedouin meals", "Traditional restaurants", "Desert dining"],
          "Shopping": ["Local crafts", "Petra souvenirs", "Bedouin jewelry", "Traditional items"]
        },
        itinerary: {
          day1: {
            morning: "Arrival at Amman airport, transfer to Petra (3 hours), check-in at hotel",
            afternoon: "Lunch, first visit to Petra (entrance through Siq, Treasury view)",
            evening: "Traditional Jordanian dinner, rest after travel"
          },
          day2: {
            morning: "Early breakfast, full day in Petra (Treasury, Monastery, Royal Tombs)",
            afternoon: "Lunch in Petra, continue exploration, visit High Place of Sacrifice",
            evening: "Petra by Night experience (if available), dinner at hotel"
          },
          day3: {
            morning: "Breakfast, visit Little Petra, explore nearby archaeological sites",
            afternoon: "Lunch, optional Wadi Rum desert tour or hiking in Petra mountains",
            evening: "Traditional Bedouin dinner, cultural show, stargazing"
          },
          day4: {
            morning: "Breakfast, last visit to Petra or souvenir shopping",
            afternoon: "Check-out, transfer to Amman airport (3 hours)",
            evening: "Flight back to Abu Dhabi"
          }
        }
      },
      {
        name: "Muscat, Oman",
        flightTime: "1 hour",
        themes: ["religious-sites", "traditional-culture", "museums-history"],
        description: "Omani capital with forts, souks, and stunning coastline",
        activities: {
          "Culture & Museums": ["Sultan Qaboos Grand Mosque", "Royal Opera House", "Mutrah Fort", "Bait Al Zubair"],
          "Food & Dining": ["Omani cuisine", "Seafood", "Traditional restaurants", "Arabic coffee"],
          "Adventure & Sports": ["Dolphin watching", "Snorkeling", "Desert tours", "Mountain hiking"],
          "Shopping": ["Mutrah Souq", "Traditional crafts", "Omani silver", "Frankincense"]
        },
        itinerary: {
          day1: {
            morning: "Arrival at Muscat airport, check-in at hotel, breakfast",
            afternoon: "Visit Sultan Qaboos Grand Mosque, lunch at traditional restaurant",
            evening: "Explore Mutrah Souq, corniche walk, dinner at seafood restaurant"
          },
          day2: {
            morning: "Breakfast, visit Royal Opera House, Bait Al Zubair Museum",
            afternoon: "Lunch, visit Mutrah Fort, explore old Muscat area",
            evening: "Dolphin watching tour, dinner at beachfront restaurant"
          },
          day3: {
            morning: "Breakfast, day trip to Nizwa (fort and souq), traditional Omani lunch",
            afternoon: "Return to Muscat, visit Al Alam Palace (outside view), shopping",
            evening: "Traditional Omani dinner, visit to local café, shisha"
          },
          day4: {
            morning: "Breakfast, last-minute shopping at Mutrah Souq, visit to beach",
            afternoon: "Check-out, transfer to airport",
            evening: "Flight back to Abu Dhabi"
          }
        }
      },
      {
        name: "Colombo, Sri Lanka",
        flightTime: "3 hours",
        themes: ["religious-sites", "traditional-culture", "museums-history"],
        description: "Vibrant capital with colonial architecture, temples, and rich culture",
        activities: {
          "Culture & Museums": ["Gangaramaya Temple", "National Museum", "Colonial architecture", "Buddhist temples"],
          "Food & Dining": ["Sri Lankan cuisine", "Street food", "Seafood", "Traditional curries"],
          "Adventure & Sports": ["City tours", "Beach activities", "Shopping", "Cultural shows"],
          "Shopping": ["Pettah Market", "Handicrafts", "Gems and jewelry", "Spices"]
        },
        itinerary: {
          day1: {
            morning: "Arrival at Colombo airport, check-in at hotel, breakfast",
            afternoon: "Visit Gangaramaya Temple, explore Pettah Market, lunch",
            evening: "Colonial architecture walk, dinner at fine dining restaurant, Galle Face Green"
          },
          day2: {
            morning: "Breakfast, visit National Museum, explore Fort area",
            afternoon: "Lunch, visit Independence Square, shopping at Odel or Barefoot",
            evening: "Traditional Sri Lankan dinner, cultural dance show"
          },
          day3: {
            morning: "Breakfast, day trip to Kandy (Temple of the Tooth, Royal Botanical Gardens)",
            afternoon: "Lunch in Kandy, return to Colombo, beach time",
            evening: "Seafood dinner, nightlife in Colombo"
          },
          day4: {
            morning: "Breakfast, last-minute shopping for spices and handicrafts",
            afternoon: "Check-out, visit to beach or final city exploration, transfer to airport",
            evening: "Flight back to Abu Dhabi"
          }
        }
      }
    ]
  }
];

