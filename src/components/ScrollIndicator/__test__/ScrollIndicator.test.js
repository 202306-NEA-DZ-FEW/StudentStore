import renderer from "react-test-renderer";

import ScrollIndicator from "../ScrollIndicator";

it("renders correctly", () => {
    const tree = renderer.create(<ScrollIndicator />).toJSON();
    expect(tree).toMatchSnapshot();
});
