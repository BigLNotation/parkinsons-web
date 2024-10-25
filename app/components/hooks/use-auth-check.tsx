import { useNavigate } from "@remix-run/react";
import useUserInformation from "./use-user-information";
import { useEffect } from "react";

export default function useAuthCheck() {
  // Check if they are logged in and redirect otherwise
  const navigate = useNavigate();

  const { data, isError, error, isLoading } = useUserInformation();

  const redirect = () => {
    if (isLoading) return;
    if (isError || !data) {
      navigate("/auth/signup");
    } else if (
      data.is_patient &&
      !window.location.href.includes("/dashboard/patients")
    ) {
      navigate("/dashboard/patients/home");
    } else if (
      !data.is_patient &&
      !window.location.href.includes("/dashboard/caregivers")
    ) {
      navigate("/dashboard/caregivers/home");
    }
  };
  return {
    redirect,
    useRedirect: () => useEffect(redirect, [isLoading]),
  };
}
