import DashboardModule from "~/components/dashboards/DashboardModule";

import MedicationList from "~/components/medications/MedicationList";
import Button from "~/components/ui/Button";
import React from "react";

export default function DashboardPatientsMedications() {
  return (
      <div className="py-12 px-6 lg:px-16 flex-1 flex flex-col gap-8">

          <div className="md:hidden">
              <Button variant="tertiary" as="a" href="/dashboard/patients/home">
                  Back
              </Button>
          </div>

          <h1 className="font-extrabold text-gray-200 text-3xl">
              Track medications
          </h1>

          <DashboardModule variant="normal">
              <div className="flex flex-col gap-8">
                  <div>
                      <h3 className="font-bold text-gray-200 text-lg">Current</h3>
                      <MedicationList/>
                  </div>
                  <div>
                      <h3 className="font-bold text-gray-200 text-lg">Previous</h3>
                      <MedicationList/>
                  </div>
              </div>
          </DashboardModule>
      </div>
  );
}
