import React from "react";
import { Doughnut, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Tooltip, Legend, ArcElement } from 'chart.js';

ChartJS.register(Tooltip, Legend, ArcElement);

// Fake data for the symptom graphs (ie. symptoms and frequency of those tremors)
const symptomGraphData = {
    labels: ["Tremors", "Depression", "Anxiety", "Rigidity", "Bradykinesia"],
    datasets: [
        {
            label: "Frequency of Symptoms",
            data: [18, 10, 4, 17, 10], // Number of times each symptom has been reported so far
            backgroundColor: [
                "hsla(170, 65%, 30%, 1)",
                "hsla(270, 50%, 35%, 1)",
                "hsla(270, 40%, 50%, 1)",
                "hsla(270, 40%, 70%, 1)",
                "hsla(270, 50%, 80%, 1)"
            ],
            hoverOffset: 4,
            borderWidth: 10
        },
    ],
};

function SymptomGraphPie() {
    const options = {
        plugins: {
            legend: {
                display: true,
                labels: {
                    font: {
                        size: "15px",
                        family: "Inter",
                        weight: "normal"
                    }
                }
            }
        }
    };
    return <Doughnut options={options} data={symptomGraphData} />;
}

export default SymptomGraphPie