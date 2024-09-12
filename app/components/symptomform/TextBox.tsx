// This is the textbox component, which basically just takes in text. not styled yet!
import React from "react";

interface TextBoxProps {
    name: string;
    placeholder: string;
}

const TextBox: React.FC<TextBoxProps> = ({ name, placeholder }) => (
    <textarea
        name={name}
        placeholder={placeholder}
        className="your-textarea-classes-here"
    />
);

export default TextBox;
