import renderer from "react-test-renderer";

import SideBar from "../SideBar";
jest.mock("../../../util/firebase", () => {
    return {
        initializeApp: jest.fn(),
    };
});
jest.mock("next/router", () => ({
    useRouter: () => ({
        pathname: "/",
    }),
}));

it("renders correctly", () => {
    const tree = renderer.create(<SideBar />).toJSON();
    expect(tree).toMatchSnapshot();
});
