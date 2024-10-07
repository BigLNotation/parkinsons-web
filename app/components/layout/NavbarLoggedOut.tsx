import { useNavigate } from '@remix-run/react';
import Button from '~/components/ui/Button';
import React from "react";

function NavbarLoggedOut() {
  const navigate = useNavigate();

  return (
    <header className="h-[70px] w-screen sticky top-0 bg-teal-990 border-b-[3px] border-teal-800">
      <div className="h-full w-[80%] min-w-[800px] max-w-[1400px] my-0 mx-auto flex justify-between items-center overflow-hidden">
        {/* Left side */}
        <div className="">
          <div className="flex gap-4 items-center">
            <img className="w-[35px] h-[35px]" src="/brand/parkinsonspulse_icon-LIGHT2.png" alt="">

            </img>
            <div className="flex gap-4 justify-between items-end leading-3">
              {/* Logo placeholder here */}
              <p className="font-semibold text-teal-300 text-[19px] leading-4">
                Parkinson&apos;s Pulse
              </p>
            </div>
          </div>
        </div>

        {/* Right side */}
        {/* Render user options box if logged in as patient or caregiver. Render buttons if not. */}

        <div className="flex gap-4">
          <Button
            variant="primary"
            onClick={() => navigate('/auth/signup')}
          >
            Sign up
          </Button>
          <Button
            variant="secondary"
            onClick={() => navigate('/auth/login')}
          >
            Log in
          </Button>
        </div>
      </div>
    </header>
  );
}

export default NavbarLoggedOut;
