/*
the list items on the medications page
 */

import React from "react";

import Button from "~/components/ui/Button"

type MedicationItemProps = {
    title: string,
    dosage: string,
    hadToday: boolean,
}

// Variants for completed or not completed
const variants = {
    true: "w-[400px] bg-gray-950 py-6 px-8 border-2 border-teal-400 bg-teal-950 rounded-xl",
    false: "w-[400px] bg-gray-950 py-6 px-8 rounded-xl"
}


function MedicationItem({title, dosage, hadToday}: MedicationItemProps) {

    const [checked, setChecked] = React.useState(hadToday);

    return(
        <div className={variants[`${checked}`]}>
            <div className="flex flex-col gap-4">
                <div className="flex justify-between">
                    <span className="text-md text-gray-200 font-bold">{title}</span>
                    <span className="text-md text-gray-300">{dosage}</span>
                </div>
                <div className="h-[50px]">
                    <Button variant="secondary" onClick={() => setChecked(!checked)}>Check</Button>
                </div>
            </div>
        </div>
    )
}

export default MedicationItem
