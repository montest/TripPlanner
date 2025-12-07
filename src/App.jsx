import { useState } from 'react'
import ThematicSelector from './components/ThematicSelector'
import ActivitySelector from './components/ActivitySelector'
import DestinationComparison from './components/DestinationComparison'
import ItineraryDisplay from './components/ItineraryDisplay'
import { allThemes, allDestinations } from './data/destinations/index.js'

function App() {
  const [step, setStep] = useState('thematic') // 'thematic' | 'activities' | 'comparison' | 'itinerary'
  const [selectedTheme, setSelectedTheme] = useState(null)
  const [selectedActivities, setSelectedActivities] = useState([])
  const [cart, setCart] = useState([]) // Array of destinations, max 3
  const [selectedDestination, setSelectedDestination] = useState(null)

  const handleThemeSelect = (theme) => {
    setSelectedTheme(theme) // null for "all destinations"
    setStep('activities')
  }

  const handleActivitiesSelect = (activities) => {
    setSelectedActivities(activities)
  }

  const addToCart = (destination) => {
    if (cart.length < 3 && !cart.find(d => d.name === destination.name)) {
      setCart([...cart, destination])
    }
  }

  const removeFromCart = (destinationName) => {
    const newCart = cart.filter(d => d.name !== destinationName)
    setCart(newCart)
    // If cart becomes empty, go back to activities
    if (newCart.length === 0 && step === 'comparison') {
      setStep('activities')
    }
  }

  const openCart = () => {
    // Go directly to comparison page
    setStep('comparison')
  }

  const openComparison = () => {
    setStep('comparison')
  }

  const selectFinalDestination = (destination) => {
    setSelectedDestination(destination)
    setStep('itinerary')
  }

  const handleBack = () => {
    if (step === 'itinerary') {
      setStep('comparison')
      setSelectedDestination(null)
    } else if (step === 'comparison') {
      setStep('activities')
    } else if (step === 'activities') {
      setStep('thematic')
      setSelectedActivities([])
      setSelectedTheme(null)
      // Cart persists across theme changes
    }
  }

  const handleReset = () => {
    setStep('thematic')
    setSelectedTheme(null)
    setSelectedActivities([])
    setCart([])
    setSelectedDestination(null)
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>🐪 💙 🥔 Planifie ton voyage d'Anniversaire 🥔 💙 🐪</h1>
        <p className="subtitle">Petite escapade de 4 jours depuis Abu Dhabi</p>
      </header>

      <main className="app-main">
        {step === 'thematic' && (
          <ThematicSelector
            themes={allThemes}
            allDestinations={allDestinations}
            cart={cart}
            onSelect={handleThemeSelect}
            onOpenCart={openCart}
          />
        )}

        {step === 'activities' && (
          <ActivitySelector
            allDestinations={allDestinations}
            selectedTheme={selectedTheme}
            selectedActivities={selectedActivities}
            cart={cart}
            onAddToCart={addToCart}
            onRemoveFromCart={removeFromCart}
            onOpenCart={openCart}
            onBack={handleBack}
          />
        )}

        {step === 'comparison' && (
          <DestinationComparison
            destinations={cart}
            selectedActivities={selectedActivities}
            onSelect={selectFinalDestination}
            onRemoveFromCart={removeFromCart}
            onBack={handleBack}
          />
        )}

        {step === 'itinerary' && (
          <ItineraryDisplay
            destination={selectedDestination}
            selectedActivities={selectedActivities}
            onBack={handleBack}
            onReset={handleReset}
          />
        )}
      </main>
    </div>
  )
}

export default App

