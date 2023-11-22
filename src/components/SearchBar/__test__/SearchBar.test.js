import renderer from "react-test-renderer";
import SearchBar from "../SearchBar";

jest.mock("next/router", () => ({
    useRouter: () => ({
        pathname: "/",
        locale: "en",
    }),
}));

jest.mock("../../../util/firebase", () => {
    return {
        initializeApp: jest.fn(),
    };
});
const t = (key) => key;
it("renders correctly", () => {
    const tree = renderer.create(<SearchBar t={t} />).toJSON();
    expect(tree).toMatchSnapshot();
});
