import renderer from "react-test-renderer";
import TestimonialsSection from "../TestimonialsSection";

it("renders correctly", () => {
    const tree = renderer.create(<TestimonialsSection />).toJSON();
    expect(tree).toMatchSnapshot();
});
