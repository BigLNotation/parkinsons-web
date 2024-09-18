/*
  This is a sub-route of the dashboard and will render in the
  <Outlet /> of the dashboard
*/

import DashboardModule from "~/components/dashboards/DashboardModule";
import Button from "~/components/ui/Button";
import HistoryList from "~/components/history/HistoryList";
import MoodForm from "~/components/dashboards/MoodForm";
import QuickAccess from "~/components/dashboards/QuickAccess";

/* We are demoing several interface variants and this is the fastest way to make it work. If you hate it, I'm sorry. */

type PatientsDashboardProps = {
    variant: "sidebar" | "sidebarless"
}

export default function DashboardPatientsHome({variant}: PatientsDashboardProps) {
  return (
      <div className="py-12 px-16 flex-1">
        <h1 className="font-extrabold text-gray-200 text-3xl">
            {/*TODO replace with account name*/}
            Kia ora, Chris!
        </h1>

          <div className="py-6 flex flex-col gap-8">
              <div className="flex gap-8">
                  <div className="w-[450px]">
                      <MoodForm/>
                  </div>
                  <div className="flex-1">
                      <DashboardModule variant="normal" isFullSize>
                          <div className="flex gap-6">
                              <h3 className="font-bold text-gray-200 text-xl">Latest updates</h3>
                              <Button variant="text" as="a" href="./progress">View more</Button>
                          </div>
                          <div className="py-6">
                              PLACEHOLDER
                          </div>

                      </DashboardModule>
                  </div>
              </div>

              <DashboardModule variant="normal" isFullSize>
                  <div className="flex gap-6">
                      <h3 className="font-bold text-gray-200 text-xl">Your symptoms over time</h3>
                      <Button variant="text" as="a" href="./progress">View more</Button>
                  </div>
                  <div className="py-6">
                      Insert graph here (TBD)
                  </div>

              </DashboardModule>

              <DashboardModule variant="normal" isFullSize>
                  <div className="flex gap-6">
                      <h3 className="font-bold text-gray-200 text-xl">Your tracking history</h3>
                      <Button variant="text" as="a" href="./history">View more</Button>
                  </div>
                  <div className="py-6">
                      <HistoryList/>
                  </div>

              </DashboardModule>
          </div>

      </div>
  );
}
