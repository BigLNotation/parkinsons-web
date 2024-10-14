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

export default function DashboardPatientsSymptomsAdd() {

    return (
        <div className="py-12 px-6 lg:px-16 flex-1  flex flex-col gap-8">
            <div className="md:hidden">
                <Button variant="tertiary" as="a" href="/dashboard/patients/symptoms">
                    Back
                </Button>
            </div>
            <h2 className="font-bold text-gray-200 text-xl">Add new symptoms</h2>
            <DashboardModule variant="normal">
                <div className="flex flex-col gap-6">

                </div>

            </DashboardModule>
        </div>
    );
}
