import { Navigate, useNavigate } from "@remix-run/react";
import { useEffect } from "react";
import useAuthCheck from "~/components/hooks/use-auth-check";
import useUserInformation from "~/components/hooks/use-user-information";
import NavbarLoggedOut from "~/components/layout/NavbarLoggedOut";
import Hero from "~/components/landing/Hero";

export default function Index() {
  // const { useRedirect } = useAuthCheck();
  // useRedirect();
  return <>
    <NavbarLoggedOut/>
    <div>
      <Hero/>
    </div>
  </>;
}
