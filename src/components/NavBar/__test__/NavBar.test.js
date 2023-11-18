import renderer from "react-test-renderer";
import NavBar from "../NavBar";
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
                <NavBar />
            </AuthProvider>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
