/*
the boxes for symptom selecting
 */

import React from "react"

import Button from "~/components/ui/Button"

type SymptomCardProps = {
    symptom: string,
    desc: string,
    status: string,
    recentlyCompleted: boolean,
    link?: string,
}

const variants = {
    normal: "bg-gray-950 py-6 px-8 rounded-2xl hover:bg-purple-950 transition duration-200",
    highlighted: "bg-gray-950 py-6 px-8 rounded-2xl border-2 border-teal-750 hover:bg-purple-950 transition duration-200"
}

const statusVariants = {
    normal: "text-sm font-inter text-gray-400 leading-none",
    highlighted: "text-sm font-inter text-teal-300 leading-none"
}

function SymptomCard({symptom, desc, status, recentlyCompleted, link}: SymptomCardProps) {
    return(
        <a className={recentlyCompleted ? variants["highlighted"] : variants["normal"]} href={link}>
            <div className="flex gap-8 items-center justify-between ">

                {/*TODO Put icons here*/}
                <div className="w-[70px] h-[70px] bg-gray-500 rounded-full"></div>

                {/*TODO unfix the width here lol*/}
                <div className="w-[220px] flex flex-col gap-5">
                    <div className="flex flex-col gap-2">
                        <p className="text-md font-bold text-gray-200 leading-none">{symptom}</p>
                        <p className="text-md font-normal text-gray-300 leading-none">{desc}</p>
                    </div>
                    <p className={recentlyCompleted ? statusVariants["highlighted"] : statusVariants["normal"]}>{status}</p>
                    <div>
                        <Button as="a" variant="secondary" href={link}>Track ➜</Button>
                    </div>
                </div>
            </div>
        </a>
    )
}

export default SymptomCard
