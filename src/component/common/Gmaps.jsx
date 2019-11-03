import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

const Marker = ({ text }) => (
    <i
        className="fa fa-map-marker fa-3x"
        aria-hidden="true"
        style={{ color: "red" }}
    >
        <h3>{text.toUpperCase()}</h3>
    </i>
);

class Gmaps extends Component {
    render() {
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: "100vh", width: "100%" }}>
                <GoogleMapReact
                    bootstrapURLKeys={{
                        key: "AIzaSyDfJvam7mTnXOVfvvZjJMiGdONov2V5kfM"
                    }}
                    defaultCenter={{
                        lat: this.props.lat,
                        lng: this.props.lng
                    }}
                    defaultZoom={12}
                >
                    <Marker
                        lat={this.props.lat}
                        lng={this.props.lng}
                        text={this.props.name}
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

export default Gmaps;
