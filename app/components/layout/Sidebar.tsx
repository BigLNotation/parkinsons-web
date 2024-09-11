import React from "react";

import SidebarButton from "~/components/ui/SidebarButton"

type SidebarProps = {
    variant: "patient" | "caregiver"
}

const variants = {
    "patient": "w-[300px] h-[calc(100vh-70px)] bg-[#E1F7F3]",
    "caregiver": ""
}

function Sidebar({variant}: SidebarProps) {
    return(
        <div className={variants[variant]}>
            <div className="flex flex-col h-full px-4 py-6 justify-between items-center">
                {/*Top section*/}
                <div className="w-full flex flex-col gap-8 items-center">
                    <div className="w-full flex flex-col gap-2">
                        <SidebarButton icon="x" to="/dashboard/" end>Dashboard</SidebarButton>
                        <SidebarButton icon="x" to="/dashboard/symptoms">Symptoms</SidebarButton>
                        <SidebarButton icon="x" to="/dashboard/progress">Progress</SidebarButton>
                        <SidebarButton icon="x" to="/dashboard/history">History</SidebarButton>
                    </div>
                    <div className="h-[2px] bg-teal-750 w-[238px] rounded-full">

                    </div>
                    <div className="w-full px-4">
                        <ul className="flex flex-col gap-3 w-full font-bold text-md text-gray-300">
                            <a href="/">
                                Accessibility
                            </a>
                            <a href="/">
                                Contact us
                            </a>
                            <a href="/">
                                About
                            </a>
                        </ul>
                    </div>
                    <div className="h-[2px] bg-teal-750 w-[238px] rounded-full">

                    </div>
                </div>

                {/*Lower section (e.g. help)*/}
                <div>
                    Help me please
                </div>
            </div>
        </div>
    )
}

export default Sidebar
