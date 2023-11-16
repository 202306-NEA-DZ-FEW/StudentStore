import renderer from "react-test-renderer";

import ProfileDropdown from "../ProfileDropdown";
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
                <ProfileDropdown />
            </AuthProvider>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
