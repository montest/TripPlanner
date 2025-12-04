import { useMemo } from 'react'
import DestinationCard from './DestinationCard'
import DestinationMap from './DestinationMap'

function ActivitySelector({ 
  allDestinations, 
  selectedTheme,
  selectedActivities, 
  onDestinationSelect,
  onBack 
}) {
  // Filter destinations based on selected theme
  const filteredDestinations = useMemo(() => {
    if (!allDestinations || allDestinations.length === 0) return []
    
    // Filter by theme
    if (selectedTheme) {
      return allDestinations.filter(dest => {
        return dest.themes && dest.themes.includes(selectedTheme.id)
      })
    }

    return allDestinations
  }, [allDestinations, selectedTheme])

  return (
    <div className="activity-selector">
      <button className="back-button" onClick={onBack}>
        ← Retour
      </button>
      
      <h2>Choisissez Votre Destination</h2>
      <p className="instruction-text">
        {selectedTheme && (
          <span className="selected-theme-badge">
            Thème : {selectedTheme.name} {selectedTheme.icon}
          </span>
        )}
        <br />
        Sélectionnez une destination qui correspond à votre thème
      </p>

      <div className="map-section">
        <DestinationMap destinations={filteredDestinations} />
      </div>

      <div className="destinations-section">
        <h3>
          {filteredDestinations.length > 0 
            ? `Destinations Correspondantes (${filteredDestinations.length})`
            : `Aucune Destination Correspondante`}
        </h3>
        
        {filteredDestinations.length === 0 ? (
          <p className="no-results">
            {selectedTheme 
              ? `Aucune destination ne correspond au thème "${selectedTheme.name}". Retournez pour choisir un autre thème.`
              : 'Aucune destination disponible.'}
          </p>
        ) : (
          <div className="destinations-grid">
            {filteredDestinations.map((destination) => (
              <DestinationCard
                key={destination.name}
                destination={destination}
                selectedActivities={selectedActivities}
                onClick={() => onDestinationSelect(destination)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default ActivitySelector

