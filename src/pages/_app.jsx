import { appWithTranslation } from "next-i18next";

import "@/styles/globals.css";

import { AuthProvider } from "@/context/AuthContext";
import { CartProvider } from "@/context/CartContext";
import Layout from "@/layout/Layout";
import { UserListingsProvider } from "@/context/UserListingsContext";

function MyApp({ Component, pageProps }) {
    return (
        <AuthProvider>
            <CartProvider>
                <UserListingsProvider>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </UserListingsProvider>
            </CartProvider>
        </AuthProvider>
    );
}

export default appWithTranslation(MyApp);
