import renderer from "react-test-renderer";
import GoogleButton from "../GoogleButton";

jest.mock("../../../util/firebase", () => {
    return {
        initializeApp: jest.fn(),
    };
});

it("renders correctly", () => {
    const tree = renderer.create(<GoogleButton />).toJSON();
    expect(tree).toMatchSnapshot();
});
