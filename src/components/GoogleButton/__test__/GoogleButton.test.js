import renderer from "react-test-renderer";
import GoogleButton from "../GoogleButton";

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
    const tree = renderer.create(<GoogleButton />).toJSON();
    expect(tree).toMatchSnapshot();
});
