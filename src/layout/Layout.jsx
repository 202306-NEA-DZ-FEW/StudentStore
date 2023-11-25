import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/NavBar/NavBar";
import PageLoadProgressBar from "@/components/PageLoadProgressBar/PageLoadProgressBar";
import { useState } from "react";
import { useEffect } from "react";
import Loader from "@/components/Loader/Loader";
export default function Layout({ children }) {
    const router = useRouter();
    const hideNavbarAndFooter = router.pathname === "/";
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const handleStart = () => {
            setLoading(true);
        };

        const handleComplete = () => {
            setLoading(false);
        };

        router.events.on("routeChangeStart", handleStart);
        router.events.on("routeChangeComplete", handleComplete);
        router.events.on("routeChangeError", handleComplete);

        return () => {
            router.events.off("routeChangeStart", handleStart);
            router.events.off("routeChangeComplete", handleComplete);
            router.events.off("routeChangeError", handleComplete);
        };
    }, [router]);
    const { t } = useTranslation("common");
    return (
        <>
            {/* <Navbar />
             */}
            {!hideNavbarAndFooter && <Navbar t={t} />}
            {loading ? <Loader /> : children}

            {/* <Footer /> */}
            {!hideNavbarAndFooter && <Footer t={t} />}
        </>
    );
}
