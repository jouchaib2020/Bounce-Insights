import GoogleMap from 'google-map-react';

const AnyReactComponent = ({ text }) => <div className='bg-black'>{text}</div>;


export default function Map({latlng, name}: {latlng: number[]; name: string}){
  const defaultProps = {
    center: {
      lat: latlng[1],
      lng: latlng[0],
    },
    zoom: 5, 
  };

  function renderMarkers(map, maps) {
    return new maps.Marker({
      position:  {
        lat: latlng[1],
        lng: latlng[0],
      },
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
    <div className='w-4/12 h-full border border-gray-600 rounded-lg p-1'>
      <GoogleMap
        bootstrapURLKeys={{ key: "AIzaSyCfRAhw-Oz4a_uL9gmGQxeNE--vLIQ261w"}}
        onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
        center={defaultProps.center}
        zoom={defaultProps.zoom}
        options={createMapOptions}
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="My AAAAAAAAAAAAAA"
        />
      </GoogleMap>
    </div>
  );
}
