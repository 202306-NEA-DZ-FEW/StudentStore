import renderer from "react-test-renderer";
import Faq from "./Faq";

jest.mock("next/router", () => ({
    useRouter: () => ({
        pathname: "/",
    }),
}));

const t = (key) => key;
it("renders correctly", () => {
    const tree = renderer.create(<Faq t={t} />).toJSON();
    expect(tree).toMatchSnapshot();
});
