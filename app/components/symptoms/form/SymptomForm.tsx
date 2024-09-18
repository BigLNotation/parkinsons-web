// This is the symptom form component, which takes a question component and ideally will take a textbox component. Submitting this form stores all the data from the RangeSlider for each question and the TextBox.
import React from 'react';
import Question from '~/components/symptoms/form/Question';
import TextBox from '~/components/symptoms/form/TextBox';
import Button from "~/components/ui/Button";

import symptomQuestions from "~/components/symptoms/form/symptom_questions";

interface SymptomFormProps {
    symptom: string,
    handleSymptomClick: (a: string)=>void
    // questions: {
    //     text: string;
    //     answers: string[];
    // }[];
}

const SymptomForm: React.FC<SymptomFormProps> = ({ symptom, handleSymptomClick }) => {

    const questions = symptomQuestions[symptom];

    function handleSubmit(){
        event.preventDefault()

        // Close the form by removing the symptom from state
        handleSymptomClick("");

        // TODO some actual submitting stuff
    }

    return (
        <form 
            className="flex flex-col gap-12 text-gray-200"
            //method="post"
            //action="endpoint"
            onSubmit={() => handleSubmit}
        >
            {questions && questions.map((question, index) => {
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
            <textarea name="notes" placeholder="Leave any additional notes here, please!" className="bg-gray-990 border-2 border-gray-850 py-2 px-2 rounded-xl"/>
            <div className="flex gap-4 mx-auto">
                <Button variant="tertiary">Back</Button>
                <Button variant="primary" type="submit">Submit</Button>
            </div>

        </form>
    );
};

export default SymptomForm;