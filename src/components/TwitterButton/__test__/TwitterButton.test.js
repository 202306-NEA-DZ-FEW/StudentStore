import renderer from "react-test-renderer";
import TwitterButton from "../TwitterButton";

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
    const tree = renderer.create(<TwitterButton />).toJSON();
    expect(tree).toMatchSnapshot();
});
