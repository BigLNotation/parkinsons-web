/*
the boxes for layouts on logged-in pages
 */

import React from "react";

/*
PROPS:
Variant: the color of the box. Normal = gray, accent = purple.
isFullSize: Make the module the full size of the parent element.
 */

type DashboardProps = {
    variant: "normal" | "accent",
    isFullSize?: boolean,
    children: string | React.ReactNode,
}

const variants = {
    normal: "bg-gray-990 border-2 border-gray-850 py-8 px-9 rounded-2xl w-full",
    accent: "bg-purple-980 border-2 border-purple-850 py-8 px-9 rounded-2xl w-full"
}

function DashboardModule({variant, isFullSize = false, children}: DashboardProps) {
    return(
        <div className={`${variants[variant]} ${isFullSize && "h-full w-full"}`}>
            {children}
        </div>
    )
}

export default DashboardModule
