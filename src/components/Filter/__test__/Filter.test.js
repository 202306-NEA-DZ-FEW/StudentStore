import renderer from "react-test-renderer";

import Filter from "../Filter";
jest.mock("next/router", () => ({
    useRouter: () => ({
        pathname: "/",
        locale: "en",
    }),
}));
const t = (key) => key;
it("renders correctly", () => {
    const tree = renderer.create(<Filter t={t} />).toJSON();
    expect(tree).toMatchSnapshot();
});
