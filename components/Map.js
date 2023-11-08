import { Map, GoogleApiWrapper, Marker } from "google-maps-react"
import styles from '../styles/Map.module.css';  

const mapStyles = {
    width: '30%',
    height: '30%'
};

const GoogleMap= () => {

    return (
        //The <Map></Map> need the following props
        //initialCenter={} will be the center on the Map
        <Map
            google={window.google}
            zoom={17}
            style={mapStyles}
            initialCenter={
                {
                    lat: 29.423965454101562,
                    lng: -98.49610900878906
                }
            }
        >
           
           <Marker
              position={
                  {
                    lat: 29.423965454101562,
                    lng: -98.49610900878906
                  }
              }
           /> 

        </Map>
    )
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyDmLAfjKmC8QaECb2d7RAFGiUT2s0FuVK0"
})(GoogleMap);