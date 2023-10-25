import renderer from "react-test-renderer";
import TwitterButton from "../TwitterButton";

jest.mock("../../../util/firebase", () => {
    return {
        initializeApp: jest.fn(),
    };
});

it("renders correctly", () => {
    const tree = renderer.create(<TwitterButton />).toJSON();
    expect(tree).toMatchSnapshot();
});
