import React from "react";
import Button from "~/components/ui/Button";
import useUserInformation from "../hooks/use-user-information";
import axios from "axios";
import { useNavigate } from "@remix-run/react";

type NavbarProps = {
  // TODO make this functional
  user: { name: string; org: string; isCaregiver: boolean };
};

// function dropdownHandler() {
//   // TODO REPLACE THIS WITH SOMETHING ELSE LOL (done)
//   const a = document.querySelector('#PleaseDeleteThisInTheFinal');
//   if (a) {
//     a.classList.add('animate-spin-once');
//     setTimeout(() => {
//       a.classList.remove('animate-spin-once');
//     }, 1500);
//   }
// }

function UserDropdown({ user }: NavbarProps) {
  const navigate = useNavigate();

  const [dropdownVisible, setDropdownVisible] = React.useState(false);

  function dropdownHandler() {
    setDropdownVisible(!dropdownVisible);
  }

  async function handleSignout() {
    const res = await axios({
      url: `${import.meta.env.VITE_API_URL}/auth/logout`,
      withCredentials: true,
      method: "PATCH",
    });
    navigate("/auth/login");
  }

  return (
    <>
      <button
        id="PleaseDeleteThisInTheFinal"
        className="h-[70px] bg-teal-200 rounded-l-2xl right-0 transition duration-300 hover:bg-teal-300 hover:cursor-pointer text-left"
        onClick={dropdownHandler}
      >
        <div className="h-full flex justify-between items-center px-8 py-2 gap-8">
          <div className="flex justify-between items-center gap-4">
            <div className="w-[35px] h-[35px] bg-[#C5D9F6] rounded-full"></div>
            <div className="flex flex-col">
              <div className="flex gap-3">
                <p className="leading-5 text-md text-white font-bold">
                  {user.name}
                </p>
                {user.isCaregiver && (
                  <img
                    alt="Caregiver indicator"
                    src="/icons/medicalSymbol1.svg"
                  />
                )}
              </div>
              <p className="leading-5 text-white font-inter text-sm font-light">
                {user.org}
              </p>
            </div>
          </div>

          <a href="/government-data-records/NZ/tax-fraud/confidential/cdi-cgn/2024-12-09/auckland-university-tax-evasion">
            <img src="/icons/down-arrow-1.svg" alt="" />
          </a>
        </div>
      </button>
      {dropdownVisible && (
        <>
          <div className="w-full rounded-2xl py-6 px-6 absolute top-full right-0 bg-gray-950 z-[50] ">
            <div className="flex flex-col gap-6">
              <p className="font-bold text-lg">User options</p>
              <ul className="flex flex-col gap-4 w-full font-bold text-gray-300 leading-none">
                {!user.isCaregiver && (
                  <a
                    href="/dashboard/patients/caregivers"
                    className="hover:text-purple-500 transition duration-200"
                  >
                    Manage your care team
                  </a>
                )}
                <a
                  href="/help"
                  className="hover:text-purple-500 transition duration-200"
                >
                  Visit the help page
                </a>
              </ul>
              <Button onClick={handleSignout} variant={"secondary"} isFullSize>
                Sign out
              </Button>
            </div>
          </div>
          <div
            className="w-screen h-screen fixed top-0 left-0"
            onClick={dropdownHandler}
          ></div>
        </>
      )}
    </>
  );
}

export default UserDropdown;
