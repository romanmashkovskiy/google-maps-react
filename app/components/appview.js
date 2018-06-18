import React from 'react';
import { GoogleApiWrapper, Map, Marker, Polygon } from 'google-maps-react';

class GoogleMapsContainer extends React.Component {
   //  constructor(props) {
   //      super(props);
   //      this.state = {
   //          currentLocation: {
   //              lat: 45,
   //              lng: 45
   //          }
   //      };
   //      this.geoFindMe = this.geoFindMe.bind(this);
   //      this.success = this.success.bind(this);
   //  }
   //
   //  success(position) {
   //      this.setState({
   //          currentLocation: {
   //              lat: position.coords.latitude,
   //              lng: position.coords.longitude
   //          }
   //      });
   //  }
   //
   // error() {
   //      alert('Unable to retrieve your location. Please reload the page');
   //  }
   //
   //  geoFindMe() {
   //      if (!navigator.geolocation){
   //          alert('Geolocation is not supported by your browser');
   //          return;
   //      }
   //      let options = {
   //          enableHighAccuracy: true,
   //          timeout: 5000,
   //          maximumAge: 5000
   //      };
   //      navigator.geolocation.getCurrentPosition(this.success, this.error, options);
   //  }
   //
   //  componentDidMount(){
   //      this.geoFindMe();
   //  }

    render() {
        const style = {
            width: '100%',
            height: '100%'
        };
        const triangleCoords = [
            {lat: 47.836502, lng: 35.131082},
            {lat: 47.836220, lng: 35.131606},
            {lat: 47.836118, lng: 35.131504},
            {lat: 47.836407, lng: 35.130968}
        ];
        return (
            <Map
                style = { style }
                google = { this.props.google }
                zoom = { 18 }
                initialCenter={{
                    lat: 47.836296,
                    lng: 35.131263
                }}

            >
                <Marker
                    title = { 'Current location' }
                    position={{lat: 47.836296, lng: 35.131263}}
                    name = { 'Current location' }
                />
                <Polygon
                    paths={triangleCoords}
                    strokeColor="#0000FF"
                    strokeOpacity={0.8}
                    strokeWeight={2}
                    fillColor="#0000FF"
                    fillOpacity={0.35} />
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: process.env.GOOGLE_API_KEY_GOES_HERE,
    language: 'rus'
})(GoogleMapsContainer)