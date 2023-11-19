import renderer from "react-test-renderer";
import UnderBar from "../UnderBar";
jest.mock("next/router", () => ({
    useRouter: () => ({
        pathname: "/",
    }),
}));

it("renders correctly", () => {
    const tree = renderer.create(<UnderBar />).toJSON();
    expect(tree).toMatchSnapshot();
});
