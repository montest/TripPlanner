/**
 * Generates a personalized 4-day itinerary based on destination and selected activities
 * @param {Object} destination - The selected destination object
 * @param {Array} selectedActivities - Array of selected activity category names
 * @returns {Object} Formatted itinerary with highlighted activities
 */
export function generateItinerary(destination, selectedActivities) {
  if (!destination || !destination.itinerary) {
    return null
  }

  // Get activities that match user's preferences
  const matchingActivities = {}
  selectedActivities.forEach(category => {
    if (destination.activities[category]) {
      matchingActivities[category] = destination.activities[category]
    }
  })

  // Helper function to normalize time slot (supports both string and object format)
  const normalizeTimeSlot = (slot) => {
    if (typeof slot === 'string') {
      return { text: slot, image: null }
    }
    if (typeof slot === 'object' && slot !== null) {
      return {
        text: slot.text || '',
        image: slot.image || null
      }
    }
    return { text: '', image: null }
  }

  // Format the itinerary
  const formattedItinerary = {
    destination: destination.name,
    planName: destination.planName, // Include plan name if it exists
    image: destination.image, // Include image if it exists
    flightTime: destination.flightTime,
    description: destination.description,
    matchingActivities: matchingActivities,
    days: [
      {
        day: 1,
        morning: normalizeTimeSlot(destination.itinerary.day1.morning),
        afternoon: normalizeTimeSlot(destination.itinerary.day1.afternoon),
        evening: normalizeTimeSlot(destination.itinerary.day1.evening)
      },
      {
        day: 2,
        morning: normalizeTimeSlot(destination.itinerary.day2.morning),
        afternoon: normalizeTimeSlot(destination.itinerary.day2.afternoon),
        evening: normalizeTimeSlot(destination.itinerary.day2.evening)
      },
      {
        day: 3,
        morning: normalizeTimeSlot(destination.itinerary.day3.morning),
        afternoon: normalizeTimeSlot(destination.itinerary.day3.afternoon),
        evening: normalizeTimeSlot(destination.itinerary.day3.evening)
      },
      {
        day: 4,
        morning: normalizeTimeSlot(destination.itinerary.day4.morning),
        afternoon: normalizeTimeSlot(destination.itinerary.day4.afternoon),
        evening: normalizeTimeSlot(destination.itinerary.day4.evening)
      }
    ]
  }

  return formattedItinerary
}

