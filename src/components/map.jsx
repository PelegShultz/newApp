import React from 'react'
import GoogleMapReact from 'google-map-react'
import '../map.css'
import LocationPin from "./locationPin.jsx"

const Map = ({location, zoomLevel}) => {
    console.log(location)
    return(
    <div className="map">

    <div className="google-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyDmS5HUHriuqEssaDNUXxwDoQE5kiXeNaE' }}
        defaultCenter={location.coordinates}
        center={location.coordinates}
        defaultZoom={zoomLevel}
        yesIWantToUseGoogleMapApiInternals
      >
        <LocationPin
        lat={location.coordinates.lat}
        lng={location.coordinates.lng}
        text={location.address}
        />
      </GoogleMapReact>
    </div>
  </div>
    )
    }

export default Map;