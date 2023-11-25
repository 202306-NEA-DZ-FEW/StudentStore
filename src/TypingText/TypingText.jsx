const { useEffect, useState } = require("react");

const TypingText = ({ text, speed }) => {
    const [displayText, setDisplayText] = useState("");

    useEffect(() => {
        const interval = setInterval(() => {
            if (displayText.length < text.length) {
                setDisplayText(text.substring(0, displayText.length + 1));
            } else {
                clearInterval(interval);
            }
        }, speed);
        return () => clearInterval(interval);
    }, [displayText, text, speed]);

    return (
        <p className='font-poppins leading-loose font-normal text-2xl text-[#585785] '>
            <strong>{displayText}</strong>
        </p>
    );
};

export default TypingText;
