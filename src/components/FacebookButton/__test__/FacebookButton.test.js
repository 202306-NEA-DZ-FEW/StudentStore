import renderer from "react-test-renderer";
import FaceBookButton from "../FacebookButton";

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

it("renders correctly", () => {
    const tree = renderer.create(<FaceBookButton />).toJSON();
    expect(tree).toMatchSnapshot();
});
