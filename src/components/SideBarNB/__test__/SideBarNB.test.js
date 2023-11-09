import renderer from "react-test-renderer";

import SidebarNB from "../SideBarNB";

jest.mock("../../../util/firebase", () => {
    return {
        initializeApp: jest.fn(),
    };
});

it("renders correctly", () => {
    const tree = renderer.create(<SidebarNB />).toJSON();
    expect(tree).toMatchSnapshot();
});
