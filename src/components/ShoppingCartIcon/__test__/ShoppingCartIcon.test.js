import renderer from "react-test-renderer";

import { AuthProvider } from "@/context/AuthContext";

import ShoppingCartIcon from "../ShoppingCartIcon";

jest.mock("../../../util/firebase", () => {
    return {
        initializeApp: jest.fn(),
    };
});

it("renders correctly", () => {
    const tree = renderer
        .create(
            <AuthProvider>
                <ShoppingCartIcon />
            </AuthProvider>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
