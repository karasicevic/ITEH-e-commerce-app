import React from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '2000px',
  height: '500px'
};

const center = {
  lat: 44.82287683190209,
  lng:  20.401242471870923
 
};

function Maps() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey:  "AIzaSyBG4EGhXKI25e4Z16sOgu8KQwuArsozFQE"
  });

  const [map, setMap] = React.useState(null);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onUnmount={onUnmount}
    >,
      <Marker title='Studenjak' position={{ lat: 44.82287683190209, lng: 20.401242471870923 }} />
    </GoogleMap>
  ) : <></>;
}

export default React.memo(Maps);