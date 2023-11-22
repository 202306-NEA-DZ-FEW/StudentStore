import renderer from "react-test-renderer";

import OrderSummary from "../OrderSummary";

jest.mock("next/router", () => ({
    useRouter: () => ({
        pathname: "/",
        locale: "en",
    }),
}));
const t = (key) => key;
it("renders correctly", () => {
    const tree = renderer.create(<OrderSummary t={t} />).toJSON();
    expect(tree).toMatchSnapshot();
});
