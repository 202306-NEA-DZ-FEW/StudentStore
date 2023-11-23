import renderer from "react-test-renderer";
import Loader from "../Loader";

jest.mock("react-spinners", () => ({
    GridLoader: jest
        .fn()
        .mockReturnValue(<div className='mocked-grid-loader' />),
}));

it("renders correctly", () => {
    const tree = renderer.create(<Loader />).toJSON();
    expect(tree).toMatchSnapshot();
});
