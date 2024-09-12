/*
  This is a sub-route of the dashboard and will render in the
  <Outlet /> of the dashboard
*/

import DashboardModule from "~/components/dashboards/DashboardModule";
import SymptomGrid from "~/components/symptoms/SymptomGrid";

export default function DashboardSymptoms() {
  return (
      <div className="py-12 px-16 flex-1">
        <h1 className="font-extrabold text-gray-200 text-3xl">Your symptoms</h1>
        <h2 className="font-bold text-gray-200 text-xl py-6">Track new symptoms</h2>
        <DashboardModule variant="normal">
            <h3 className="font-bold text-gray-200 text-lg">Motor</h3>
            <SymptomGrid category="motor"/>
            <h3 className="font-bold text-gray-200 text-lg pt-6">Non-motor</h3>
            <SymptomGrid category="nonmotor"/>
        </DashboardModule>
      </div>
  );
}
