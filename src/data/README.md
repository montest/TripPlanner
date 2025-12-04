# How to Edit Destinations

This guide will help you easily add or modify destinations and activities in the trip planner.

## File Structure

Destinations are now organized in individual files for easy management:
- Each destination has its own file in `src/data/destinations/`
- See `src/data/destinations/README.md` for detailed instructions
- Use `TEMPLATE.js` as a starting point for new destinations

## Adding a New Destination

**Quick Start:**
1. Copy `src/data/destinations/TEMPLATE.js`
2. Rename it (e.g., `bali.js`)
3. Fill in the destination details
4. Import it in `src/data/destinations/index.js`

**For detailed instructions, see:** `src/data/destinations/README.md`

### Key Features

- **One file per destination** - Easy to find and edit
- **Multiple categories** - A destination can belong to beach, city, and/or culture
- **Multiple themes** - A destination can match multiple themes
- **Template file** - Use `TEMPLATE.js` as a starting point

## Adding a New Activity Category

1. **Find** the destination you want to modify
2. **In the `activities` object**, add a new key-value pair:
   ```javascript
   "Your Category Name": ["Activity 1", "Activity 2", "Activity 3"]
   ```

## Modifying an Itinerary

1. **Find** the destination's `itinerary` object
2. **Edit** any day's morning, afternoon, or evening:
   ```javascript
   day1: {
     morning: "Your morning activity",
     afternoon: "Your afternoon activity",
     evening: "Your evening activity"
   }
   ```

## Adding a New Destination Type

1. **Copy** an entire destination type object (from `{ id: "beach", ... }` to the closing `}`)
2. **Paste** it in the `destinationTypes` array
3. **Change**:
   - `id`: Unique identifier (e.g., "adventure")
   - `name`: Display name (e.g., "Adventure & Nature")
   - `icon`: Emoji or symbol (e.g., "⛰️")
   - `destinations`: Array of destinations for this type

## Tips

- Keep flight times accurate (within 3 hours from Abu Dhabi)
- Make itinerary descriptions specific and engaging
- Include a variety of activities for each destination
- Save the file after making changes
- The changes will appear after you rebuild and deploy the site

## After Making Changes

1. Save the file
2. If running locally: The dev server will automatically reload
3. If deploying: Commit and push to GitHub - the site will automatically rebuild and deploy

