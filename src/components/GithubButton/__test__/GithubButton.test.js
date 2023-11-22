import renderer from "react-test-renderer";
import GithubButton from "../GithubButton";

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
    const tree = renderer.create(<GithubButton />).toJSON();
    expect(tree).toMatchSnapshot();
});
