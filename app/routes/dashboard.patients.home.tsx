/*
  This is a sub-route of the dashboard and will render in the
  <Outlet /> of the dashboard
*/

import DashboardModule from "~/components/dashboards/DashboardModule";
import Button from "~/components/ui/Button";
import HistoryList from "~/components/history/HistoryList";

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
                      <DashboardModule variant="accent" isFullSize>
                          <div className="flex flex-col gap-6">
                              <h3 className="font-bold text-gray-200 text-xl">Quick access</h3>
                              <div className="flex flex-col gap-3">
                                  <div className="w-full h-[72px]">
                                      <Button variant="primary" isFullSize as="a" href="./symptoms">
                                          <span className="text-lg">Track your symptoms ➜</span>
                                      </Button>
                                  </div>
                                  <div className="w-full h-[60px]">
                                      <Button variant="secondary" isFullSize as="a" href="./progress">
                                          <span className="text-md">See your progress</span>
                                      </Button>
                                  </div>
                                  <div className="w-full h-[60px]">
                                      <Button variant="secondary" isFullSize as="a" href="./history">
                                          <span className="text-md">View submission history</span>
                                      </Button>
                                  </div>
                              </div>
                              <p className="text-sm text-gray-500 font-inter text-center">
                                  You last tracked symptoms 3 hours ago.
                              </p>
                          </div>
                      </DashboardModule>
                  </div>
                  <div className="flex-1">
                      <DashboardModule variant="normal" isFullSize>
                          <h3 className="font-bold text-gray-200 text-xl">How are you feeling?</h3>
                          <div className="py-6">
                              Insert stuff here (TBD)
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
