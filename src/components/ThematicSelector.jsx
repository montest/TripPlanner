import DestinationMap from './DestinationMap'

function ThematicSelector({ themes, allDestinations, onSelect }) {
  if (!themes || themes.length === 0) {
    return null
  }

  return (
    <div className="thematic-selector">
      <h2>Sélectionne un thème pour ton voyage</h2>
      {/* add a space between the title and the map */}
      <div style={{ height: '20px' }}></div>

      <div className="map-section">
        <DestinationMap destinations={allDestinations || []} />
      </div>

      <div className="themes-grid">
        {/* All Destinations Card */}
        <div
          className="theme-card all-destinations-theme-card"
          onClick={() => onSelect(null)}
        >
          <div className="theme-icon">🌍</div>
          <h3>Toutes les destinations</h3>
        </div>
        
        {themes.map((theme) => (
          <div
            key={theme.id}
            className="theme-card"
            onClick={() => onSelect(theme)}
          >
            <div className="theme-icon">{theme.icon}</div>
            <h3>{theme.name}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ThematicSelector

