import renderer from "react-test-renderer";

import Footer from "../Footer";
import { AuthProvider } from "@/context/AuthContext";

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
                <Footer t={() => "Mock Translation Function"} />
            </AuthProvider>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
