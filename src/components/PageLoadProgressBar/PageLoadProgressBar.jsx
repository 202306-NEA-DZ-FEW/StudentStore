import ProgressBar from "nextjs-progressbar";

const PageLoadProgressBar = () => (
    <ProgressBar
        color='tomato'
        startPosition={0.3}
        stopDelayMs={200}
        height={4}
        options={{ showSpinner: false }}
        showOnShallow={true}
    />
);

export default PageLoadProgressBar;
