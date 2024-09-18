/*
Grid of symptoms for symptom tracking page. Imports SymptomCard component in the same directory.
 */

import React from "react"

import SymptomCard from "~/components/symptoms/SymptomCard";
import symptoms_array from "./symptom_data";

// This might be useful later:
// interface symptom {
//     symptom: string;
//     desc: string;
//     status: string;
//     recentlyCompleted: boolean;
//     route: string,
//     category: string,
// }

type SymptomGridProps = {
    category: string,
    handleSymptomClick: (string)=>void
}

function SymptomGrid({category, handleSymptomClick}: SymptomGridProps) {

    // display by category i.e. motor/nonmotor
    const displayed_symptoms = symptoms_array.filter((s) => s.category === category)

    return(
        <div className="flex flex-wrap gap-8 py-4">
            {displayed_symptoms.map((s) =>
                <SymptomCard symptom={s.symptom} desc={s.desc} status={s.status} recentlyCompleted={s.recentlyCompleted} key={s.symptom}
                             onClick={() => handleSymptomClick(s.symptom)}/>
            )}
        </div>
    )
}

export default SymptomGrid
