import renderer from "react-test-renderer";

import NavBar from "../NavBar";
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
    const tree = renderer.create(<NavBar />).toJSON();
    expect(tree).toMatchSnapshot();
});
