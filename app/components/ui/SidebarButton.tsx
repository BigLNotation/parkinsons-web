import React from "react";
import { NavLink } from "@remix-run/react";
import {RemixNavLinkProps} from "@remix-run/react/dist/components";

type SidebarButtonProps = RemixNavLinkProps & {
    children: string,
    subtitle: string,
    icon?: string,
}

export default function SidebarButton({icon, children, subtitle,...other}: SidebarButtonProps){

    return (
        <NavLink className={({ isActive  }) =>
                     isActive
                         ? "w-full px-6 py-3 bg-teal-850 flex gap-4 items-center rounded-xl border-2 border-teal-750"
                         : "w-full px-6 py-3 bg-teal-990 flex gap-4 items-center rounded-xl border-2 border-teal-750 transition duration-200 hover:bg-teal-950"
                 }

                {...other}>

            {icon && /* Placeholder icon TODO actual icons */ (
                <div className="w-[22px]">
                    <img src={icon} alt="x"/>
                </div>
            )}

            <div className="flex flex-col gap-[2px] mt-[4px]">
                <p className="text-md text-gray-300 font-bold m-0 leading-none">
                    {children}
                </p>
                <p className=
                       "text-sm text-gray-500 font-normal">
                    {subtitle}
                </p>
            </div>

        </NavLink>
    )
}