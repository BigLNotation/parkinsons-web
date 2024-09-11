import React from "react";
import { NavLink } from "@remix-run/react";
import {RemixNavLinkProps} from "@remix-run/react/dist/components";

type ButtonProps = RemixNavLinkProps & {
    children: string,
    icon?: string,
}

export default function SidebarButton({icon, children, ...other}: ButtonProps){

    return (
        <NavLink className={({ isActive  }) =>
                     isActive
                         ? "w-full px-6 py-3 bg-teal-850 flex gap-3 items-center rounded-2xl border-2 border-teal-750"
                         : "w-full px-6 py-3 bg-teal-990 flex gap-3 items-center rounded-2xl border-2 border-teal-750 transition duration-200 hover:bg-teal-950"
                 }
                {...other}>

            {icon && /* Placeholder icon TODO actual icons */ (
                <div className="w-[20px] h-[20px] flex-col justify-center items-center inline-flex bg-gray-700"></div>
            )}

            <span className="text-md text-gray-300 font-bold">
                {children}
            </span>
        </NavLink>
    )
}