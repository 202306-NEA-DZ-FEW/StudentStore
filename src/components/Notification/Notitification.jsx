import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";

const Notification = ({ type, message, onClose }) => {
    const backgroundColor = type === "success" ? "#4CAF50" : "#FF5733";

    return (
        <div
            style={{
                backgroundColor,
                color: "white",
                padding: "10px",
                borderRadius: "5px",
                marginBottom: "10px",
            }}
        >
            <p>
                {message}{" "}
                <button onClick={onClose}>
                    <AiFillCloseCircle />
                </button>
            </p>
        </div>
    );
};

export default Notification;
