import renderer from "react-test-renderer";
import TwitterButton from "../TwitterButton";

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
const t = (key) => key;
it("renders correctly", () => {
    const tree = renderer.create(<TwitterButton t={t} />).toJSON();
    expect(tree).toMatchSnapshot();
});
