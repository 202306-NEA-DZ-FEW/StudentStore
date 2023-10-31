async function getLatLng(city, country) {
    const apiKey = process.env.NEXT_PUBLIC_OPENCAGE_API_KEY;
    let response;
    try {
        response = await fetch(
            `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(
                city + ", " + country
            )}&key=${apiKey}`
        );
    } catch (error) {
        console.error("Error fetching location data:", error);
        throw error;
    }
    const data = await response.json();

    if (data.results && data.results.length > 0) {
        const { lat, lng } = data.results[0].geometry;
        return { latitude: lat, longitude: lng };
    } else {
        throw new Error("Invalid address or geocoding error");
    }
}

export default getLatLng;
