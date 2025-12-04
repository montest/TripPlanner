import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

// Fix for default marker icons in react-leaflet
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
})

// Abu Dhabi coordinates
const ABU_DHABI_COORDS = [24.4539, 54.3773]

// Create a red icon for Abu Dhabi
const redIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
})

// Function to generate arc points between two coordinates
// Creates a smooth curved arc that represents a flight route
function generateArcPoints(start, end, numPoints = 50) {
  const points = []
  const [startLat, startLng] = start
  const [endLat, endLng] = end
  
  // Calculate distance to determine arc height
  const latDiff = endLat - startLat
  const lngDiff = endLng - startLng
  const distance = Math.sqrt(latDiff * latDiff + lngDiff * lngDiff)
  
  // Create a curved arc by adding a perpendicular offset
  // The arc height is proportional to the distance (adjust for more/less curvature)
  const arcHeight = Math.max(distance * 0.25, 2) // Minimum arc height for visibility
  
  // Calculate perpendicular direction for the arc (normalized)
  const perpLat = -lngDiff / (distance || 1)
  const perpLng = latDiff / (distance || 1)
  
  for (let i = 0; i <= numPoints; i++) {
    const t = i / numPoints
    // Use a smooth curve function that peaks at t=0.5
    // This creates a natural-looking arc
    const curve = Math.sin(t * Math.PI) // Smooth sine curve from 0 to 1
    
    // Linear interpolation between start and end
    const lat = startLat + (endLat - startLat) * t
    const lng = startLng + (endLng - startLng) * t
    
    // Add perpendicular offset for arc effect
    // The curve function makes it peak in the middle
    const offsetLat = lat + perpLat * arcHeight * curve
    const offsetLng = lng + perpLng * arcHeight * curve
    
    points.push([offsetLat, offsetLng])
  }
  
  return points
}

function DestinationMap({ destinations, center = ABU_DHABI_COORDS, zoom = 3 }) {
  // Filter destinations that have coordinates
  const destinationsWithCoords = destinations.filter(dest => dest.coordinates && dest.coordinates.lat && dest.coordinates.lng)

  return (
    <div className="destination-map-container">
      <MapContainer
        center={center}
        zoom={zoom}
        style={{ height: '400px', width: '100%', borderRadius: '8px' }}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* Draw arcs from Abu Dhabi to each destination */}
        {destinationsWithCoords.map((destination, index) => {
          const destCoords = [destination.coordinates.lat, destination.coordinates.lng]
          const arcPoints = generateArcPoints(ABU_DHABI_COORDS, destCoords)
          
          return (
            <Polyline
              key={`arc-${destination.name}-${index}`}
              positions={arcPoints}
              color="#000000"
              weight={3}
              opacity={0.8}
            />
          )
        })}
        {/* Add Abu Dhabi marker with red icon */}
        <Marker position={ABU_DHABI_COORDS} icon={redIcon}>
          <Popup>
            <div>
              <strong>Abu Dhabi</strong>
              <br />
              <span>Point de départ</span>
            </div>
          </Popup>
        </Marker>
        {/* Add destination markers */}
        {destinationsWithCoords.map((destination, index) => (
          <Marker
            key={`${destination.name}-${index}`}
            position={[destination.coordinates.lat, destination.coordinates.lng]}
          >
            <Popup>
              <div>
                <strong>{destination.name}</strong>
                <br />
                <span>{destination.flightTime}</span>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
}

export default DestinationMap

