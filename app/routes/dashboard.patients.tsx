import React from "react";
import { Outlet } from '@remix-run/react';

import Navbar from '~/components/layout/Navbar'
import Sidebar from '~/components/layout/Sidebar'


export default function DashboardPatients() {

    // Logic to handle sidebar toggling
    const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <main className="flex flex-col">
            <Navbar variant={"patient"} toggleSidebar={toggleSidebar} />

            {isSidebarOpen
                ?
                <div className="flex flex-wrap">
                    <Sidebar variant={"patient"}/>
                    <Outlet/>
                </div>
                :
                <div className="flex flex-wrap my-0 mx-auto w-[90%] max-w-[1300px]">
                    <Outlet/>
                </div>}

        </main>
    );
}
