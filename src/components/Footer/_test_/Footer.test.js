import renderer from "react-test-renderer";

import Footer from "../Footer"; // Adjust the import path as needed

it("renders correctly", () => {
    const tree = renderer
        .create(<Footer t={() => "Mock Translation Function"} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
