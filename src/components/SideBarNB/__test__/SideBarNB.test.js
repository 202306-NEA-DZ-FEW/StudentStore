import renderer from "react-test-renderer";

import SidebarNB from "../SideBarNB";
import { AuthProvider } from "@/context/AuthContext";

jest.mock("../../../util/firebase", () => {
    return {
        initializeApp: jest.fn(),
    };
});

it("renders correctly", () => {
    const tree = renderer
        .create(
            <AuthProvider>
                <SidebarNB />
            </AuthProvider>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
