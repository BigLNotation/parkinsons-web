// This is the symptom form component, which takes a question component and ideally will take a textbox component. Submitting this form stores all the data from the RangeSlider for each question and the TextBox.
import React from 'react';
import Question from '~/components/Question';
import TextBox from '~/components/TextBox';

interface SymptomFormProps {
    symptom: string;
    questions: {
        text: string;
        answers: string[];
    }[];
}

const SymptomForm: React.FC<SymptomFormProps> = ({ symptom, questions }) => {
    return (
        <form 
            className="w-[45vw] m-10" 
            method="post" 
            action="/form-endpoint"
        >
            {questions.map((question, index) => {
                const questionId = `question_${index}`;
                return ( // question component
                    <Question 
                        key={questionId} //ID for the question
                        text={question.text.replace('${symptom}', symptom.toLowerCase())}
                        answers={question.answers.map(answer => answer.replace('${symptom}', symptom.toLowerCase()))}
                        min={0}
                        max={100}
                        step={25}
                        sliderName={questionId}
                    />
                );
            })}
            <TextBox name="notes" placeholder="Leave any additional notes here, please!"/> {/* Style later! */}
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Submit</button> {/* Style later! */}
        </form>
    );
};

export default SymptomForm;