import renderer from "react-test-renderer";

import UnderBar from "../UnderBar";
jest.mock("next/router", () => ({
    useRouter: () => ({
        pathname: "/",
        locale: "en",
    }),
}));
const t = (key) => key;
it("renders correctly", () => {
    const tree = renderer.create(<UnderBar t={t} />).toJSON();
    expect(tree).toMatchSnapshot();
});
