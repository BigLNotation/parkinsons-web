import React from 'react';

import NavbarButton from '~/components/ui/NavButton';
import UserDropdown from './UserDropdown';
import useUserInformation from '../hooks/use-user-information';

type NavbarProps = {
  variant: 'patient' | 'caregiver';
  toggleSidebar: () => void;
  toggleAccessibilityModal: () => void;
  isSidebarOpen: boolean;
};

const variants = {
  patient:
    'h-[70px] w-full sticky top-0 bg-teal-100 border-b-2 border-teal-500 z-50',
  caregiver:
    'h-[70px] w-full sticky top-0 bg-teal-100 border-b-2 border-teal-500 z-50',
};

function Navbar({
  variant,
  isSidebarOpen,
  toggleSidebar,
  toggleAccessibilityModal,
}: NavbarProps) {
  const { data } = useUserInformation();
  return (
    <header className={variants[variant]}>
      <div className="h-full w-full flex justify-between items-center">
        {/* Left side */}
          <div className="px-8 flex gap-12 items-center">
              <div className="flex gap-4 items-center">
                  <img className="w-[35px] h-[35px]" src="/brand/parkinsonspulse_icon-LIGHT2.png" alt="">

                  </img>

                  <a className="flex gap-4 justify-between items-end leading-3"
                     href={variant === "patient" ? "/dashboard/patients/home" : "/dashboard/caregivers/home"}>

                      {/* Logo placeholder here */}
                      <p className="font-semibold text-white text-lg leading-4">
                          Parkinson&apos;s Pulse
                      </p>

                      {variant === "caregiver" &&
                          <p className="font-normal text-red-750">
                              for Caregivers and Clinicians
                          </p>
                      }
                  </a>
              </div>
              <div className="gap-4 items-center lg:flex hidden">
                  {isSidebarOpen
                  ? <NavbarButton variant="sidebarActive" onClick={toggleSidebar}>Sidebar</NavbarButton>
                  : <NavbarButton variant="sidebar" onClick={toggleSidebar}>Sidebar</NavbarButton>}
                  <NavbarButton variant="accessibility" onClick={toggleAccessibilityModal}>Accessibility</NavbarButton>
              </div>
          </div>

        {/* Right side */}

        <div className="hidden md:block relative">
          {/*
                  TODO make this functional based on the user lol
                  Right now it's just creating and passing a fake placeholder user object depending
                  on the navbar variant for demo reasons.
              */}
          {variant === 'caregiver' ? (
            <UserDropdown
              user={{
                name: 'Avery Wright',
                org: "Andrew's Institute of Love and Kindness",
                isCaregiver: true,
              }}
            />
          ) : (
            <UserDropdown
              user={{
                name: data?.first_name!,
                org: "St Alex's International Hospital",
                isCaregiver: false,
              }}
            />
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
