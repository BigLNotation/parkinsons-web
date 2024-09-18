import React from "react";
import { Outlet } from '@remix-run/react';

import Navbar from '~/components/layout/Navbar'
import Sidebar from '~/components/layout/Sidebar'
import AccessibilityModal from "~/components/accessibility/AccessibilityModal";

/*
General layout for Patients dashboard.

Toggles based on navbar buttons:
- Whether the sidebar layout is used.
- Whether the Accessibility modal is open.
 */

export default function DashboardPatients() {

    // Logic to handle sidebar toggling
    const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    // Logic to handle accessibility modal. Shorter variable names TBA...
    const [isAccessibilityModalOpen, setIsAccessibilityModalOpen] = React.useState(false);
    const toggleAccessibilityModal = () => {
        setIsAccessibilityModalOpen(!isAccessibilityModalOpen);
    };

    return (
        <main className="flex flex-col">
            <Navbar variant={"patient"} toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} toggleAccessibilityModal={toggleAccessibilityModal} />

            {isSidebarOpen
                ?
                <div className="flex flex-wrap">
                    <Sidebar variant={"patient"}/>
                    <Outlet/>
                </div>
                :
                <div className="flex flex-wrap my-0 mx-auto w-[90%] max-w-[1450px]">
                    <Outlet/>
                </div>
            }

            {isAccessibilityModalOpen &&
                <div className="fixed top-0 w-full h-full" >
                    <AccessibilityModal/>
                    <div className="absolute h-full w-full bg-teal-100 opacity-50" onClick={() => toggleAccessibilityModal()}>

                    </div>
                </div>
            }

        </main>
    );
}
