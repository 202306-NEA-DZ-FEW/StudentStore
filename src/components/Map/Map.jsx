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
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const productRef = doc(db, "products", "1");
            const productDoc = await getDoc(productRef);

            if (productDoc.exists()) {
                const productData = productDoc.data();
                const productLocation = productData?.location;
                const productAddress = productData?.address;

                if (
                    productLocation &&
                    productLocation.latitude &&
                    productLocation.longitude
                ) {
                    const latitude = productLocation.latitude;
                    const longitude = productLocation.longitude;
                    setPosition([latitude, longitude]);
                } else {
                    console.log("Product location coordinates are undefined.");
                    // Handle the case when latitude or longitude is undefined.
                }

                if (
                    productLocation &&
                    productLocation.city &&
                    productLocation.country
                ) {
                    setCity(productLocation.city);
                    setCountry(productLocation.country);
                } else {
                    console.log("Product address is undefined.");
                    // Handle the case when city or country is undefined.
                }
            } else {
                console.log("No such product document!");
                // Handle the case when the product document does not exist.
            }

            setLoading(false);
        };

        fetchData();
    }, []);

    const customMarkerIcon = new L.Icon({
        iconUrl: "/marker1.png",
        iconRetinaUrl: "/marker.png",
        iconSize: [38, 38],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32],
    });

    return (
        <div className='flex justify-center items-center h-screen'>
            <div className='border border-black rounded-lg w-9/12 h-3/6'>
                {!loading && (
                    <MapContainer
                        center={position}
                        zoom={15}
                        style={{ width: "100%", height: "100%" }}
                    >
                        <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />

                        {position[0] !== 0 && position[1] !== 0 && (
                            <Marker position={position} icon={customMarkerIcon}>
                                <Popup>{`${city}, ${country}`}</Popup>
                            </Marker>
                        )}
                    </MapContainer>
                )}
            </div>
        </div>
    );
};

export default MapComponent;
