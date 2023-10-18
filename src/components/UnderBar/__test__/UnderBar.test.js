import renderer from "react-test-renderer";
import UnderBar from "../UnderBar";

it("renders correctly", () => {
    const tree = renderer.create(<UnderBar />).toJSON();
    expect(tree).toMatchSnapshot();
});
