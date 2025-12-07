import emailjs from '@emailjs/browser'
import { emailjsConfig, emailRecipients } from '../config/emailConfig'
import { themeDefinitions } from '../data/destinations/index.js'

/**
 * Formats itinerary as HTML email content
 */
export function formatItineraryAsEmail(itinerary) {
  // Escape HTML to prevent XSS
  const escapeHtml = (text) => {
    if (!text) return ''
    return String(text)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;')
  }

  let html = `
    <h2 style="color: #ff6b9d; font-size: 24px; margin-bottom: 15px;">🐪 💙 🥔 Itinéraire de Voyage d'Anniversaire 🥔 💙 🐪 : ${escapeHtml(itinerary.destination)}</h2>
    <p style="margin: 10px 0;"><strong>✈️ Temps de vol :</strong> ${escapeHtml(itinerary.flightTime)} depuis Abu Dhabi</p>
  `
  
  // Description
  html += `<h3 style="color: #b886b3; margin-top: 20px; margin-bottom: 10px;">Description</h3>`
  html += `<p style="margin: 10px 0;">${escapeHtml(itinerary.description)}</p>`
  
  // Themes
  if (itinerary.themes && itinerary.themes.length > 0) {
    html += `<h3 style="color: #b886b3; margin-top: 20px; margin-bottom: 10px;">Thèmes</h3>`
    html += `<ul style="margin: 10px 0; padding-left: 20px;">`
    itinerary.themes.forEach((themeId) => {
      const theme = themeDefinitions[themeId]
      if (theme) {
        html += `<li style="margin: 5px 0;">${escapeHtml(theme.icon)} ${escapeHtml(theme.name)}</li>`
      }
    })
    html += `</ul>`
  }
  
  // All Activities
  if (itinerary.allActivities && Object.keys(itinerary.allActivities).length > 0) {
    html += `<h3 style="color: #b886b3; margin-top: 20px; margin-bottom: 10px;">Activités Disponibles</h3>`
    Object.entries(itinerary.allActivities).forEach(([category, activities]) => {
      html += `<p style="margin: 8px 0;"><strong>${escapeHtml(category)}:</strong> ${activities.map(a => escapeHtml(a)).join(', ')}</p>`
    })
  }
  
  // Selected Activities (if different from all activities)
  if (itinerary.matchingActivities && Object.keys(itinerary.matchingActivities).length > 0) {
    html += `<h3 style="color: #b886b3; margin-top: 20px; margin-bottom: 10px;">Activités Sélectionnées</h3>`
    html += `<ul style="margin: 10px 0; padding-left: 20px;">`
    Object.entries(itinerary.matchingActivities).forEach(([category, activities]) => {
      html += `<li style="margin: 5px 0;"><strong>${escapeHtml(category)}:</strong> ${activities.map(a => escapeHtml(a)).join(', ')}</li>`
    })
    html += `</ul>`
  }
  
  html += `<h3 style="color: #b886b3; margin-top: 25px; margin-bottom: 15px;">Itinéraire de 4 Jours :</h3>`
  
  itinerary.days.forEach(day => {
    // The itinerary generator normalizes all time slots to { text, image } format
    const morningText = day.morning?.text || day.morning || ''
    const afternoonText = day.afternoon?.text || day.afternoon || ''
    const eveningText = day.evening?.text || day.evening || ''
    
    const morningImage = day.morning?.image || null
    const afternoonImage = day.afternoon?.image || null
    const eveningImage = day.evening?.image || null
    
    html += `
      <div style="margin-bottom: 20px; padding: 15px; background-color: #f5e6f0; border-radius: 8px; border-left: 4px solid #ff6b9d;">
        <h4 style="color: #d4a5c7; margin-top: 0; margin-bottom: 12px; font-size: 18px;">Jour ${day.day}</h4>
        <div style="margin: 8px 0;">
          <strong>🌅 Matin :</strong> ${escapeHtml(morningText)}
          ${morningImage ? `<br><img src="${escapeHtml(morningImage)}" alt="Activité du matin" style="width: 100%; max-width: 400px; height: 200px; object-fit: cover; border-radius: 8px; margin-top: 8px; display: block;" />` : ''}
        </div>
        <div style="margin: 8px 0;">
          <strong>☀️ Après-midi :</strong> ${escapeHtml(afternoonText)}
          ${afternoonImage ? `<br><img src="${escapeHtml(afternoonImage)}" alt="Activité de l'après-midi" style="width: 100%; max-width: 400px; height: 200px; object-fit: cover; border-radius: 8px; margin-top: 8px; display: block;" />` : ''}
        </div>
        <div style="margin: 8px 0;">
          <strong>🌙 Soirée :</strong> ${escapeHtml(eveningText)}
          ${eveningImage ? `<br><img src="${escapeHtml(eveningImage)}" alt="Activité du soir" style="width: 100%; max-width: 400px; height: 200px; object-fit: cover; border-radius: 8px; margin-top: 8px; display: block;" />` : ''}
        </div>
      </div>
    `
  })
  
  html += `<p style="margin-top: 20px; font-size: 16px; color: #ff6b9d;">💝 Passe un merveilleux voyage d'anniversaire !</p>`
  
  return html
}

/**
 * Formats itinerary as plain text email content
 */
