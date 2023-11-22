import renderer from "react-test-renderer";

import { AuthProvider } from "@/context/AuthContext";
import ProductDetails from "../ProductDetails";

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
                <ProductDetails />
            </AuthProvider>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
