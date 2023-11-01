import renderer from "react-test-renderer";
import SearchBar from "../SearchBar";

jest.mock("../../../util/firebase", () => {
    return {
        initializeApp: jest.fn(),
    };
});

it("renders correctly", () => {
    const tree = renderer.create(<SearchBar />).toJSON();
    expect(tree).toMatchSnapshot();
});
