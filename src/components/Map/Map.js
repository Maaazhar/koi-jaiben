import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
    width: '600px',
    height: '500px'
};

const center = {

    lat: 23.733660,
    lng: 90.417105
};

function Map() {
    return (
        <LoadScript
            googleMapsApiKey="AIzaSyC5YTiXfc_t_o6WskfybrXJQtqE-lAYvsI"
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
            >
                { /* Child components, such as markers, info windows, etc. */}
                <></>
            </GoogleMap>
        </LoadScript>
    )
}

export default React.memo(Map)
