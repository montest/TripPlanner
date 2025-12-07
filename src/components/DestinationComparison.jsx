import { generateItinerary } from '../utils/itineraryGenerator'

function DestinationComparison({ destinations, selectedActivities, onSelect, onRemoveFromCart, onBack }) {
  if (destinations.length === 0) {
    return (
      <div className="destination-comparison">
        <button className="back-button" onClick={onBack}>
          ← Retour
        </button>
        <p>Aucune destination à comparer</p>
      </div>
    )
  }

  const getThemesList = (themes) => {
    if (!themes || themes.length === 0) return 'Aucun'
    return themes.join(', ')
  }

  const getActivitiesList = (activities) => {
    if (!activities) return []
    const allActivities = []
    Object.values(activities).forEach(category => {
      allActivities.push(...category)
    })
    return allActivities.slice(0, 5) // Show max 5 activities
  }

  // Generate itineraries for all destinations and sort alphabetically
  const destinationData = destinations
    .map(destination => {
      const displayName = destination.planName 
        ? `${destination.name} - ${destination.planName}`
        : destination.name
      const activitiesList = getActivitiesList(destination.activities)
      const itinerary = generateItinerary(destination, selectedActivities || [])
      
      return {
        destination,
        displayName,
        activitiesList,
        itinerary
      }
    })
    .sort((a, b) => {
      const nameA = a.destination.name || ''
      const nameB = b.destination.name || ''
      return nameA.localeCompare(nameB, 'fr', { sensitivity: 'base' })
    })

  // Get max number of days (should be 4, but handle edge cases)
  const maxDays = Math.max(...destinationData.map(d => d.itinerary?.days?.length || 0), 4)

  return (
    <div className="destination-comparison">
      <button className="back-button" onClick={onBack}>
        ← Retour
      </button>
      
      <div className="comparison-header">
        <h2>Comparaison des Destinations</h2>
        <p>Sélectionnez la destination qui vous convient le mieux</p>
      </div>

      {/* Destination Headers */}
      <div className={`comparison-grid comparison-grid-${destinations.length} comparison-header-grid`}>
        {destinationData.map((data) => (
          <div key={data.destination.name} className="comparison-card-header">
            {data.destination.image && (
              <div className="comparison-image-container">
                <img 
                  src={data.destination.image} 
                  alt={data.displayName}
                  className="comparison-image"
                  onError={(e) => {
                    e.target.style.display = 'none'
                  }}
                />
              </div>
            )}
            
            <div className="comparison-header-section">
              <h3>{data.displayName}</h3>
              {data.destination.planName && (
                <span className="plan-name-badge">{data.destination.planName}</span>
              )}
              <span className="flight-time">✈️ {data.destination.flightTime}</span>
            </div>

            <div className="comparison-section">
              <h4>Description</h4>
              <p className="comparison-description">{data.destination.description}</p>
            </div>

            <div className="comparison-section">
              <h4>Thèmes</h4>
              <p className="comparison-themes">{getThemesList(data.destination.themes)}</p>
            </div>

            {data.activitiesList.length > 0 && (
              <div className="comparison-section">
                <h4>Activités</h4>
                <div className="comparison-activities">
                  {data.activitiesList.map((activity, idx) => (
                    <span key={idx} className="activity-tag">{activity}</span>
                  ))}
                </div>
              </div>
            )}

            <div className="comparison-card-actions">
              <button 
                className="select-destination-button"
                onClick={() => onSelect(data.destination)}
              >
                Choisir cette destination
              </button>
              <button 
                className="remove-from-cart-button"
                onClick={() => onRemoveFromCart(data.destination.name)}
              >
                Retirer du panier
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Itinerary Days - Grouped by time slot */}
      {Array.from({ length: maxDays }, (_, dayIndex) => {
        const dayNumber = dayIndex + 1
        return (
          <div key={dayNumber} className="comparison-day-section">
            <h3 className="comparison-day-section-title">Jour {dayNumber}</h3>
            
            {/* Morning - All destinations side by side */}
            <div className="comparison-time-slot-group">
              <h4 className="comparison-time-slot-group-title">🌅 Matin</h4>
              <div className={`comparison-grid comparison-grid-${destinations.length} comparison-time-slot-grid`}>
                {destinationData.map((data) => {
                  const day = data.itinerary?.days?.find(d => d.day === dayNumber)
                  if (!day) return <div key={data.destination.name} className="comparison-time-slot-card-empty"></div>
                  
                  return (
                    <div key={data.destination.name} className="comparison-time-slot-card">
                      <div className="comparison-time-slot-content">
                        {day.morning?.image && (
                          <div className="comparison-time-slot-image">
                            <img 
                              src={day.morning.image} 
                              alt="Activité du matin"
                              className="comparison-activity-image"
                              onError={(e) => {
                                e.target.style.display = 'none'
                              }}
                            />
                          </div>
                        )}
                        <p>{day.morning?.text || day.morning || ''}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Afternoon - All destinations side by side */}
            <div className="comparison-time-slot-group">
              <h4 className="comparison-time-slot-group-title">☀️ Après-midi</h4>
              <div className={`comparison-grid comparison-grid-${destinations.length} comparison-time-slot-grid`}>
                {destinationData.map((data) => {
                  const day = data.itinerary?.days?.find(d => d.day === dayNumber)
                  if (!day) return <div key={data.destination.name} className="comparison-time-slot-card-empty"></div>
                  
                  return (
                    <div key={data.destination.name} className="comparison-time-slot-card">
                      <div className="comparison-time-slot-content comparison-time-slot-afternoon-content">
                        <p>{day.afternoon?.text || day.afternoon || ''}</p>
                        {day.afternoon?.image && (
                          <div className="comparison-time-slot-image">
                            <img 
                              src={day.afternoon.image} 
                              alt="Activité de l'après-midi"
                              className="comparison-activity-image"
                              onError={(e) => {
                                e.target.style.display = 'none'
                              }}
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Evening - All destinations side by side */}
            <div className="comparison-time-slot-group">
              <h4 className="comparison-time-slot-group-title">🌙 Soirée</h4>
              <div className={`comparison-grid comparison-grid-${destinations.length} comparison-time-slot-grid`}>
                {destinationData.map((data) => {
                  const day = data.itinerary?.days?.find(d => d.day === dayNumber)
                  if (!day) return <div key={data.destination.name} className="comparison-time-slot-card-empty"></div>
                  
                  return (
                    <div key={data.destination.name} className="comparison-time-slot-card">
                      <div className="comparison-time-slot-content">
                        {day.evening?.image && (
                          <div className="comparison-time-slot-image">
                            <img 
                              src={day.evening.image} 
                              alt="Activité du soir"
                              className="comparison-activity-image"
                              onError={(e) => {
                                e.target.style.display = 'none'
                              }}
                            />
                          </div>
                        )}
                        <p>{day.evening?.text || day.evening || ''}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default DestinationComparison

