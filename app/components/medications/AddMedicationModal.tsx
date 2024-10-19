/*
adding symptoms modal
 */

import React from "react";

import Button from "~/components/ui/Button"


function AddMedicationModal({toggleAddMedicationModal}: {toggleAddMedicationModal: () => void}) {

    return(
        <>
            <div
                // This is div centering madness.
                className="fixed z-[120] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-980 rounded-2xl px-9 py-8 flex flex-col gap-6 w-[95%] max-w-[650px] text-gray-200">
                <p className="text-2xl font-extrabold text-gray-200">Add a new medication</p>
                <p className="font-semibold">
                    Add a medication to the medication tracker.
                </p>

                <form className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="symptom-name" className="text-gray-200 font-semibold">Medication name
                            (required)</label>
                        <input type="text" id="symptom-name"
                               className="rounded-xl border-solid border-2 border-gray-850 px-4 h-10"></input>
                    </div>
                    <div className="flex flex-col gap-2 pt-4">
                        <label htmlFor="symptom-name" className="text-gray-200 font-semibold">Frequency</label>
                        <input type="text" id="symptom-name"
                               className="rounded-xl border-solid border-2 border-gray-850 px-4 h-10"></input>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="symptom-name" className="text-gray-200 font-semibold">Any other notes?</label>
                        <input type="text" id="symptom-name"
                               className="rounded-xl border-solid border-2 border-gray-850 px-4 h-24"></input>
                    </div>
                </form>

                <div className="flex gap-2 mt-4">
                    {/*TODO saving and submit functionality*/}
                    <Button variant={"primary"}>Save</Button>
                    <Button variant={"tertiary"} onClick={toggleAddMedicationModal}>Cancel</Button>
                </div>

            </div>
        </>
    )
}

export default AddMedicationModal