export function formatItineraryAsText(itinerary) {
  let text = `🐪 💙 🥔 Itinéraire de Voyage d'Anniversaire 🥔 💙 🐪 : ${itinerary.destination}\n\n`
  text += `✈️ Temps de vol : ${itinerary.flightTime} depuis Abu Dhabi\n\n`
  
  // Description
  text += `Description :\n${itinerary.description}\n\n`
  
  // Themes
  if (itinerary.themes && itinerary.themes.length > 0) {
    text += `Thèmes :\n`
    itinerary.themes.forEach((themeId) => {
      const theme = themeDefinitions[themeId]
      if (theme) {
        text += `- ${theme.icon} ${theme.name}\n`
      }
    })
    text += `\n`
  }
  
  // All Activities
  if (itinerary.allActivities && Object.keys(itinerary.allActivities).length > 0) {
    text += `Activités Disponibles :\n`
    Object.entries(itinerary.allActivities).forEach(([category, activities]) => {
      text += `- ${category} : ${activities.join(', ')}\n`
    })
    text += `\n`
  }
  
  // Selected Activities (if different from all activities)
  if (itinerary.matchingActivities && Object.keys(itinerary.matchingActivities).length > 0) {
    text += `Activités Sélectionnées :\n`
    Object.entries(itinerary.matchingActivities).forEach(([category, activities]) => {
      text += `- ${category} : ${activities.join(', ')}\n`
    })
    text += `\n`
  }
  
  text += `Itinéraire de 4 Jours :\n\n`
  
  itinerary.days.forEach(day => {
    // The itinerary generator normalizes all time slots to { text, image } format
    const morningText = day.morning?.text || day.morning || ''
    const afternoonText = day.afternoon?.text || day.afternoon || ''
    const eveningText = day.evening?.text || day.evening || ''
    
    text += `Jour ${day.day} :\n`
    text += `  🌅 Matin : ${morningText}\n`
    text += `  ☀️ Après-midi : ${afternoonText}\n`
    text += `  🌙 Soirée : ${eveningText}\n\n`
  })
  
  text += `💝 Passe un merveilleux voyage d'anniversaire !\n`
  
  return text
}

/**
 * Sends itinerary via email using EmailJS
 * @param {Object} itinerary - The itinerary object to send
 * @param {String} primaryRecipient - The primary email recipient (user-entered)
 * @param {String} secondaryRecipient - The secondary email recipient (configured email)
 * @returns {Object} Result with success status and recipients
 */
export async function sendItineraryEmail(itinerary, primaryRecipient, secondaryRecipient) {
  // Check if EmailJS is configured
  if (emailjsConfig.publicKey === 'YOUR_PUBLIC_KEY' || 
      emailjsConfig.serviceId === 'YOUR_SERVICE_ID' || 
      emailjsConfig.templateId === 'YOUR_TEMPLATE_ID') {
    throw new Error('EmailJS is not configured. Please set up your EmailJS credentials in src/config/emailConfig.js. See EMAILJS_SETUP.md for instructions.')
  }

  // Validate primary recipient
  if (!primaryRecipient || !primaryRecipient.trim()) {
    throw new Error('Primary recipient email is required')
  }

  // Validate secondary recipient
  if (!secondaryRecipient || !secondaryRecipient.trim()) {
    throw new Error('Secondary recipient email is required')
  }

  try {
    // Initialize EmailJS
    emailjs.init(emailjsConfig.publicKey)

    // Format email content
    const emailHtml = formatItineraryAsEmail(itinerary)
    const emailText = formatItineraryAsText(itinerary)

    // IMPORTANT: Make sure your EmailJS template's "To Email" field uses {{to_email}}
    // If it's hardcoded, it will override this parameter and send to the hardcoded address instead
    
    // Send email to primary recipient (user-entered email)
    const primaryRecipientEmail = primaryRecipient.trim()
    const primaryTemplateParams = {
      to_email: primaryRecipientEmail,
      to_name: primaryRecipientEmail.split('@')[0], // Use email username as name
      subject: `🐪 💙 🥔 Itinéraire de Voyage d'Anniversaire 🥔 💙 🐪 : ${itinerary.destination}`,
      message_html: emailHtml,
      message_text: emailText,
      destination: itinerary.destination,
      flight_time: itinerary.flightTime,
    }

    console.log('Sending email to primary recipient:', primaryRecipientEmail)
    await emailjs.send(
      emailjsConfig.serviceId,
      emailjsConfig.templateId,
      primaryTemplateParams
    )

    // Send separate email to secondary recipient (hardcoded email)
    const secondaryRecipientEmail = secondaryRecipient.trim()
    const secondaryTemplateParams = {
      to_email: secondaryRecipientEmail,
      to_name: secondaryRecipientEmail.split('@')[0],
      subject: ` Itinéraire de Voyage d'Anniversaire : ${itinerary.destination} (Copie)`,
      message_html: emailHtml,
      message_text: emailText,
      destination: itinerary.destination,
      flight_time: itinerary.flightTime,
    }

    console.log('Sending email to secondary recipient:', secondaryRecipientEmail)
    await emailjs.send(
      emailjsConfig.serviceId,
      emailjsConfig.templateId,
      secondaryTemplateParams
    )
    
    const allRecipients = [primaryRecipient.trim(), secondaryRecipient.trim()]
    return { success: true, recipients: allRecipients }
  } catch (error) {
    // Provide more detailed error information
    let errorMessage = 'Failed to send email. '
    
    if (error.text) {
      errorMessage += `EmailJS error: ${error.text}`
    } else if (error.message) {
      errorMessage += error.message
    } else {
      errorMessage += 'Please check your EmailJS configuration and try again.'
    }
    
    throw new Error(errorMessage)
  }
}

