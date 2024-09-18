/*
  This is a sub-route of the dashboard and will render in the
  <Outlet /> of the dashboard
*/

import React from "react";

import DashboardModule from "~/components/dashboards/DashboardModule";
import SymptomGrid from "~/components/symptoms/SymptomGrid";
import SymptomForm from "~/components/symptoms/form/SymptomForm";
import Button from "~/components/ui/Button";

/*
Conditionally renders a SymptomForm component based on the displayForm state.

displayForm is set to the name of the symptom, which the SymptomForm component uses to render questions and submit a form.
This may cause issues idk.
 */

export default function DashboardPatientsSymptoms() {

    const [displayForm, setDisplayForm] = React.useState("")

    function handleSymptomClick(symptom){
        setDisplayForm(symptom);
    }

    return (
        <div className="py-12 px-16 flex-1  flex flex-col gap-8">
            <h1 className="font-extrabold text-gray-200 text-3xl">Your symptoms</h1>
            <h2 className="font-bold text-gray-200 text-xl">Track new symptoms</h2>
            <DashboardModule variant="normal">
                <div className="flex flex-col gap-6">
                    {/* Conditionally render form */}
                    {displayForm
                        ? <>
                            <h3 className="font-bold text-gray-200 text-lg">{displayForm}</h3>
                            <SymptomForm symptom={displayForm} handleSymptomClick={handleSymptomClick}/>
                        </>
                        : <>
                            <div>
                                <h3 className="font-bold text-gray-200 text-lg">Motor</h3>
                                <SymptomGrid category="motor" handleSymptomClick={handleSymptomClick}/>
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-200 text-lg">Non-motor</h3>
                                <SymptomGrid category="nonmotor" handleSymptomClick={handleSymptomClick}/>
                            </div>
                            <div className="pt-8">
                                <Button variant="tertiary"
                                        onClick={() => alert("This button is currently nonfunctional.")}>Add
                                    a new symptom</Button>
                            </div>
                        </>
                    }
                </div>

            </DashboardModule>
        </div>
    );
}
