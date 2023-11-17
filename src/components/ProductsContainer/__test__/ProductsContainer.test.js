import renderer from "react-test-renderer";
import ProductsContainer from "../ProductsContainer";

jest.mock("next/router", () => ({
    useRouter: () => ({
        pathname: "/",
        locale: "en",
    }),
}));
const t = (key) => key;
it("renders correctly", () => {
    const tree = renderer.create(<ProductsContainer t={t} />).toJSON();
    expect(tree).toMatchSnapshot();
});
