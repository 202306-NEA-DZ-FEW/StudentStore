import renderer from "react-test-renderer";
import TestimonialsSection from "../TestimonialsSection";

const t = (key) => key;
it("renders correctly", () => {
    const tree = renderer.create(<TestimonialsSection t={t} />).toJSON();
    expect(tree).toMatchSnapshot();
});
