import renderer from "react-test-renderer";

import Uploading from "../Uploading";

it("renders correctly", () => {
    const tree = renderer.create(<Uploading />).toJSON();
    expect(tree).toMatchSnapshot();
});
