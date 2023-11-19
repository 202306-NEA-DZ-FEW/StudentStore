import renderer from "react-test-renderer";

import ProductsContainer from "../ProductsContainer";

jest.mock("../../../util/firebase", () => {
    return {
        initializeApp: jest.fn(),
    };
});

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
