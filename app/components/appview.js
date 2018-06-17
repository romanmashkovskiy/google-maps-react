import React from 'react';
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';

class GoogleMapsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentLocation: {
                lat: 45,
                lng: 45
            }
        };
        this.geoFindMe = this.geoFindMe.bind(this);
        this.success = this.success.bind(this);
    }

    success(position) {
        this.setState({
            currentLocation: {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            }
        });
    }

   error() {
        alert('Unable to retrieve your location. Please reload the page');
    }

    geoFindMe() {
        if (!navigator.geolocation){
            alert('Geolocation is not supported by your browser');
            return;
        }
        let options = {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 10000
        };
        navigator.geolocation.getCurrentPosition(this.success, this.error, options);
    }

    componentDidMount(){
        this.geoFindMe();
    }

    render() {
        const style = {
            width: '100%',
            height: '100%'
        };
        return (
            <Map
                style = { style }
                google = { this.props.google }
                zoom = { 16 }
                center={{
                    lat: this.state.currentLocation.lat,
                    lng: this.state.currentLocation.lng
                }}
            >
                <Marker
                    title = { 'Current location' }
                    position={{lat: this.state.currentLocation.lat, lng: this.state.currentLocation.lng}}
                    name = { 'Current location' }
                />
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: process.env.GOOGLE_API_KEY_GOES_HERE,
    language: 'rus'
})(GoogleMapsContainer)