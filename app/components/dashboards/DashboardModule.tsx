/*
the boxes for layouts on logged-in pages
 */

import React from "react";

type DashboardProps = {
    variant: "normal" | "accent",
    children: string | React.ReactNode,
}

const variants = {
    normal: "bg-gray-990 border-2 border-gray-850 py-8 px-9 rounded-2xl w-full",
    accent: "bg-purple-980 border-2 border-purple-850 py-8 px-9 rounded-2xl w-full"
}

function DashboardModule({variant, children}: DashboardProps) {
    return(
        <div className={variants[variant]}>
            {children}
        </div>
    )
}

export default DashboardModule
