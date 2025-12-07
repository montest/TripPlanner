/**
 * Generates a markdown-formatted document from itinerary data
 * This is used for clean printing
 */

import { themeDefinitions } from '../data/destinations/index.js'

export function generateMarkdown(itinerary) {
  if (!itinerary) return ''

  let md = `# 🎂 Itinéraire de Voyage d'Anniversaire\n\n`
  md += `## ${itinerary.destination}\n\n`
  
  // Add destination image if available
  if (itinerary.image) {
    md += `![${itinerary.destination}](${itinerary.image})\n\n`
  }
  
  if (itinerary.planName) {
    md += `**Plan :** ${itinerary.planName}\n\n`
  }
  
  md += `**Temps de vol :** ${itinerary.flightTime} depuis Abu Dhabi\n\n`
  
  // Description
  md += `## Description\n\n`
  md += `${itinerary.description}\n\n`
  
  // Themes
  if (itinerary.themes && itinerary.themes.length > 0) {
    md += `## Thèmes\n\n`
    itinerary.themes.forEach((themeId) => {
      const theme = themeDefinitions[themeId]
      if (theme) {
        md += `- ${theme.icon} ${theme.name}\n`
      }
    })
    md += `\n`
  }
  
  // All Activities
  if (itinerary.allActivities && Object.keys(itinerary.allActivities).length > 0) {
    md += `## Activités Disponibles\n\n`
    Object.entries(itinerary.allActivities).forEach(([category, activities]) => {
      md += `### ${category}\n\n`
      activities.forEach(activity => {
        md += `- ${activity}\n`
      })
      md += `\n`
    })
  }
  
  // Selected Activities (if different from all activities)
  if (itinerary.matchingActivities && Object.keys(itinerary.matchingActivities).length > 0) {
    md += `## Activités Sélectionnées\n\n`
    Object.entries(itinerary.matchingActivities).forEach(([category, activities]) => {
      md += `### ${category}\n\n`
      activities.forEach(activity => {
        md += `- ${activity}\n`
      })
      md += `\n`
    })
  }
  
  md += `---\n\n`
  md += `# Itinéraire de 4 Jours\n\n`
  
  itinerary.days.forEach((day, index) => {
    if (index > 0) {
      md += `\n\n---\n\n`
    }
    
    md += `## Jour ${day.day} - ${itinerary.destination}\n\n`
    
    // Morning - image left, text right
    md += `### 🌅 Matin\n\n`
    md += `[TIME_SLOT_START:morning:left]\n`
    if (day.morning.image) {
      md += `![Activité du matin](${day.morning.image})\n`
    }
    md += `${day.morning.text || day.morning}\n`
    md += `[TIME_SLOT_END]\n\n`
    
    // Afternoon - image right, text left
    md += `### ☀️ Après-midi\n\n`
    md += `[TIME_SLOT_START:afternoon:right]\n`
    if (day.afternoon.image) {
      md += `![Activité de l'après-midi](${day.afternoon.image})\n`
    }
    md += `${day.afternoon.text || day.afternoon}\n`
    md += `[TIME_SLOT_END]\n\n`
    
    // Evening - image left, text right
    md += `### 🌙 Soirée\n\n`
    md += `[TIME_SLOT_START:evening:left]\n`
    if (day.evening.image) {
      md += `![Activité du soir](${day.evening.image})\n`
    }
    md += `${day.evening.text || day.evening}\n`
    md += `[TIME_SLOT_END]\n\n`
  })
  
  md += `---\n\n`
  md += `🥔 Ceci est un itinéraire de base. On l'ajustera 🥔\n\n`
  
  return md
}

/**
 * Converts markdown to HTML for printing
 */
