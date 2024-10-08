// Boxes for the help page.

import React from "react";

type HelpModuleProps = {
    title: string,
    desc: string,
    link: string,
}

function DashboardModule({title, desc, link}: HelpModuleProps) {
    return(
        <a className="w-[300px] rounded-2xl py-8 px-8 border-2 border-purple-400 bg-gray-980 flex flex-col gap-2 transition duration-200 hover:bg-purple-950" href={link}>
            <p className="font-bold text-md leading-6">
                {title}
            </p>
            <p>
                {desc}
            </p>
        </a>
    )
}

export default DashboardModule
