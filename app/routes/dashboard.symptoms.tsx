/*
  This is a sub-route of the dashboard and will render in the
  <Outlet /> of the dashboard
*/

import DashboardModule from "~/components/dashboards/DashboardModule";
import SymptomGrid from "~/components/symptoms/SymptomGrid";
import Button from "~/components/ui/Button";

export default function DashboardSymptoms() {
  return (
      <div className="py-12 px-16 flex-1  flex flex-col gap-8">
        <h1 className="font-extrabold text-gray-200 text-3xl">Your symptoms</h1>
        <h2 className="font-bold text-gray-200 text-xl">Track new symptoms</h2>
        <DashboardModule variant="normal">
            <h3 className="font-bold text-gray-200 text-lg">Motor</h3>
            <SymptomGrid category="motor"/>
            <h3 className="font-bold text-gray-200 text-lg pt-6">Non-motor</h3>
            <SymptomGrid category="nonmotor"/>
            <div className="pt-8">
                <Button variant="tertiary" onClick={() => alert("This button is currently nonfunctional.")}>Add a new symptom</Button>
            </div>

        </DashboardModule>
      </div>
  );
}
