/*
the boxes for symptom selecting
 */

import Button from "~/components/ui/Button"
import React from "react";

// Currently designed to function as a button controlling state, can be modified to link to a seperate page for the form if we wanted.

type SymptomCardProps = React.HTMLAttributes<HTMLButtonElement> & {
    symptom: string,
    desc: string,
    status: string,
    recentlyCompleted: boolean,
    //link?: string,
}

const variants = {
    normal: "bg-gray-950 py-6 px-8 rounded-2xl hover:bg-purple-950 transition duration-200",
    highlighted: "bg-gray-950 py-6 px-8 rounded-2xl border-2 border-teal-750 hover:bg-purple-950 transition duration-200"
}

const statusVariants = {
    normal: "text-sm font-inter text-gray-400 leading-none",
    highlighted: "text-sm font-inter text-teal-300 leading-none"
}

function SymptomCard({symptom, desc, status, recentlyCompleted, ...other}: SymptomCardProps) {
    return(
        <button className={recentlyCompleted ? variants["highlighted"] : variants["normal"]} {...other}>
            <div className="flex gap-8 items-center justify-between ">

                {/*TODO Put icons here*/}
                <div className="w-[70px] h-[70px] bg-gray-500 rounded-full"></div>

                <div className="w-[220px] flex flex-col gap-5 text-left">
                    <div className="flex flex-col gap-2">
                        <p className="text-md font-bold text-gray-200 leading-none">{symptom}</p>
                        <p className="text-md font-normal text-gray-300 leading-none">{desc}</p>
                    </div>
                    <p className={recentlyCompleted ? statusVariants["highlighted"] : statusVariants["normal"]}>{status}</p>
                    <div>
                        <Button as="a" variant="secondary">Track ➜</Button>
                    </div>
                </div>
            </div>
        </button>
    )
}

export default SymptomCard
