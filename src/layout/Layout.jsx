import { useRouter } from "next/router";

import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/NavBar/NavBar";
import PageLoadProgressBar from "@/components/PageLoadProgressBar/PageLoadProgressBar";
export default function Layout({ children }) {
    const router = useRouter();
    const hideNavbarAndFooter = router.pathname === "/";
    // Put Header or Footer around the children element
    // Example
    return (
        <>
            <PageLoadProgressBar />
            {/* <Navbar />
             */}
            {!hideNavbarAndFooter && <Navbar />}
            {children}

            {/* <Footer /> */}
            {!hideNavbarAndFooter && <Footer />}
        </>
    );
}
