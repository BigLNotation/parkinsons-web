import SidebarButton from "~/components/ui/SidebarButton"
import Button from "~/components/ui/Button"

type SidebarProps = {
    variant: "patient" | "caregiver"
}

const variants = {
    "patient": "w-[300px] h-[calc(100vh-70px)] bg-[#E1F7F3] sticky top-[70px] left-0 hidden md:block",

    //TODO finish caregiver variant
    "caregiver": "w-[300px] h-[calc(100vh-70px)] bg-[#E1F7F3] sticky top-[70px] left-0",
}

function Sidebar({variant}: SidebarProps) {
    return(
        <div className={variants[variant]}>
            <div className="flex flex-col h-full px-4 py-6 justify-between items-center">
                {/*Top section*/}
                <div className="w-full flex flex-col gap-6 items-center">
                    {/* Hide some tabs for caregivers */}
                    {variant === "patient" &&
                        <div className="w-full flex flex-col gap-2">
                            <SidebarButton icon="/icons/sidebarDashboard.svg" to="/dashboard/patients/home">Dashboard</SidebarButton>
                            <SidebarButton icon="/icons/sidebarSymptoms.svg" to="/dashboard/patients/symptoms">Symptoms</SidebarButton>
                            <SidebarButton icon="/icons/sidebarProgress.svg" to="/dashboard/patients/progress">Progress</SidebarButton>
                            <SidebarButton icon="/icons/sidebarHistory.svg" to="/dashboard/patients/history">History</SidebarButton>
                        </div>
                    }
                    {variant === "caregiver" &&
                        <div className="w-full flex flex-col gap-2">
                            <SidebarButton icon="/icons/sidebarDashboard.svg" to="/dashboard/caregivers/home">Dashboard</SidebarButton>
                            <SidebarButton icon="/icons/sidebarHistory.svg" to="/dashboard/caregivers/history">History</SidebarButton>
                        </div>
                    }
                    <div className="h-[2px] bg-teal-750 w-[238px] rounded-full">

                    </div>
                    <div className="w-full px-4">
                        <ul className="flex flex-col gap-4 w-full font-bold text-md text-gray-300 leading-none">
                            {/*<a href="/" className="hover:text-purple-400 transition duration-200">*/}
                            {/*    Accessibility*/}
                            {/*</a>*/}
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
                        {variant === "patient"
                            ? <p className="text-gray-400 text-[14px]">
                                If symptoms are suddenly severe, seek medical advice immediately.
                            </p>
                            : <p className="text-red-500 text-[14px]">
                                You&apos;re signed in to Caregiver mode, for healthcare staff, caregivers, or other individuals.
                            </p>
                        }
                    </div>
                </div>

                {/*Lower section (e.g. help)*/}
                <div>
                    <Button variant="secondary" as="a" href="https://www.parkinsons.org.nz/">
                        <p className="font-bold leading-5 text-center">Got a question?</p>
                        <p className="font-normal leading-5 text-center">Visit the help center  →</p>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
