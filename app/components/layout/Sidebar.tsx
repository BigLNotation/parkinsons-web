import React from "react";

type SidebarProps = {
    variant: "patient" | "caregiver"
}

const variants = {
    "patient": "w-[300px] h-screen bg-teal-850",
    "caregiver": ""
}

function Sidebar({variant}: SidebarProps) {
    return(
        <div className={variants[variant]}>
            Hello
        </div>
    )
}

export default Sidebar
