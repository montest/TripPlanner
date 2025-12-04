import { useState } from 'react'
import { generateItinerary } from '../utils/itineraryGenerator'
import { sendItineraryEmail } from '../utils/emailService'
import { generateMarkdown, markdownToHtml } from '../utils/markdownGenerator'

function ItineraryDisplay({ destination, selectedActivities, onBack, onReset }) {
  const [isSending, setIsSending] = useState(false)
  const [emailStatus, setEmailStatus] = useState(null) // 'success', 'error', 'error: message', or null
  const itinerary = generateItinerary(destination, selectedActivities)

  if (!itinerary) {
    return (
      <div className="itinerary-display">
        <p>Aucun itinéraire disponible</p>
        <button onClick={onBack}>Retour</button>
      </div>
    )
  }

  const handlePrint = () => {
    // Generate markdown and convert to HTML
    const markdown = generateMarkdown(itinerary)
    const html = markdownToHtml(markdown)
    
    // Create a new window for printing
    const printWindow = window.open('', '_blank')
    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Itinéraire de Voyage d'Anniversaire - ${itinerary.destination}</title>
        <meta charset="UTF-8">
        <style>
          @page {
            size: A4;
            margin: 2.5cm 2cm;
          }
          
          * {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.7;
            color: #2d2d2d;
            max-width: 700px;
            margin: 0 auto;
            padding: 0;
          }
          
          h1 {
            font-size: 2.2rem;
            color: #ff6b9d;
            margin-top: 0;
            margin-bottom: 25px;
            border-bottom: 3px solid #ff6b9d;
            padding-bottom: 15px;
            page-break-after: avoid;
          }
          
          h2 {
            font-size: 1.8rem;
            color: #b886b3;
            margin-top: 40px;
            margin-bottom: 20px;
            page-break-after: avoid;
          }
          
          h2.day-heading {
            page-break-before: always;
            border-bottom: 2px solid #d4a5c7;
            padding-bottom: 10px;
          }
          
          /* Don't break before the first h2 after title */
          h1 + h2 {
            page-break-before: auto;
          }
          
          h1 + h2.day-heading {
            page-break-before: always;
          }
          
          h3 {
            font-size: 1.4rem;
            color: #d4a5c7;
            margin-top: 25px;
            margin-bottom: 12px;
            page-break-after: avoid;
          }
          
          p {
            margin: 12px 0;
            line-height: 1.8;
            font-size: 1rem;
          }
          
          ul {
            margin: 15px 0;
            padding-left: 30px;
          }
          
          li {
            margin: 8px 0;
            line-height: 1.6;
          }
          
          hr {
            border: none;
            border-top: 2px solid #e8d5e3;
            margin: 40px 0;
            page-break-after: avoid;
          }
          
          strong {
            color: #b886b3;
            font-weight: 600;
          }
          
          img {
            max-width: 100%;
            height: auto;
            border-radius: 8px;
            margin: 15px 0;
            page-break-inside: avoid;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          }
          
          /* Hero image for destination */
          img.hero-image {
            max-height: 400px;
            width: 100%;
            object-fit: cover;
            margin: 20px 0 30px 0;
            display: block;
          }
          
          .day-section {
            page-break-inside: avoid;
            margin-bottom: 30px;
          }
          
          /* Time slot containers with alternating image positions */
          .time-slot-container {
            display: flex;
            align-items: flex-start;
            gap: 20px;
            margin: 20px 0;
            page-break-inside: avoid;
          }
          
          .time-slot-container.image-left {
            flex-direction: row;
          }
          
          .time-slot-container.image-left .time-slot-image {
            order: 1;
          }
          
          .time-slot-container.image-left .time-slot-text {
            order: 2;
          }
          
          .time-slot-container.image-right {
            flex-direction: row;
          }
          
          .time-slot-container.image-right .time-slot-text {
            order: 1;
          }
          
          .time-slot-container.image-right .time-slot-image {
            order: 2;
          }
          
          .time-slot-container.no-image {
            flex-direction: column;
          }
          
          .time-slot-image {
            flex: 0 0 40%;
            min-width: 0;
          }
          
          .time-slot-image img {
            width: 100%;
            height: auto;
            max-height: 250px;
            object-fit: cover;
            border-radius: 8px;
            margin: 0;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          }
          
          .time-slot-text {
            flex: 1;
            min-width: 0;
          }
          
          .time-slot-text p {
            margin: 0;
            line-height: 1.8;
          }
          
          .time-slot-container.no-image .time-slot-text {
            flex: 1;
            width: 100%;
          }
          
          @media print {
            body {
              padding: 0;
            }
            
            /* Force page break before each "Day X" heading */
            h2.day-heading {
              page-break-before: always;
            }
            
            /* Don't break before first h2 (destination name) */
            h1 + h2:not(.day-heading) {
              page-break-before: auto;
            }
            
            h3 {
              page-break-after: avoid;
            }
            
            img {
              page-break-inside: avoid;
            }
            
            /* Hero destination image */
            img.hero-image {
              max-height: 350px;
              width: 100%;
              object-fit: cover;
              margin: 20px 0 30px 0;
            }
            
            /* Time slot containers */
            .time-slot-container {
              page-break-inside: avoid;
              margin: 15px 0;
            }
            
            .time-slot-image {
              flex: 0 0 35%;
            }
            
            .time-slot-image img {
              max-height: 200px;
            }
            
            .time-slot-text {
              flex: 1;
            }
          }
        </style>
      </head>
      <body>
        ${html}
      </body>
      </html>
    `)
    printWindow.document.close()
    
    // Wait for content to load, then print
    printWindow.onload = () => {
      setTimeout(() => {
        printWindow.print()
      }, 250)
    }
  }

  const handleSendEmail = async () => {
    setIsSending(true)
    setEmailStatus(null)
    
    try {
      const result = await sendItineraryEmail(itinerary)
      setEmailStatus('success')
      console.log('Email sent successfully to:', result.recipients)
    } catch (error) {
      console.error('Error sending email:', error)
      // Store error message for display
      setEmailStatus(`error: ${error.message || 'Unknown error'}`)
    } finally {
      setIsSending(false)
    }
  }

  return (
    <div className="itinerary-display">
      <div className="itinerary-header">
        <button className="back-button" onClick={onBack}>
          ← Retour
        </button>
        <div className="itinerary-actions">
          <button className="print-button" onClick={handlePrint}>
            🖨️ Imprimer l'Itinéraire
          </button>
          <button className="reset-button" onClick={onReset}>
            Recommencer
          </button>
        </div>
      </div>

      <div className="itinerary-content">
        {/* Title Page - Summary */}
        <div className="itinerary-title-page">
          {itinerary.image && (
            <div className="itinerary-hero-image">
              <img 
                src={itinerary.image} 
                alt={itinerary.destination}
                className="itinerary-image"
                onError={(e) => {
                  e.target.style.display = 'none'
                }}
              />
            </div>
          )}
          <div className="title-page-content">
            <h1 className="title-page-title">🎂 Itinéraire de Voyage d'Anniversaire</h1>
            <h2 className="title-page-destination">{itinerary.destination}</h2>
            {itinerary.planName && (
              <p className="title-page-plan">📋 {itinerary.planName}</p>
            )}
            <div className="title-page-info">
              <p className="flight-info">✈️ Temps de vol : {itinerary.flightTime} depuis Abu Dhabi</p>
              <p className="destination-description">{itinerary.description}</p>
            </div>

            {Object.keys(itinerary.matchingActivities).length > 0 && (
              <div className="title-page-activities">
                <h3>Activités Sélectionnées</h3>
                <div className="activities-summary">
                  {Object.entries(itinerary.matchingActivities).map(([category, activities]) => (
                    <div key={category} className="activity-category">
                      <strong>{category}:</strong>
                      <div className="activity-list">
                        {activities.map((activity, idx) => (
                          <span key={idx} className="activity-item">{activity}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="title-page-summary">
              <h3>Vue d'Ensemble du Voyage</h3>
              <p>Voyage de 4 Jours • {itinerary.days.length} Jours d'Aventure</p>
              <p className="footer-note">
                💝 Passez un merveilleux voyage d'anniversaire ! Cet itinéraire est un guide - n'hésitez pas à l'ajuster selon vos préférences.
              </p>
            </div>
          </div>
        </div>

        {/* Daily Itinerary Pages */}
        <div className="itinerary-days">
          {itinerary.days.map((day) => (
            <div key={day.day} className="itinerary-day">
              <div className="day-header">
                <h2>Jour {day.day}</h2>
                <p className="day-subtitle">{itinerary.destination}</p>
              </div>
              <div className="day-schedule">
                {/* Morning - image left, text right */}
                <div className="time-slot time-slot-morning image-left">
                  <div className="time-label">🌅 Matin</div>
                  <div className="time-slot-content">
                    {day.morning.image && (
                      <div className="time-slot-image">
                        <img 
                          src={day.morning.image} 
                          alt="Activité du matin"
                          className="activity-image"
                          onError={(e) => {
                            e.target.style.display = 'none'
                          }}
                        />
                      </div>
                    )}
                    <div className="time-content">{day.morning.text || day.morning}</div>
                  </div>
                </div>
                {/* Afternoon - image right, text left */}
                <div className="time-slot time-slot-afternoon image-right">
                  <div className="time-label">☀️ Après-midi</div>
                  <div className="time-slot-content">
                    <div className="time-content">{day.afternoon.text || day.afternoon}</div>
                    {day.afternoon.image && (
                      <div className="time-slot-image">
                        <img 
                          src={day.afternoon.image} 
                          alt="Activité de l'après-midi"
                          className="activity-image"
                          onError={(e) => {
                            e.target.style.display = 'none'
                          }}
                        />
                      </div>
                    )}
                  </div>
                </div>
                {/* Evening - image left, text right */}
                <div className="time-slot time-slot-evening image-left">
                  <div className="time-label">🌙 Soirée</div>
                  <div className="time-slot-content">
                    {day.evening.image && (
                      <div className="time-slot-image">
                        <img 
                          src={day.evening.image} 
                          alt="Activité du soir"
                          className="activity-image"
                          onError={(e) => {
                            e.target.style.display = 'none'
                          }}
                        />
                      </div>
                    )}
                    <div className="time-content">{day.evening.text || day.evening}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="itinerary-footer no-print">
          <div className="email-section">
            <button 
              className="send-email-button" 
              onClick={handleSendEmail}
              disabled={isSending}
            >
              {isSending ? '📧 Envoi en cours...' : '📧 Envoyer l\'Itinéraire par Email'}
            </button>
            
            {emailStatus === 'success' && (
              <p className="email-status success">
                ✅ Itinéraire envoyé avec succès !
              </p>
            )}
            
            {emailStatus && emailStatus.startsWith('error') && (
              <div className="email-status error">
                <p>❌ Échec de l'envoi de l'email.</p>
                <p className="error-details">
                  {emailStatus.includes(':') ? emailStatus.split(':')[1] : 'Veuillez vérifier votre configuration EmailJS. Consultez EMAILJS_SETUP.md pour les instructions de configuration.'}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItineraryDisplay

