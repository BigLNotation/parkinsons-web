// This code is the question component, which takes displays the question, answers and RangeSlider component
import React from 'react';
import RangeSlider from '~/components/symptomform/RangeSlider';

interface QuestionProps {
    text: string;
    answers: string[];
    min: number;
    max: number;
    step: number;
    sliderName: string;
}

const Question: React.FC<QuestionProps> = ({ text, answers, min, max, step, sliderName }) => {
    const id = `question-${sliderName}`;

    return (
        <div className="mb-10">
            <label htmlFor={id} className="text-lg font-bold font-sans mt-10">{text}</label>
            <div className="grid grid-cols-3 gap-16">
                {answers.map((answer, idx) => (
                    <p key={idx} className={`text-sm font-inter ${idx === 0 ? 'text-left' : idx === 1 ? 'text-center' : 'text-right'}`}>
                        {answer}
                    </p>
                ))}
            </div>
            <RangeSlider min={min} max={max} step={step} name={sliderName} id={id}/>
        </div>
    );
};

export default Question;
