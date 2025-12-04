import DestinationMap from './DestinationMap'

function ThematicSelector({ themes, allDestinations, onSelect }) {
  if (!themes || themes.length === 0) {
    return null
  }

  return (
    <div className="thematic-selector">
      <h2>Choisissez Votre Thème</h2>
      <p className="instruction-text">
        Sélectionnez un thème pour votre voyage
      </p>

      <div className="map-section">
        <DestinationMap destinations={allDestinations || []} />
      </div>

      <div className="themes-grid">
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

