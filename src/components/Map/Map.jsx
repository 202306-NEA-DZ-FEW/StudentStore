import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { db } from "@/util/firebase";
import {
    doc,
    getDoc,
    query,
    collection,
    where,
    getDocs,
} from "firebase/firestore";
import dynamic from "next/dynamic";

const MapComponent = () => {
    const [position, setPosition] = useState([0, 0]);
    const [city, setCity] = useState("");

    useEffect(() => {
        if (typeof window !== "undefined") {
            const fetchData = async () => {
                const userinfoRef = doc(
                    db,
                    "userinfo",
                    "e43JDIG05abGPsH43xEKBNsD49e2"
                );
                const userinfoDoc = await getDoc(userinfoRef);

                if (userinfoDoc.exists()) {
                    const userData = userinfoDoc.data();
                    const userCity = userData?.address?.city;

                    if (userCity) {
                        setCity(userCity);

                        const positionQuery = query(
                            collection(db, "position"),
                            where("city", "==", userCity)
                        );
                        const positionSnapshot = await getDocs(positionQuery);

                        positionSnapshot.forEach((doc) => {
                            const positionData = doc.data();
                            setPosition([
                                positionData.latitude,
                                positionData.longitude,
                            ]);
                        });
                    } else {
                        console.log("User city is undefined.");
                        // Handle the case when userCity is undefined.
                    }
                } else {
                    console.log("No such document!");
                }
            };

            fetchData();
        }
    }, []);

    return (
        <div className='w-96 h-96'>
            <MapContainer
                center={position}
                zoom={13}
                style={{ width: "100%", height: "100%" }}
            >
                <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
                <Marker position={position}>
                    <Popup>{city}</Popup>
                </Marker>
            </MapContainer>
        </div>
    );
};

export default MapComponent;
