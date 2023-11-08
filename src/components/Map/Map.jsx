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
    const [position, setPosition] = useState([0, 0]); // Default position
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            const productRef = doc(db, "products", "1");
            const productDoc = await getDoc(productRef);

            if (productDoc.exists()) {
                const productData = productDoc.data();
                const productLocation = productData?.location;

                if (
                    productLocation &&
                    productLocation.latitude &&
                    productLocation.longitude
                ) {
                    const latitude = productLocation.latitude;
                    const longitude = productLocation.longitude;
                    setPosition([latitude, longitude]);
                }

                if (
                    productLocation &&
                    productLocation.city &&
                    productLocation.country
                ) {
                    setCity(productLocation.city);
                    setCountry(productLocation.country);
                }
            }
        };

        fetchData();
    }, []);

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
