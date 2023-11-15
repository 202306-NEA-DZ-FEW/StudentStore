import renderer from "react-test-renderer";

import PageLoadProgressBar from "../PageLoadProgressBar";

it("renders correctly", () => {
    const tree = renderer.create(<PageLoadProgressBar />).toJSON();
    expect(tree).toMatchSnapshot();
});
