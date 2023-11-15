import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/NavBar/NavBar";
import PageLoadProgressBar from "@/components/PageLoadProgressBar/PageLoadProgressBar";

export default function Layout({ children }) {
    // Put Header or Footer around the children element
    // Example
    return (
        <>
            <PageLoadProgressBar />
            <Navbar />

            {children}

            <Footer />
        </>
    );
}
