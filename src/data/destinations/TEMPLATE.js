/**
 * Destination Template
 * 
 * Copy this file to create a new destination.
 * 
 * INSTRUCTIONS:
 * 1. Copy this file and rename it (e.g., "bali.js")
 * 2. You can export either:
 *    - A single plan object (for destinations with one plan)
 *    - An array of plans (for destinations with multiple plans, e.g., beach-centric vs cultural)
 * 3. Update the themes array - destinations can have multiple themes
 * 4. Fill in all the destination details
 * 5. Import it in src/data/destinations/index.js
 * 
 * MULTIPLE PLANS EXAMPLE:
 * If you want multiple plans for the same city (e.g., beach-centric vs cultural),
 * export an array like this:
 * 
 * export default [
 *   { name: "City", planName: "Beach Plan", themes: ["luxury-resorts"], ... },
 *   { name: "City", planName: "Cultural Plan", themes: ["historic-cultural"], ... }
 * ]
 */

// Single plan (most common case)
export default {
  // Destination name
  name: "Destination Name",
  
  // Plan name (optional) - use this if you have multiple plans for the same city
  // Example: "Beach-Centric", "Cultural Experience", "Historic Tour"
  // If omitted, the destination name will be used
  planName: undefined, // Optional: "Beach-Centric Plan"
  
  // Image URL (optional) - can be a URL or path to an image file
  // Examples:
  // - "https://example.com/image.jpg" (external URL)
  // - "/images/destinations/maldives.jpg" (local file in public folder)
  // - "https://unsplash.com/photos/..." (Unsplash or other image service)
  image: undefined, // Optional: "https://example.com/destination-image.jpg"
  
  // Flight time from Abu Dhabi (must be 4 hours or less)
  flightTime: "X hours",
  
  // Coordinates for map display (latitude, longitude)
  // Example: coordinates: { lat: 24.4539, lng: 54.3773 }
  coordinates: { lat: 0, lng: 0 },
  
  // Themes this destination matches (can be multiple)
  // Available themes: "luxury-resorts", "adventure-diving", "romantic-getaway", "island-hopping",
  // "historic-cultural", "modern-shopping", "food-nightlife", "architecture-art",
  // "ancient-wonders", "religious-sites", "traditional-culture", "museums-history"
  themes: ["luxury-resorts", "romantic-getaway"], // Example: multiple themes
  
  // Brief description of the destination
  description: "A beautiful description of the destination",
  
  // Activities organized by category
  activities: {
    "Relaxation & Spa": ["Activity 1", "Activity 2"],
    "Adventure & Sports": ["Activity 1", "Activity 2"],
    "Food & Dining": ["Activity 1", "Activity 2"],
    // Add more activity categories as needed
  },
  
  // 4-day itinerary
  // You can use either:
  // - Simple string format: "Activity description"
  // - Object format with image: { text: "Activity description", image: "https://..." }
  itinerary: {
    day1: {
      // Simple format (no image)
      morning: "Morning activity for day 1",
      // Or with image:
      afternoon: {
        text: "Afternoon activity for day 1",
        image: "https://example.com/afternoon-activity.jpg" // Optional
      },
      evening: "Evening activity for day 1"
    },
    day2: {
      morning: "Morning activity for day 2",
      afternoon: "Afternoon activity for day 2",
      evening: "Evening activity for day 2"
    },
    day3: {
      morning: "Morning activity for day 3",
      afternoon: "Afternoon activity for day 3",
      evening: "Evening activity for day 3"
    },
    day4: {
      morning: "Morning activity for day 4",
      afternoon: "Afternoon activity for day 4",
      evening: "Evening activity for day 4"
    }
  }
}

