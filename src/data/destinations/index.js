/**
 * Destination Index
 * 
 * This file automatically imports all destinations and provides access to all themes.
 * 
 * Theme Definitions:
 * - Themes are refined topics for destinations (luxury-resorts, historic-cultural, etc.)
 */

// Import all destinations
// import beirut from './beirut.js'
import maldives from './maldives.js'
import seychelles from './seychelles.js'
import goa from './goa.js'
import istanbul from './istanbul.js'
import mumbai from './mumbai.js'
import cairo from './cairo.js'
import petra from './petra.js'
import muscat from './muscat.js'
import colombo from './colombo.js'
import doha from './doha.js'
import riyadh from './riyadh.js'
import amman from './amman.js'
import baku from './baku.js'

// Helper function to normalize destinations (handle both single plans and arrays of plans)
function normalizeDestinations(dest) {
  // If it's an array, return it as-is (multiple plans)
  if (Array.isArray(dest)) {
    return dest
  }
  // If it's a single object, wrap it in an array
  return [dest]
}

// All destinations (can be single plans or arrays of plans)
const allDestinationsRaw = [
  maldives,
  seychelles,
  goa,
  istanbul,
  mumbai,
  cairo,
  petra,
  muscat,
  colombo,
  doha,
  riyadh,
  amman,
  // beirut,
  baku
]

// Flatten all destinations (convert single plans to arrays, then flatten)
const allDestinations = allDestinationsRaw.flatMap(normalizeDestinations)

// Theme definitions - all available themes
const themeDefinitions = {
  "luxury-resorts": { id: "luxury-resorts", name: "Résidences de Luxe", icon: "🏝️" },
  "adventure-diving": { id: "adventure-diving", name: "Aventure & Plongée", icon: "🤿" },
  "romantic-getaway": { id: "romantic-getaway", name: "Évasion Romantique", icon: "💕" },
  "island-hopping": { id: "island-hopping", name: "Saut d'Île en Île", icon: "⛵" },
  "historic-cultural": { id: "historic-cultural", name: "Historique & Culturel", icon: "🏛️" },
  "modern-shopping": { id: "modern-shopping", name: "Moderne & Shopping", icon: "🛍️" },
  "food-nightlife": { id: "food-nightlife", name: "Gastronomie & Vie Nocturne", icon: "🍽️" },
  "architecture-art": { id: "architecture-art", name: "Architecture & Art", icon: "🎨" },
  "ancient-wonders": { id: "ancient-wonders", name: "Merveilles Antiques", icon: "🔺" },
  "traditional-culture": { id: "traditional-culture", name: "Culture Traditionnelle", icon: "🎭" }
}

// Extract all unique themes from all destinations and create theme array
function getAllThemes() {
  const themeSet = new Set()
  
  // Collect all unique theme IDs from destinations
  allDestinations.forEach(dest => {
    if (dest.themes && Array.isArray(dest.themes)) {
      dest.themes.forEach(themeId => {
        themeSet.add(themeId)
      })
    }
  })
  
  // Convert to array of theme objects
  return Array.from(themeSet)
    .map(themeId => themeDefinitions[themeId])
    .filter(theme => theme !== undefined)
    .sort((a, b) => a.name.localeCompare(b.name))
}

// Export all themes
export const allThemes = getAllThemes()

// Export all destinations
export { allDestinations }

