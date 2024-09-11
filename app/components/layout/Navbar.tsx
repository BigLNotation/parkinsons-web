import React from "react";

import UserDropdown from "./UserDropdown";

type NavbarProps = {
    variant: "logged-out" | "caregiver" | "patient"
}

const variants = {
    "patient": "h-[70px] w-screen sticky top-0 bg-teal-100 border-b-2 border-teal-500",
    "caregiver": "h-[70px] w-screen sticky top-0 bg-teal-100 border-b-2 border-teal-500",
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

                        <div className="flex gap-4 justify-between items-end leading-3">
                            {/* Logo placeholder here */}
                            <p className="font-bold text-white text-lg leading-4">
                                Parkinson&apos;s Pulse
                            </p>

                            {variant === "caregiver" &&
                                <p className="font-normal text-red-750">
                                    for Caregivers and Clinicians
                                </p>
                            }
                        </div>
                    </div>
                </div>


                {/* Right side */}
                <div>

                    {/*
                    TODO make this functional based on the user lol
                    Right now it's just creating and passing a fake placeholder user object depending
                    on the navbar variant for demo reasons.
                    */}

                    {variant === "caregiver"
                        ? <UserDropdown user={{
                            "name": "Chris Graham",
                            "org": "St Alex's Institute of Health",
                            "isCaregiver": true,
                        }} />
                        : <UserDropdown user={{
                            "name": "Maxine Yang",
                            "org": "Tallula's Hospital",
                            "isCaregiver": false,
                        }} />
                    }

                </div>
            </div>
        </header>
    )
}

export default Navbar
