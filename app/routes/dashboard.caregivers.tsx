import { Outlet } from '@remix-run/react';

import Navbar from '~/components/layout/Navbar'
import Sidebar from '~/components/layout/Sidebar'


export default function DashboardCaregivers() {
  return (
      <main className="flex flex-col">
          <Navbar variant={"caregiver"}/>

          <div className="flex flex-wrap">
              <Sidebar variant={"caregiver"}/>

              <Outlet/>
          </div>
      </main>
  );
}
