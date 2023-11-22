import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/NavBar/NavBar";
import PageLoadProgressBar from "@/components/PageLoadProgressBar/PageLoadProgressBar";
export default function Layout({ children }) {
    const router = useRouter();
    const hideNavbarAndFooter = router.pathname === "/";
    // Put Header or Footer around the children element
    // Example
    const { t } = useTranslation("common");
    return (
        <>
            <PageLoadProgressBar />
            {/* <Navbar />
             */}
            {!hideNavbarAndFooter && <Navbar t={t} />}
            {children}

            {/* <Footer /> */}
            {!hideNavbarAndFooter && <Footer t={t} />}
        </>
    );
}
