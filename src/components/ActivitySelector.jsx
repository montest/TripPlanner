import { useMemo } from 'react'
import DestinationCard from './DestinationCard'
import DestinationMap from './DestinationMap'

function ActivitySelector({ 
  allDestinations, 
  selectedTheme,
  selectedActivities, 
  cart,
  onAddToCart,
  onRemoveFromCart,
  onOpenCart,
  onBack 
}) {
  // Filter destinations based on selected theme
  const filteredDestinations = useMemo(() => {
    if (!allDestinations || allDestinations.length === 0) return []
    
    let filtered = []
    
    // Filter by theme
    if (selectedTheme) {
      filtered = allDestinations.filter(dest => {
        return dest.themes && dest.themes.includes(selectedTheme.id)
      })
    } else {
      filtered = allDestinations
    }

    // Sort alphabetically by name
    return filtered.sort((a, b) => {
      const nameA = a.name || ''
      const nameB = b.name || ''
      return nameA.localeCompare(nameB, 'fr', { sensitivity: 'base' })
    })
  }, [allDestinations, selectedTheme])

  const cartCount = cart.length
  const isCartFull = cartCount >= 3

  return (
    <div className="activity-selector">
      <div className="activity-selector-header">
        <button className="back-button" onClick={onBack}>
          ← Retour
        </button>
        {cartCount > 0 && (
          <button className="cart-icon-button" onClick={onOpenCart}>
            🛒 Panier
            <span className="cart-badge">{cartCount}/3</span>
          </button>
        )}
      </div>
      
      {selectedTheme ? (
        <div className="theme-title-section">
          <h2 className="theme-title">
            {selectedTheme.icon} {selectedTheme.name}
          </h2>
          <p className="theme-subtitle">
            Sélectionne jusqu'à 3 destinations à comparer (actuellement {cartCount}/3)
          </p>
        </div>
      ) : (
        <h2>
          Toutes les destinations disponibles ({cartCount}/3 sélectionnées)
        </h2>
      )}

      <div className="map-section">
        <DestinationMap destinations={filteredDestinations} />
      </div>

      <div className="destinations-section">
        <h3>
          {filteredDestinations.length > 0 
            ? selectedTheme
              ? `Destinations Correspondantes (${filteredDestinations.length})`
              : `Toutes les Destinations (${filteredDestinations.length})`
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
                inCart={cart.some(d => d.name === destination.name)}
                cartFull={isCartFull}
                onAddToCart={onAddToCart}
                onRemoveFromCart={onRemoveFromCart}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default ActivitySelector

