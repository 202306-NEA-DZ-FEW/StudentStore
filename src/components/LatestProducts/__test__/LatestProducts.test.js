import renderer from "react-test-renderer";

import LatestProducts from "../LatestProducts";

jest.mock("../../../util/firebase", () => {
    return {
        initializeApp: jest.fn(),
    };
});
const t = (key) => key;
it("renders correctly", () => {
    const tree = renderer.create(<LatestProducts t={t} />).toJSON();
    expect(tree).toMatchSnapshot();
});
