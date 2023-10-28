import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import firebase from "../../util/firebase.js";
import "firebase/firestore";

const MapContainer = dynamic(
    () => import("react-leaflet").then((module) => module.MapContainer),
    {
        ssr: false,
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

const Map = () => {
    const [location, setLocation] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const firestore = firebase.firestore();
                const studentRef = firestore.collection("Student").doc("5");
                const doc = await studentRef.get();

                if (doc.exists) {
                    const studentData = doc.data();
                    setLocation(studentData.location);
                } else {
                    console.log("No such document!");
                }
            } catch (error) {
                console.error("Error fetching location data:", error);
            }
        };

        fetchData();
    }, []);

    if (!location) {
        return <div>Loading...</div>;
    }

    const { latitude, longitude, city, country } = location;

    return (
        <MapContainer
            center={[latitude, longitude]}
            zoom={10}
            style={{ height: "400px" }}
        >
            <TileLayer
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                attribution="Map data © <a href='https://openstreetmap.org'>OpenStreetMap</a> contributors"
            />
            <Marker position={[latitude, longitude]}>
                <Popup>
                    Location: {city}, {country}
                </Popup>
            </Marker>
        </MapContainer>
    );
};

export default Map;
