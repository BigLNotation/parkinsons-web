import React from "react";

type NavbarProps = {
    // TODO make this functional
    user: { name: string, org: string };
}

function dropdownHandler(){
    alert("Lol")
}

function UserDropdown({user}: NavbarProps) {
    return (
        <button className="h-[70px] bg-teal-200 rounded-l-2xl right-0 transition duration-300 hover:bg-teal-300 hover:cursor-pointer text-left"
                onClick={dropdownHandler}>
            <div className="h-full flex justify-between items-center px-8 py-2 gap-8">
                <div className="flex gap-4 justify-between items-center gap-4">
                    <div className="w-[35px] h-[35px] bg-[#C5D9F6] rounded-full">

                    </div>
                    <div className="flex flex-col">
                        <p className="leading-5 text-md text-white font-bold">{user.name}</p>
                        <p className="leading-5 text-white font-inter text-sm">{user.org}</p>
                    </div>
                </div>

                <a href="/">
                    X
                </a>
            </div>
        </button>
    )
}

export default UserDropdown;
