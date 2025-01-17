/*
  This is a sub-route of the dashboard and will render in the
  <Outlet /> of the dashboard
*/

import { useState } from "react";
import { useNavigate } from "@remix-run/react";

import DashboardModule from "~/components/dashboards/DashboardModule";
import SymptomGrid from "~/components/symptoms/SymptomGrid";
import SymptomForm from "~/components/symptoms/form/SymptomForm";
import Button from "~/components/ui/Button";
import AddSymptomModal from "~/components/symptoms/AddSymptom";

/*
Conditionally renders a SymptomForm component based on the displayForm state.

displayForm is set to the name of the symptom, which the SymptomForm component uses to render questions and submit a form.
This may cause issues idk.
 */

export default function DashboardPatientsSymptoms() {
  const [displayAddSymptom, setDisplayAddSymptom] = useState(false);

  const navigate = useNavigate();

  function handleSymptomClick(symptomId: { $oid: string }) {}

  function toggleAddSymptomModal() {
    setDisplayAddSymptom(!displayAddSymptom);
  }

  return (
    <div className="py-12 px-6 lg:px-16 flex-1  flex flex-col gap-8">
      <div className="md:hidden">
        <Button variant="tertiary" as="a" href="/dashboard/patients/home">
          Back
        </Button>
      </div>

      <h1 className="font-extrabold text-gray-200 text-3xl">Your symptoms</h1>
      <h2 className="font-bold text-gray-200 text-xl">Track new symptoms</h2>
      <DashboardModule variant="normal">
        <div className="flex flex-col gap-6">
          <div>
            <SymptomGrid handleSymptomClick={handleSymptomClick} />
          </div>
          <div className="pt-8">
            <Button
              variant="tertiary"
              onClick={() => navigate("/dashboard/patients/symptom/add")}
            >
              Add a new symptom
            </Button>
          </div>
        </div>
      </DashboardModule>
    </div>
  );
}
