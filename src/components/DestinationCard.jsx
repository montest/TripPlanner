import { useState } from 'react'
import { generateItinerary } from '../utils/itineraryGenerator'
import { themeDefinitions } from '../data/destinations/index.js'

function DestinationCard({ destination, selectedActivities, inCart, cartFull, onAddToCart, onRemoveFromCart }) {
  const [showItineraryModal, setShowItineraryModal] = useState(false)
  
  const getMatchingActivities = () => {
    if (selectedActivities.length === 0) return []
    
    const matching = []
    selectedActivities.forEach(selected => {
      if (destination.activities[selected]) {
        matching.push(...destination.activities[selected])
      }
    })
    return matching.slice(0, 3) // Show max 3 matching activities
  }

  const matchingActivities = getMatchingActivities()
  const itinerary = generateItinerary(destination, selectedActivities || [])

  const displayName = destination.planName 
    ? `${destination.name} - ${destination.planName}`
    : destination.name

  const handleCardClick = (e) => {
    // Don't open modal if clicking on the button or footer area
    if (e.target.closest('.destination-footer') || e.target.closest('.select-button')) {
      return
    }
    setShowItineraryModal(true)
  }

  const handleButtonClick = (e) => {
    e.stopPropagation()
    if (inCart && onRemoveFromCart) {
      onRemoveFromCart(destination.name)
    } else if (!inCart && !cartFull && onAddToCart) {
      onAddToCart(destination)
    }
  }

  const handleCloseModal = (e) => {
    if (e) {
      e.stopPropagation()
    }
    setShowItineraryModal(false)
  }

  return (
    <>
      <div className="destination-card" onClick={handleCardClick} style={{ cursor: 'pointer' }}>
      {destination.image && (
        <div className="destination-image-container">
          <img 
            src={destination.image} 
            alt={displayName}
            className="destination-image"
            onError={(e) => {
              e.target.style.display = 'none'
            }}
          />
        </div>
      )}
      
      <div className="destination-card-content">
        <div className="destination-header">
          <h4>{displayName}</h4>
          <span className="flight-time">✈️ {destination.flightTime}</span>
        </div>
        
        {destination.planName && (
          <p className="plan-name-badge">{destination.planName}</p>
        )}
        
        <p className="destination-description">{destination.description}</p>
        
        {matchingActivities.length > 0 && (
          <div className="matching-activities">
            <strong>Matching activities:</strong>
            <div className="activity-tags">
              {matchingActivities.map((activity, idx) => (
                <span key={idx} className="activity-tag">{activity}</span>
              ))}
            </div>
          </div>
        )}
        
        <div className="destination-footer">
          <button 
            className={`select-button ${inCart ? 'in-cart' : ''} ${cartFull && !inCart ? 'disabled' : ''}`}
            onClick={handleButtonClick}
            disabled={cartFull && !inCart}
          >
            {inCart ? '✕ Retirer du panier' : cartFull ? 'Panier plein (3/3)' : 'Ajouter au panier'}
          </button>
        </div>
      </div>
      </div>

      {/* Itinerary Modal */}
      {showItineraryModal && itinerary && (
        <div className="itinerary-modal-overlay" onClick={handleCloseModal}>
          <div className="itinerary-modal" onClick={(e) => e.stopPropagation()}>
            <div className="itinerary-modal-header">
              <h3>📅 Itinéraire complet - {displayName}</h3>
              <button className="itinerary-modal-close" onClick={handleCloseModal}>×</button>
            </div>
            <div className="itinerary-modal-body">
              <div className="itinerary-preview">
                <div className="itinerary-preview-header">
                  <p className="flight-info">✈️ Temps de vol : {itinerary.flightTime} depuis Abu Dhabi</p>
                </div>

                {/* Description Section */}
                <div className="itinerary-preview-section">
                  <h4>Description</h4>
                  <p className="destination-description">{itinerary.description}</p>
                </div>

                {/* Themes Section */}
                {destination.themes && destination.themes.length > 0 && (
                  <div className="itinerary-preview-section">
                    <h4>Thèmes</h4>
                    <div className="themes-list-modal">
                      {destination.themes.map((themeId, idx) => {
                        const theme = themeDefinitions[themeId]
                        return theme ? (
                          <span key={idx} className="theme-badge-modal">
                            {theme.icon} {theme.name}
                          </span>
                        ) : null
                      })}
                    </div>
                  </div>
                )}

                {/* Activities Section */}
                {destination.activities && Object.keys(destination.activities).length > 0 && (
                  <div className="itinerary-preview-section">
                    <h4>Activités</h4>
                    <div className="activities-list-modal">
                      {Object.entries(destination.activities).map(([category, activities]) => (
                        <div key={category} className="activity-category-modal">
                          <strong>{category}:</strong>
                          <div className="activity-items-modal">
                            {activities.map((activity, idx) => (
                              <span key={idx} className="activity-item-modal">{activity}</span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="itinerary-preview-days">
                  {itinerary.days.map((day) => (
                    <div key={day.day} className="itinerary-preview-day">
                      <h4 className="day-preview-title">Jour {day.day}</h4>
                      <div className="day-preview-schedule">
                        {/* Morning - image left, text right */}
                        <div className="time-slot-preview time-slot-preview-morning">
                          <strong>🌅 Matin :</strong>
                          <div className="time-slot-preview-content">
                            {day.morning?.image && (
                              <div className="time-slot-preview-image">
                                <img 
                                  src={day.morning.image} 
                                  alt="Activité du matin"
                                  className="preview-activity-image"
                                  onError={(e) => {
                                    e.target.style.display = 'none'
                                  }}
                                />
                              </div>
                            )}
                            <p>{day.morning?.text || day.morning || ''}</p>
                          </div>
                        </div>
                        {/* Afternoon - text left, image right */}
                        <div className="time-slot-preview time-slot-preview-afternoon">
                          <strong>☀️ Après-midi :</strong>
                          <div className="time-slot-preview-content time-slot-preview-afternoon-content">
                            <p>{day.afternoon?.text || day.afternoon || ''}</p>
                            {day.afternoon?.image && (
                              <div className="time-slot-preview-image">
                                <img 
                                  src={day.afternoon.image} 
                                  alt="Activité de l'après-midi"
                                  className="preview-activity-image"
                                  onError={(e) => {
                                    e.target.style.display = 'none'
                                  }}
                                />
                              </div>
                            )}
                          </div>
                        </div>
                        {/* Evening - image left, text right */}
                        <div className="time-slot-preview time-slot-preview-evening">
                          <strong>🌙 Soirée :</strong>
                          <div className="time-slot-preview-content">
                            {day.evening?.image && (
                              <div className="time-slot-preview-image">
                                <img 
                                  src={day.evening.image} 
                                  alt="Activité du soir"
                                  className="preview-activity-image"
                                  onError={(e) => {
                                    e.target.style.display = 'none'
                                  }}
                                />
                              </div>
                            )}
                            <p>{day.evening?.text || day.evening || ''}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="itinerary-modal-footer">
              <button 
                className={`itinerary-modal-cart-button ${inCart ? 'in-cart' : ''} ${cartFull && !inCart ? 'disabled' : ''}`}
                onClick={(e) => {
                  e.stopPropagation()
                  handleButtonClick(e)
                }}
                disabled={cartFull && !inCart}
              >
                {inCart ? '✕ Retirer du panier' : cartFull ? 'Panier plein (3/3)' : '🛒 Ajouter au panier'}
              </button>
              <button className="itinerary-modal-close-button" onClick={handleCloseModal}>
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default DestinationCard

