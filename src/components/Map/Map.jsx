import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { GiPositionMarker } from "react-icons/gi";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet/dist/images/marker-icon.png";
import "leaflet/dist/images/marker-shadow.png";
import "leaflet/dist/leaflet.css";

const MapContainer = dynamic(
    () => import("react-leaflet").then((module) => module.MapContainer),
    {
        loading: () => <p>Loading...</p>, // You can replace this with your loader component
        ssr: false, // Disables server-side rendering
    }
);

const TileLayer = dynamic(
    () => import("react-leaflet").then((module) => module.TileLayer),
    {
        ssr: false,
    }
);

const Marker = dynamic(
    () => import("react-leaflet").then((module) => module.Marker),
    {
        ssr: false,
    }
);

const Popup = dynamic(
    () => import("react-leaflet").then((module) => module.Popup),
    {
        ssr: false,
    }
);

const MapComponent = () => {
    const [position, setPosition] = useState([36, 3]); // Hardcoded position [latitude, longitude]
    const [city, setCity] = useState("Algiers"); // Hardcoded city
    const [country, setCountry] = useState("Algeria"); // Hardcoded country
    const [loading, setLoading] = useState(false); // No need to set it to true since data is hardcoded

    const customMarkerIcon = new L.Icon({
        iconUrl: "/marker.png",
        iconRetinaUrl: "/marker1.png",
        iconSize: [38, 38],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32],
    });

    return (
        <div className='flex justify-center items-center h-screen'>
            <div className='border border-black rounded-lg w-9/12 h-3/6'>
                <MapContainer
                    center={position}
                    zoom={15}
                    style={{ width: "100%", height: "100%" }}
                    noSsr // Disable server-side rendering
                >
                    <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />

                    {position[0] !== 0 && position[1] !== 0 && (
                        <Marker position={position} icon={customMarkerIcon}>
                            <Popup>{`${city}, ${country}`}</Popup>
                        </Marker>
                    )}
                </MapContainer>
            </div>
        </div>
    );
};

export default MapComponent;
