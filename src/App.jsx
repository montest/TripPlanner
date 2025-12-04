import { useState } from 'react'
import ThematicSelector from './components/ThematicSelector'
import ActivitySelector from './components/ActivitySelector'
import ItineraryDisplay from './components/ItineraryDisplay'
import { allThemes, allDestinations } from './data/destinations/index.js'

function App() {
  const [step, setStep] = useState('thematic') // 'thematic' | 'activities' | 'itinerary'
  const [selectedTheme, setSelectedTheme] = useState(null)
  const [selectedActivities, setSelectedActivities] = useState([])
  const [selectedDestination, setSelectedDestination] = useState(null)

  const handleThemeSelect = (theme) => {
    setSelectedTheme(theme)
    setStep('activities')
  }

  const handleActivitiesSelect = (activities) => {
    setSelectedActivities(activities)
  }

  const handleDestinationSelect = (destination) => {
    setSelectedDestination(destination)
    setStep('itinerary')
  }

  const handleBack = () => {
    if (step === 'itinerary') {
      setStep('activities')
      setSelectedDestination(null)
    } else if (step === 'activities') {
      setStep('thematic')
      setSelectedActivities([])
      setSelectedTheme(null)
    }
  }

  const handleReset = () => {
    setStep('thematic')
    setSelectedTheme(null)
    setSelectedActivities([])
    setSelectedDestination(null)
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>🎂 Planificateur de Voyage d'Anniversaire</h1>
        <p className="subtitle">Planifiez votre escapade parfaite de 4 jours depuis Abu Dhabi</p>
      </header>

      <main className="app-main">
        {step === 'thematic' && (
          <ThematicSelector
            themes={allThemes}
            allDestinations={allDestinations}
            onSelect={handleThemeSelect}
          />
        )}

        {step === 'activities' && (
          <ActivitySelector
            allDestinations={allDestinations}
            selectedTheme={selectedTheme}
            selectedActivities={selectedActivities}
            onDestinationSelect={handleDestinationSelect}
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

