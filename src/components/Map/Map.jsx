import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { GiPositionMarker } from "react-icons/gi";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet/dist/images/marker-icon.png";
import "leaflet/dist/images/marker-shadow.png";
import "leaflet/dist/leaflet.css";
import { db } from "@/util/firebase";
import { doc, getDoc } from "firebase/firestore";

const MapComponent = () => {
    const [position, setPosition] = useState([0, 0]);

    return (
        <div>
            <div>
                <MapContainer style={{ width: "100%", height: "100%" }}>
                    <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />

                    <Marker>
                        <Popup></Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
    );
};

export default MapComponent;
