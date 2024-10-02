/*
  This is a sub-route of the dashboard and will render in the
  <Outlet /> of the dashboard
*/

import Notice from "~/components/layout/Notice";
import DashboardModule from "~/components/dashboards/DashboardModule";
import SymptomGraphLine from "~/components/progress/SymptomGraphLine";
import SymptomGraphPie from "~/components/progress/SymptomGraphPie";

export default function DashboardPatientsProgress() {
  return (
      <div className="py-12 px-16 flex-1 flex flex-col gap-8">
          <h1 className="font-extrabold text-gray-200 text-3xl">
              Your progress
          </h1>

          <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                  <p className="font-bold text-gray-200 text-xl">At a glance</p>
                  <p className="font-inter text-gray-400">Overall statistics for all your symptom tracking.</p>
              </div>

              <div className="flex gap-8 flex-col xl:flex-row h-[400px]">
                  <div className="flex-1 h-full">
                      <DashboardModule variant="normal">
                          <h3 className="font-bold text-gray-200 text-lg">Reported symptoms distribution</h3>
                          <SymptomGraphPie></SymptomGraphPie>
                      </DashboardModule>
                  </div>
                  <div className="flex-1 h-full">
                      <DashboardModule variant="normal">
                          <h3 className="font-bold text-gray-200 text-lg">Your symptoms over time</h3>
                          <SymptomGraphLine/>
                      </DashboardModule>
                  </div>
              </div>
          </div>

          <div className="flex flex-col gap-8 pt-10">
              <div className="flex flex-col gap-2">
                  <p className="font-bold text-gray-200 text-xl">Individual symptom breakdown</p>
                  <p className="font-inter text-gray-400">View your statistics, filtered by each symptom.</p>
              </div>
              <DashboardModule variant={"accent"}>
                  <div className="flex flex-col gap-8">
                      <h3 className="font-bold text-gray-200 text-lg">Select a symptom</h3>
                      <SymptomGraphLine/>
                  </div>
              </DashboardModule>
          </div>

          <Notice variant="warning" title="whoopsies">
              (the progress pages and statistics displays are still under construction...)
          </Notice>

          <Notice variant="error" title="AAA">
             HOW THE #%*$?! do I make these graphs WORK in a way that is RESPONSIVE???
          </Notice>



      </div>
  );
}
