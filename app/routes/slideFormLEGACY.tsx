// This file accesses the SymptomForm component and has a list of questions and answers for each symptom
import React, { useState } from 'react';
import SymptomForm from '~/components/symptoms/form/SymptomForm';

/*
This file's functionality has been superseded by the page route for symptoms: dashboard.patients.symptoms, and the
SymptomForm component and symptom_questions data in the symptoms/form component folder.
 */

const Slider: React.FC = () => {
    const [currentSymptom, setCurrentSymptom] = useState('Depression'); // change state to change symptom

    const symptomQuestions = {
        Tremor: [
            {
                text: "How much does your ${symptom} influence your daily routine? (Severity)",
                answers: [
                    "My ${symptom} does not influence my routine.",
                    "My ${symptom} makes my routine difficult.",
                    "My ${symptom} stops me from completing my routine."
                ]
            },
            {
                text: "How has your tremor influence your ability to use tools, such as spoons?",
                answers: [
                    "My tremor does not influence utensil use.",
                    "My tremor can make using utensils difficult.",
                    "My tremor stops me from using utensils."
                ]
            },
            {
                text: "How has your mood affected your tremors?",
                answers: [
                    "Mood has little or no impact on my tremors, they are consistent.",
                    "Mood can increase my tremors, but don't always.",
                    "Strong emotion, such as high stress, always increases my tremors."
                ]
            }
        ],
        Anxiety: [
            {
                text: "How much does your ${symptom} influence your daily routine? (Severity)",
                answers: [
                    "My ${symptom} does not influence my routine.",
                    "My ${symptom} makes my routine difficult.",
                    "My ${symptom} stops me from completing my routine."
                ]
            },
            {
                text: "How often does ${symptom} cause you to avoid social situations?",
                answers: [
                    "My ${symptom} does not cause me to avoid social situations.",
                    "My ${symptom} sometimes causes me to avoid social situations.",
                    "My ${symptom} always causes me to avoid social situations."
                ]
            },
            {
                text: "How much does ${symptom} affect your ability to relax?",
                answers: [
                    "My ${symptom} does not affect my ability to relax.",
                    "My ${symptom} makes it difficult to relax.",
                    "My ${symptom} prevents me from relaxing."
                ]
            }
        ],
        Depression: [
            {
                text: "How much does your ${symptom} influence your daily routine? (Severity)",
                answers: [
                    "My ${symptom} does not influence my routine.",
                    "My ${symptom} makes my routine difficult.",
                    "My ${symptom} stops me from completing my routine."
                ]
            },
            {
                text: "How much does your ${symptom} impact your motivation to complete daily tasks?",
                answers: [
                    "My ${symptom} does not impact my motivation.",
                    "My ${symptom} reduces my motivation.",
                    "My ${symptom} completely drains my motivation."
                ]
            },
            {
                text: "How much engagement do you have in your hobbies / interests?",
                answers: [
                    "I have one or more hobbies which I upkeep regularly (e.g. once a week).",
                    "I have one or more hobbies that I occasionally partake in (e.g. once every month).",
                    "I have no hobbies that I actively engage in."
                ]
            }
        ]
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white">
            <SymptomForm 
                symptom={currentSymptom} 
                questions={symptomQuestions[currentSymptom]} 
            />
        </div>
    );
};

export default Slider;
