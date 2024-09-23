/*
  This is a sub-route of the dashboard and will render in the
  <Outlet /> of the dashboard
*/

import Notice from "~/components/layout/Notice";
import DashboardModule from "~/components/dashboards/DashboardModule";
import SymptomGraph from "~/components/progress/SymptomGraph";

export default function DashboardPatientsProgress() {
  return (
      <div className="py-12 px-16 flex-1 flex flex-col gap-8">
          <h1 className="font-extrabold text-gray-200 text-3xl">
              Your progress
          </h1>
          <Notice variant="warning" title="whoopsies">
              (the progress pages and statistics displays are still under construction...)
          </Notice>

          <DashboardModule variant={"accent"}>
              <div className="flex flex-col gap-8">
                  <h3 className="font-bold text-gray-200 text-lg">Select a symptom</h3>
                  <SymptomGraph/>
              </div>
          </DashboardModule>
      </div>
  );
}
