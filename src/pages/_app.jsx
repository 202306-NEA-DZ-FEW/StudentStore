import { appWithTranslation } from "next-i18next";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "@/styles/globals.css";

import { AuthProvider } from "@/context/AuthContext";
import { CartProvider } from "@/context/CartContext";
import Layout from "@/layout/Layout";

function MyApp({ Component, pageProps }) {
    return (
        <AuthProvider>
            <CartProvider>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </CartProvider>
            <ToastContainer />
        </AuthProvider>
    );
}

export default appWithTranslation(MyApp);
