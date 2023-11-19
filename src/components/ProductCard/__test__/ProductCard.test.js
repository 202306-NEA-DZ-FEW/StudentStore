import renderer from "react-test-renderer";

import { AuthProvider } from "@/context/AuthContext";
import { CartProvider } from "@/context/CartContext";

import ProductCard from "../ProductCard";
jest.mock("../../../util/firebase", () => {
    return {
        initializeApp: jest.fn(),
    };
});

jest.mock("next/router", () => ({
    useRouter: () => ({
        pathname: "/",
    }),
}));
it("renders correctly", () => {
    const tree = renderer
        .create(
            <AuthProvider>
                <CartProvider>
                    <ProductCard />
                </CartProvider>
            </AuthProvider>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