export function markdownToHtml(markdown) {
  // Track if we've seen the first image (destination hero image)
  let isFirstImage = true
  
  // First, process time slot containers before other conversions
  // Extract time slot content and replace with placeholder
  const timeSlotPlaceholders = []
  let placeholderIndex = 0
  
  let processedMarkdown = markdown.replace(/\[TIME_SLOT_START:(\w+):(\w+)\](.*?)\[TIME_SLOT_END\]/gs, (match, slotType, imagePos, content) => {
    // Process content to extract image and text
    const imageMatch = content.match(/!\[([^\]]*)\]\(([^)]+)\)/)
    const image = imageMatch ? { alt: imageMatch[1], url: imageMatch[2] } : null
    let text = content.replace(/!\[([^\]]*)\]\(([^)]+)\)/, '').trim()
    
    // Store the processed slot
    const placeholder = `__TIMESLOT_${placeholderIndex}__`
    timeSlotPlaceholders.push({
      placeholder,
      slotType,
      imagePos,
      image,
      text
    })
    placeholderIndex++
    
    return placeholder
  })
  
  // Then process images, headers, etc.
  let html = processedMarkdown
    // Images: ![alt](url) - first image gets hero class
    .replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (match, alt, url) => {
      if (isFirstImage && alt && !alt.toLowerCase().includes('activity')) {
        isFirstImage = false
        return `<img src="${url}" alt="${alt}" class="hero-image" style="max-width: 100%; height: auto; border-radius: 8px; margin: 20px 0 30px 0;" />`
      }
      return `<img src="${url}" alt="${alt}" class="activity-image" style="max-width: 100%; height: auto; border-radius: 8px;" />`
    })
    // Headers - add class to Day headings for page breaks
    .replace(/^# (.*$)/gim, '<h1>$1</h1>')
    .replace(/^## Jour (\d+) - (.*$)/gim, '<h2 class="day-heading">Jour $1 - $2</h2>')
    .replace(/^## (.*$)/gim, '<h2>$1</h2>')
    .replace(/^### (.*$)/gim, '<h3>$1</h3>')
    // Bold
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    // Horizontal rules
    .replace(/^---$/gim, '<hr>')
    // Lists - need to handle multiline
    .replace(/^- (.*)$/gim, '<li>$1</li>')
    // Line breaks
    .replace(/\n\n/g, '</p><p>')
    .replace(/\n/g, '<br>')
  
  // Wrap consecutive list items in ul
  html = html.replace(/(<li>.*?<\/li>(?:<br>)*)+/g, (match) => {
    return '<ul>' + match.replace(/<br>/g, '') + '</ul>'
  })
  
  // Wrap in paragraphs
  html = '<p>' + html + '</p>'
  
  // Clean up empty paragraphs and fix header wrapping
  html = html.replace(/<p><\/p>/g, '')
  html = html.replace(/<p><h([1-6])>/g, '<h$1>')
  html = html.replace(/<\/h([1-6])><\/p>/g, '</h$1>')
  html = html.replace(/<p><ul>/g, '<ul>')
  html = html.replace(/<\/ul><\/p>/g, '</ul>')
  html = html.replace(/<p><hr><\/p>/g, '<hr>')
  html = html.replace(/<p><img/g, '<img')
  html = html.replace(/\/><\/p>/g, '/><p>')
  
  // Clean up placeholders that got wrapped in <p> tags
  html = html.replace(/<p>__TIMESLOT_(\d+)__<\/p>/g, '__TIMESLOT_$1__')
  html = html.replace(/<p>__TIMESLOT_(\d+)__/g, '__TIMESLOT_$1__')
  html = html.replace(/__TIMESLOT_(\d+)__<\/p>/g, '__TIMESLOT_$1__')
  
  // Replace time slot placeholders with actual HTML
  timeSlotPlaceholders.forEach(({ placeholder, slotType, imagePos, image, text }) => {
    // Clean up text - remove markdown formatting and extra whitespace
    let cleanText = text
      .replace(/\n+/g, ' ')
      .replace(/\s+/g, ' ')
      .trim()
    
    // If no image, just return text in a simple container
    if (!image) {
      const replacement = `<div class="time-slot-container time-slot-${slotType} no-image">
        <div class="time-slot-text"><p>${cleanText}</p></div>
      </div>`
      html = html.replace(placeholder, replacement)
      return
    }
    
    // Create image HTML
    const imageHtml = `<img src="${image.url}" alt="${image.alt}" class="activity-image" style="max-width: 100%; height: auto; border-radius: 8px;" />`
    
    // Create flex container based on image position
    // IMPORTANT: imagePos determines the layout
    let replacement
    if (imagePos === 'left') {
      // Image on left, text on right
      replacement = `<div class="time-slot-container time-slot-${slotType} image-left">
        <div class="time-slot-image">${imageHtml}</div>
        <div class="time-slot-text"><p>${cleanText}</p></div>
      </div>`
    } else if (imagePos === 'right') {
      // Image on right, text on left
      replacement = `<div class="time-slot-container time-slot-${slotType} image-right">
        <div class="time-slot-text"><p>${cleanText}</p></div>
        <div class="time-slot-image">${imageHtml}</div>
      </div>`
    } else {
      // Default to left if position not specified
      replacement = `<div class="time-slot-container time-slot-${slotType} image-left">
        <div class="time-slot-image">${imageHtml}</div>
        <div class="time-slot-text"><p>${cleanText}</p></div>
      </div>`
    }
    
    html = html.replace(placeholder, replacement)
  })
  
  return html
}

