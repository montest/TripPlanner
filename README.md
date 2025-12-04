# Birthday Trip Planner 🎂

A beautiful, interactive web application to plan a perfect 4-day birthday trip from Abu Dhabi. Choose your destination type, select activities, and get a personalized itinerary!

## Features

- 🏖️ **Three Destination Types**: Beach & Relaxation, City & Urban, Culture & History
- ✈️ **3-Hour Flight Radius**: All destinations are within 3 hours flight from Abu Dhabi
- 🎯 **Activity-Based Filtering**: Select activities to find matching destinations
- 📅 **4-Day Itineraries**: Complete day-by-day plans for each destination
- 🎨 **Beautiful UI**: Modern, romantic design perfect for a birthday gift
- 📱 **Responsive**: Works perfectly on desktop, tablet, and mobile
- 🖨️ **Printable**: Print your itinerary for easy reference
- 📧 **Email Itinerary**: Send the itinerary via email to multiple recipients

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd NamourBirthday
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Deployment to GitHub Pages

This project is configured for automatic deployment to GitHub Pages:

1. Push your code to a GitHub repository
2. Go to Settings → Pages in your repository
3. Select "GitHub Actions" as the source
4. The site will automatically deploy on every push to the `main` branch
5. Your site will be available at: `https://[username].github.io/NamourBirthday/`

## Adding or Editing Destinations

The project is designed to make it easy to add or modify destinations. See the detailed guide in [`src/data/README.md`](src/data/README.md).

### Quick Guide

1. Open `src/data/destinations.js`
2. Find the destination type you want to edit
3. Copy an existing destination object
4. Modify the details (name, flightTime, description, activities, itinerary)
5. Save and deploy!

## Email Functionality

The app includes email functionality to send itineraries to multiple recipients. 

### Setup EmailJS

1. See the detailed setup guide in [`EMAILJS_SETUP.md`](EMAILJS_SETUP.md)
2. Create a free EmailJS account at [https://www.emailjs.com/](https://www.emailjs.com/)
3. Configure your email service and template
4. Update `src/config/emailConfig.js` with your credentials

### Adding Email Recipients

To add more email addresses (like your wife's email):

1. Open `src/config/emailConfig.js`
2. Add email addresses to the `emailRecipients` array:

```javascript
export const emailRecipients = [
  'montes.thibaut@gmail.com',
  'her.email@example.com',  // Add more emails here
]
```

## Project Structure

```
NamourBirthday/
├── src/
│   ├── components/          # React components
│   ├── data/               # Destination data (easy to edit!)
│   ├── styles/             # CSS styles
│   ├── utils/              # Utility functions
│   ├── App.jsx             # Main app component
│   └── main.jsx            # Entry point
├── .github/
│   └── workflows/          # GitHub Actions for deployment
└── package.json
```

## Technologies Used

- React 18
- Vite
- CSS3 (no frameworks, pure CSS for easy customization)
- EmailJS (for email functionality)

## License

This project is created as a personal birthday gift.

## Contributing

This is a personal project, but feel free to fork and customize for your own use!

---

Made with ❤️ for a special birthday

