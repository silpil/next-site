'use client'
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api'
import styles from './Map.module.css'

const mapContainerStyle = {
  width: '100%',
  height: '540px',
}

const center = {
  lat: 55.752957,
  lng: 37.621196,
}

const options = {
  styles: [
    { featureType: 'water', elementType: 'geometry', stylers: [{ color: '#6C6C6C' }, { lightness: 17 }] },
    { featureType: 'landscape', elementType: 'geometry', stylers: [{ color: '#8F8F8F' }, { lightness: 20 }] },
    { featureType: 'road.highway', elementType: 'geometry.fill', stylers: [{ color: '#A5A5A5' }, { lightness: 17 }] },
    { featureType: 'road.highway', elementType: 'geometry.stroke', stylers: [{ color: '#A5A5A5' }, { lightness: 29 }, { weight: 0.2 }] },
    { featureType: 'road.arterial', elementType: 'geometry', stylers: [{ color: '#A5A5A5' }, { lightness: 18 }] },
    { featureType: 'road.local', elementType: 'geometry', stylers: [{ color: '#A5A5A5' }, { lightness: 16 }] },
    { featureType: 'poi', elementType: 'geometry', stylers: [{ color: '#8F8F8F' }, { lightness: 21 }] },
    { featureType: 'poi.park', elementType: 'geometry', stylers: [{ color: '#7B7B7B' }, { lightness: 21 }] },
    { elementType: 'labels.text.stroke', stylers: [{ visibility: 'on' }, { color: '#A5A5A5' }, { lightness: 16 }] },
    { elementType: 'labels.text.fill', stylers: [{ saturation: 36 }, { color: '#333333' }, { lightness: 40 }] },
    { elementType: 'labels.icon', stylers: [{ visibility: 'off' }] },
    { featureType: 'transit', elementType: 'geometry', stylers: [{ color: '#7B7B7B' }, { lightness: 19 }] },
    { featureType: 'administrative', elementType: 'geometry.fill', stylers: [{ color: '#838383' }, { lightness: 20 }] },
    { featureType: 'administrative', elementType: 'geometry.stroke', stylers: [{ color: '#838383' }, { lightness: 17 }, { weight: 1.2 }] },
  ],
  maxZoom: 20,
  minZoom: 0,
  mapTypeId: 'roadmap',
  clickableIcons: true,
  disableDoubleClickZoom: false,
  draggable: true,
  keyboardShortcuts: true,
  scrollwheel: false,
  fullscreenControl: false,
  mapTypeControl: false,
  rotateControl: false,
  scaleControl: false,
  streetViewControl: false,
  zoomControl: false,
}

const markers = [
  {
    position: { lat: 55.743875, lng: 37.623773 },
    icon: {
      url: '/marker.png',
      scaledSize: { width: 61, height: 60 },
      anchor: { x: 31, y: 60 },
    },
  },
  {
    position: { lat: 55.775363, lng: 37.484041 },
    icon: {
      url: '/marker.png',
      scaledSize: { width: 61, height: 60 },
      anchor: { x: 31, y: 60 },
    },
  },
  {
    position: { lat: 55.749672, lng: 37.53966 },
    icon: {
      url: '/marker.png',
      scaledSize: { width: 61, height: 60 },
      anchor: { x: 31, y: 60 },
    },
  },
]

const MapComponent = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: ""
  })

  return isLoaded ? (
    <section className="container mx-auto px-2 my-14">
      <h2 className={styles.title}>Магазины мерча ведьмака</h2>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={12}
          options={options}
        >
          {markers.map((marker: any, index) => (
            <Marker
              key={index}
              position={marker.position}
              icon={marker.icon}
              options={{ optimized: true }}
            />
          ))}
        </GoogleMap>
    </section>
  ) : <></>
}

export default MapComponent

