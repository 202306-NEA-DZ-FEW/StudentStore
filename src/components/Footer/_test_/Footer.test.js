import renderer from "react-test-renderer";

import Footer from "../Footer";

jest.mock("next/router", () => ({
    useRouter: () => ({
        pathname: "/",
    }),
}));

it("renders correctly", () => {
    const tree = renderer
        .create(<Footer t={() => "Mock Translation Function"} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
