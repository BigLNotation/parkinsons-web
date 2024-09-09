import { Outlet } from '@remix-run/react';

import Navbar from '~/components/layout/Navbar'
import Sidebar from '~/components/layout/Sidebar'


export default function Dashboard() {
  return (
      <main className="flex flex-col">
          <Navbar variant={"patient"}/>

          <div className="flex flex-wrap">
              <Sidebar variant={"patient"}/>

              <Outlet/>
          </div>
      </main>
  );
}
