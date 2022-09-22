import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import { useContext, useEffect } from 'react';
import { InputContext } from '../../../context/InputContext';


const Map = () => {
    const { state } = useContext(InputContext);
    
    return(
        <MapContainer
            style={{width: "100%", height: 'calc(100vh - 250px)', zIndex: '1'}}
            center={[state.lat, state.lng]}
            zoom={13}
            >
                <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <MapMarker />
            
        </MapContainer>
    )
}

const MapMarker = () => {
    const { state } = useContext(InputContext);

    const map = useMap();

    useEffect(() => {
        map.flyTo([state.lat, state.lng])
    }, [state])

    return(
        <Marker 
            position={[state.lat, state.lng]}
        ></Marker>
    )
}

export default Map;