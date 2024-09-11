import React from "react";

import UserDropdown from "./UserDropdown";

type NavbarProps = {
    variant: "logged-out" | "caregiver" | "patient"
}

const variants = {
    "patient": "h-[70px] w-screen sticky top-0 bg-teal-100 border-b-2 border-teal-500",
    "caregiver": "",
    "logged-out": ""
}

function Navbar({variant}: NavbarProps) {
    return(
        <header className={variants[variant]}>
            <div className="h-full w-full flex justify-between items-center overflow-hidden">
                {/* Left side */}
                <div className="px-10">
                    <div className="flex gap-4 items-center">
                        <div className="w-[25px] h-[25px] bg-teal-800 rounded-full">

                        </div>
                        {/* Logo placeholder here */}
                        <p className="font-bold text-white text-lg">
                            Parkinson&apos;s Pulse
                        </p>
                    </div>
                </div>

                {/* Right side */}
                <div>
                    {/*TODO make this functional based on the user lol*/}
                    <UserDropdown user={{
                        "name": "Chris Graham",
                        "org": "St Alex's Institute of Health"
                    }} />
                </div>
            </div>
        </header>
    )
}

export default Navbar
