import DashboardModule from "~/components/dashboards/DashboardModule";

import HistoryList from "~/components/history/HistoryList";
import Button from "~/components/ui/Button";
import React from "react";
import { useHistoryList } from "~/components/hooks/use-history-list";

export default function DashboardPatientsHistory() {
  const { data } = useHistoryList();

  return (
    <div className="py-12 px-6 lg:px-16 flex-1 flex flex-col gap-8">
      <div className="md:hidden">
        <Button variant="tertiary" as="a" href="/dashboard/patients/home">
          Back
        </Button>
      </div>

      <h1 className="font-extrabold text-gray-200 text-3xl">
        Your symptom history
      </h1>

      <h2 className="font-bold text-gray-200 text-xl">Previous submissions</h2>

      <DashboardModule variant="normal">
        <div className="flex flex-col gap-8">
          <HistoryList />
        </div>
      </DashboardModule>
    </div>
  );
}
