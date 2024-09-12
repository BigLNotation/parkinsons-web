import React from "react";

import SidebarButton from "~/components/ui/SidebarButton"
import Button from "~/components/ui/Button"

type SidebarProps = {
    variant: "patient" | "caregiver"
}

const variants = {
    "patient": "w-[300px] h-[calc(100vh-70px)] bg-[#E1F7F3]",

    //TODO caregiver variant
    "caregiver": ""
}

function Sidebar({variant}: SidebarProps) {
    return(
        <div className={variants[variant]}>
            <div className="flex flex-col h-full px-4 py-6 justify-between items-center">
                {/*Top section*/}
                <div className="w-full flex flex-col gap-6 items-center">
                    <div className="w-full flex flex-col gap-2">
                        <SidebarButton icon="/icons/sidebarDashboard.svg" to="/dashboard/" end>Dashboard</SidebarButton>
                        <SidebarButton icon="/icons/sidebarSymptoms.svg" to="/dashboard/symptoms">Symptoms</SidebarButton>
                        <SidebarButton icon="/icons/sidebarProgress.svg" to="/dashboard/progress">Progress</SidebarButton>
                        <SidebarButton icon="/icons/sidebarHistory.svg" to="/dashboard/history">History</SidebarButton>
                    </div>
                    <div className="h-[2px] bg-teal-750 w-[238px] rounded-full">

                    </div>
                    <div className="w-full px-4">
                        <ul className="flex flex-col gap-4 w-full font-semibold text-md text-gray-300 leading-none">
                            <a href="/" className="hover:text-purple-400 transition duration-200">
                                Accessibility
                            </a>
                            <a href="/" className="hover:text-purple-400 transition duration-200">
                                Contact us
                            </a>
                            <a href="/" className="hover:text-purple-400 transition duration-200">
                                About
                            </a>
                        </ul>
                    </div>
                    <div className="h-[2px] bg-teal-750 w-[238px] rounded-full">

                    </div>
                    <div className="w-full px-4">
                        <p className="text-gray-400 text-[14px]">
                            If symptoms are suddenly severe, seek medical advice immediately.
                        </p>
                    </div>
                </div>

                {/*Lower section (e.g. help)*/}
                <div>
                    <Button variant="secondary" as="a" href="https://www.parkinsons.org.nz/">
                        <p className="font-semibold leading-5 text-center">Got a question?</p>
                        <p className="font-light leading-5 text-center">Visit the help center  →</p>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
