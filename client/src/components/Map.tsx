import GoogleMap from 'google-map-react';


export default function Map({latlng, name}: {latlng: number[]; name: string}){
  const defaultProps = {
    center: {
      lat: latlng[0],
      lng: latlng[1],
    },
    zoom: 5, 
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function renderMarkers(map : any, maps: any) {
    return new maps.Marker({
      position: defaultProps.center,
      map,
      title: name,
    });
  }

  function createMapOptions() {
    return {
      panControl: false,
      mapTypeControl: false,
      disableDefaultUI: true,
      styles: [{ stylers: [{ 'saturation': -100 }, { 'gamma': 1 }, { 'lightness': 5 }, { 'visibility': 'on' },] }]
    }
  }

  return (
    <div className='w-4/12 h-96 border border-gray-600 rounded-lg p-1'>
      <GoogleMap
        bootstrapURLKeys={{ key: "AIzaSyCfRAhw-Oz4a_uL9gmGQxeNE--vLIQ261w"}}
        onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
        center={defaultProps.center}
        zoom={defaultProps.zoom}
        options={createMapOptions}
      >
      </GoogleMap>
    </div>
  );
}
