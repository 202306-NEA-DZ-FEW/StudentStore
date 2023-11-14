import renderer from "react-test-renderer";
import Notification from "../Notitification";

jest.mock("react-icons/ai", () => ({
    AiFillCloseCircle: "mocked-AiFillCloseCircle",
}));

it("renders correctly", () => {
    const tree = renderer.create(<Notification />).toJSON();
    expect(tree).toMatchSnapshot();
});
