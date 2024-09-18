// Notice box

import React from "react";

type NoticeProps = {
    variant: "error" | "warning" | "success" | "info" | "neutral",
    title: string,
    isFullSize?: boolean,
    children: string | React.ReactNode,
}

const variants = {
    warning: "bg-yellow-950 border-2 border-yellow-700 py-8 px-9 rounded-2xl w-full text-yellow-300 w-fit",
    error: "bg-red-950 border-2 border-red-700 py-8 px-9 rounded-2xl w-full text-red-300 w-fit",
    success: "", //TODO
    info: "", //TODO
    neutral: "bg-gray-950 border-2 border-gray-700 py-8 px-9 rounded-2xl w-full text-gray-300 w-fit"
}

function Notice({variant, title, isFullSize = false, children}: NoticeProps) {
    return(
        <div className={`${variants[variant]} ${isFullSize && "h-full w-full"}
                        transition transform-gpu duration-500 hover:duration-200 hover:transform hover:rotate-2`}>
            <p className="font-extrabold text-lg dura">{title}</p>
            {children}
        </div>
    )
}

export default Notice
