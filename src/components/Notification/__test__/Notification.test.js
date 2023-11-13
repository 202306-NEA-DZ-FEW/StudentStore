import renderer from "react-test-renderer";

import Notification from "../Notification";

it("renders correctly", () => {
    const tree = renderer.create(<Notification />).toJSON();
    expect(tree).toMatchSnapshot();
});
