import React from "react";
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler)

// Fake data for the symptom graphs (ie. time and average symptom severity in that time)
const symptomGraphData = {
    labels: [ // May need to change the time interval later
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
    ],
    datasets: [
        {
            label: "Average Severity of {Symptom}",
            data: [8, 7, 6, 3, 2, 5, 10], // assumes that the average for each time interval is already calculated here
            borderColor: "hsla(270, 50%, 40%, 1)",
            backgroundColor: (context) => { // pretty gradient
                const ctx = context.chart.ctx;
                const gradient = ctx.createLinearGradient(0, 0, 0, context.chart.height);
                gradient.addColorStop(0, 'hsla(270, 50%, 40%, 0.2)');
                gradient.addColorStop(1, 'white');
                return gradient;
            },
            fill: true,
            pointBackgroundColor: "hsla(0, 100%, 100%, 1)",
        },
    ],
};

function SymptomGraphLine() {
    const options = {
        tension: 0.3, // Curve tension
        elements: {

        },
        scales: {
            x: {
                ticks: {
                    font: {
                        size: "15px",
                        family: "Inter",
                        weight: "normal",
                    },
                },
            },
            y: {
                ticks: {
                    font: {
                        size: "15px", 
                        family: "Inter",
                        weight: "normal",
                    },
                },
            },
        },
        plugins: {
            legend: {
                labels: {
                    font: {
                        size: "15px",
                        family: "Inter",
                    },
                },
            },
        },
    };
    
    return <Line options={options} data={symptomGraphData} />;
}

export default SymptomGraphLine;

