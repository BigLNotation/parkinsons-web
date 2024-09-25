import React from 'react';
import SymptomGraphLine from '~/components/progress/SymptomGraphLine';
import SymptomGraphPie from '~/components/progress/SymptomGraphPie';


const GRAPH_TEST = () => {
    return (
        <div className="p-6">
            <h1 className="text-lg font-bold font-sans text-center mb-4">Symptom Severity Over Time</h1>
            <div className="flex justify-center">
                <div className="w-full max-w-2xl">
                    <SymptomGraphLine/>
                </div>
            </div>
            <br/><br/>
            <h1 className="text-lg font-bold font-sans text-center mb-4">Symptoms by Frequency</h1>
            <div className="flex justify-center">
                <div className="w-full max-w-2xl">
                    <SymptomGraphPie/>
                </div>
            </div>
        </div>
        
    )
}

export default GRAPH_TEST