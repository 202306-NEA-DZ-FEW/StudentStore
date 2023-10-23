import renderer from "react-test-renderer";

import ProfileDropdown from "../ProfileDropdown";

it("renders correctly", () => {
    const tree = renderer.create(<ProfileDropdown />).toJSON();
    expect(tree).toMatchSnapshot();
});
