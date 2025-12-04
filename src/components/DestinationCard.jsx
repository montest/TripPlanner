function DestinationCard({ destination, selectedActivities, onClick }) {
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

  const displayName = destination.planName 
    ? `${destination.name} - ${destination.planName}`
    : destination.name

  return (
    <div className="destination-card" onClick={onClick}>
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
          <button className="select-button">Select This Destination</button>
        </div>
      </div>
    </div>
  )
}

export default DestinationCard

