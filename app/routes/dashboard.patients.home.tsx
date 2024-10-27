/*
  This is a sub-route of the dashboard and will render in the
  <Outlet /> of the dashboard
*/

import DashboardModule from "~/components/dashboards/DashboardModule";
import Button from "~/components/ui/Button";
import HistoryList from "~/components/history/HistoryList";
import MoodForm from "~/components/dashboards/MoodForm";
import QuickAccess from "~/components/dashboards/QuickAccess";
import SymptomGraphLine from "~/components/progress/SymptomGraphLine";
import useUserInformation from "~/components/hooks/use-user-information";

/* We are demoing several interface variants and this is the fastest way to make it work. If you hate it, I'm sorry. */

type PatientsDashboardProps = {
  variant: "sidebar" | "sidebarless";
};

export default function DashboardPatientsHome({
  variant,
}: PatientsDashboardProps) {
  const { data } = useUserInformation();

  return (
    <div className="py-12 px-6 lg:px-16 flex-1">
      <h1 className="font-extrabold text-gray-200 text-3xl">
        {/*TODO replace with account name*/}
        Kia ora, {data?.first_name}!
      </h1>

      <div className="py-6 flex flex-col gap-8">
        <div className="flex gap-8 flex-col xl:flex-row">
          <div className="w-full md:hidden block">
            <QuickAccess />
          </div>
          <div className="w-full xl:w-[450px]">
            <MoodForm />
          </div>
          <div className="flex-1">
            <DashboardModule variant="normal" isFullSize>
              <div className="flex gap-6 overflow-scroll whitespace-nowrap">
                <h3 className="font-bold text-gray-200 text-xl">
                  Latest updates
                </h3>
                <div>
                  <script
                      src="//rss.bloople.net/?url=https%3A%2F%2Fparkinsonsnewstoday.com%2Ffeed%2F&detail=10&limit=5&showtitle=false&type=js"></script>
                </div>
                <Button variant="text" as="a" href="./progress">
                  View more
                </Button>
              </div>
            </DashboardModule>
          </div>
        </div>

        <DashboardModule variant="normal" isFullSize>
          <div className="flex gap-6">
            <h3 className="font-bold text-gray-200 text-xl">
              Your symptoms over time
            </h3>
            <Button variant="text" as="a" href="./progress">
              View more
            </Button>
          </div>
          <div className="w-full py-6 h-[500px]">
            <SymptomGraphLine />
          </div>
        </DashboardModule>

        <DashboardModule variant="normal" isFullSize>
          <div className="flex gap-6">
            <h3 className="font-bold text-gray-200 text-xl">
              Your tracking history
            </h3>
            <Button variant="text" as="a" href="./history">
              View more
            </Button>
          </div>
          <div className="py-6">
            <HistoryList />
          </div>
        </DashboardModule>
      </div>
    </div>
  );
}
