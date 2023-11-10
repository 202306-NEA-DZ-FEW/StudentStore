import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/NavBar/NavBar";

export default function Layout({ children }) {
    // Put Header or Footer around the children element
    // Example
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
}
