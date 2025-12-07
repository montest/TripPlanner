# Adding New Destinations

This directory contains individual destination files, making it easy to add and manage destinations.

## File Structure

Each destination is in its own file (e.g., `maldives.js`, `istanbul.js`). This makes it easy to:
- Add new destinations
- Edit existing destinations
- See all destinations at a glance
- Organize destinations by category and theme
- **Create multiple plans for the same city** (e.g., beach-centric vs cultural)
- **Add images** to make destinations more visually appealing

## How to Add a New Destination

### Step 1: Create the Destination File

1. Copy `TEMPLATE.js` to create your new destination file
2. Name it descriptively (e.g., `bali.js`, `paris.js`)
3. Use lowercase and hyphens for the filename

### Step 2: Fill in the Destination Details

Open your new file and update:

```javascript
export default {
  name: "Bali, Indonesia",
  flightTime: "3 hours",
  image: "https://example.com/bali-image.jpg",  // Optional: Add image URL
  categories: ["beach"],  // Can be multiple: ["beach", "city"]
  themes: ["luxury-resorts", "romantic-getaway"],  // Can be multiple
  description: "Your description here",
  activities: { /* ... */ },
  itinerary: { /* ... */ }
}
```

**Important:**
- `categories`: Must be one or more of: `"beach"`, `"city"`, `"culture"`
- `themes`: Must match themes defined for your chosen categories
  - **Beach themes**: `luxury-resorts`, `adventure-diving`, `romantic-getaway`, `island-hopping`
  - **City themes**: `historic-cultural`, `modern-shopping`, `food-nightlife`, `architecture-art`
  - **Culture themes**: `ancient-wonders`, `traditional-culture`, `historic-cultural`
- `image`: Optional image URL (see Image Guidelines below)

### Step 3: Import in index.js

Add your destination to `index.js`:

```javascript
import bali from './bali.js'

const allDestinationsRaw = [
  // ... existing destinations
  bali,  // Add your new destination here
]
```

### Step 4: Test

1. Save all files
2. The app will automatically reload
3. Your new destination should appear in the appropriate category

## Adding Images

Images make destinations more visually appealing! You can add images in several ways:

### Option 1: External URL (Recommended for Quick Setup)

```javascript
export default {
  name: "Maldives",
  image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800",
  // ... rest of destination
}
```

**Image Sources:**
- **Unsplash**: Free high-quality photos (https://unsplash.com)
- **Pexels**: Free stock photos (https://pexels.com)
- **Your own hosting**: Upload images to your server/CDN

### Option 2: Local Images

1. Create an `images` folder in the `public` directory:
   ```
   public/
     images/
       destinations/
         maldives.jpg
   ```

2. Reference it in your destination file:
   ```javascript
   image: "/images/destinations/maldives.jpg"
   ```

### Image Guidelines

- **Recommended size**: 800x600px or larger (aspect ratio 4:3 or 16:9)
- **Format**: JPG or PNG
- **File size**: Keep under 500KB for faster loading
- **Content**: Should represent the destination well (landscapes, landmarks, beaches, etc.)

### Image Display

- Images appear in destination cards (200px height)
- Images appear in itinerary view (400px height)
- Images are automatically cropped to fit (object-fit: cover)
- If an image fails to load, it's hidden gracefully

## Multiple Plans for the Same City

You can create multiple plans for the same destination! For example, Istanbul could have:
- A cultural/historic plan
- A modern/shopping plan
- A beach-centric plan (if applicable)

### How to Create Multiple Plans

Export an **array** of plans instead of a single object:

```javascript
export default [
  // Plan 1: Cultural Istanbul
  {
    name: "Istanbul, Turkey",
    planName: "Cultural & Historic",  // Optional: distinguishes this plan
    image: "https://example.com/istanbul-cultural.jpg",
    categories: ["city", "culture"],
    themes: ["historic-cultural"],
    description: "Historic sites and cultural experiences",
    activities: { /* ... */ },
    itinerary: { /* ... */ }
  },
  // Plan 2: Modern Istanbul
  {
    name: "Istanbul, Turkey",
    planName: "Modern & Shopping",
    image: "https://example.com/istanbul-modern.jpg",
    categories: ["city"],
    themes: ["modern-shopping", "food-nightlife"],
    description: "Modern Istanbul with luxury shopping",
    activities: { /* ... */ },
    itinerary: { /* ... */ }
  }
]
```

**Key points:**
- Use the same `name` for all plans of the same city
- Use `planName` to distinguish between plans (e.g., "Beach-Centric", "Cultural Tour")
- Each plan can have different `categories`, `themes`, `activities`, `itinerary`, and `image`
- The app will show both plans, and users can choose which one they prefer

## Example: Multi-Category Destination

A destination can belong to multiple categories. For example, a beach destination with city amenities:

```javascript
export default {
  name: "Dubai, UAE",
  image: "https://example.com/dubai.jpg",
  categories: ["beach", "city"],  // Multiple categories
  themes: ["luxury-resorts", "modern-shopping"],  // Themes from both categories
  // ... rest of the destination
}
```

## Available Categories and Themes

### Beach & Relaxation 🏖️
- **Luxury Resorts** 🏝️
- **Adventure & Diving** 🤿
- **Romantic Getaway** 💕
- **Island Hopping** ⛵

### City & Urban 🏙️
- **Historic & Cultural** 🏛️
- **Modern & Shopping** 🛍️
- **Food & Nightlife** 🍽️
- **Architecture & Art** 🎨

### Culture & History 🏛️
- **Ancient Wonders** 🔺
- **Religious Sites** 🕌
- **Traditional Culture** 🎭
- **Museums & History** 📜

## Adding Images to Daily Activities

You can add images to specific activities during each day! This makes the itinerary more visual and engaging.

### Format Options

**Option 1: Simple text (no image)**
```javascript
day1: {
  morning: "Arrival and check-in",
  afternoon: "Beach time and lunch",
  evening: "Dinner and sunset viewing"
}
```

**Option 2: Text with image**
```javascript
day1: {
  morning: {
    text: "Arrival and check-in",
    image: "https://example.com/arrival.jpg"  // Optional image URL
  },
  afternoon: {
    text: "Beach time and lunch",
    image: "https://example.com/beach.jpg"
  },
  evening: "Dinner and sunset viewing"  // Can mix formats
}
```

### Tips for Activity Images

- **Size**: 600-800px width recommended
- **Content**: Show the actual activity or location
- **Mix formats**: You can use simple strings for some activities and objects with images for others
- **Optional**: Images are optional - activities work fine without them

## Tips

- Keep flight times accurate (within 3 hours from Abu Dhabi)
- Make descriptions engaging and specific
- Include a variety of activities
- Create detailed, realistic itineraries
- Use the template file as a starting point
- **For multiple plans**: Make sure each plan has a distinct focus and itinerary
- **For destination images**: Use high-quality, representative photos that showcase the destination
- **For activity images**: Add images to highlight specific activities or locations during the day

## File Naming Convention

- Use lowercase
- Use hyphens for multi-word names
- Be descriptive: `bali.js`, `paris-france.js`, `new-york.js`
