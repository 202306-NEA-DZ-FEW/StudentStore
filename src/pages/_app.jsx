import { appWithTranslation } from "next-i18next";

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
        </AuthProvider>
    );
}

export default appWithTranslation(MyApp);
