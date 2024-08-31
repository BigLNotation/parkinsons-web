import React from 'react';
import RangeSlider from '~/components/RangeSlider';

interface SliderQuestionsProps {
    symptom: string;
    questions: {
        text: string;
        answers: string[];
    }[];
    onSliderChange: (value: number) => void;
}

const SliderQuestions: React.FC<SliderQuestionsProps> = ({ symptom, questions, onSliderChange }) => {
    return (
        <div className="w-[45vw] m-10">
            {questions.map((question, index) => (
                <div key={index}>
                    <h1 className="text-lg font-bold font-sans mt-10">
                        {question.text.replace('${symptom}', symptom.toLowerCase())}
                    </h1>
                    <div className="grid grid-cols-3 gap-16">
                        {question.answers.map((answer, idx) => (
                            <p 
                                key = {idx} 
                                className = {`text-sm font-inter ${idx == 0 ? 'text-left': idx === 1 ? 'text-center' : 'text-right'}`}>
                                {answer.replace('${symptom}', symptom.toLowerCase())}
                            </p>
                        ))}
                    </div>
                    <RangeSlider min={0} max={100} step={25} onChange={onSliderChange} />
                </div>
            ))}
        </div>
    );
};

export default SliderQuestions;
