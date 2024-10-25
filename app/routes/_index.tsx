import { Navigate, useNavigate } from "@remix-run/react";
import { useEffect } from "react";
import useAuthCheck from "~/components/hooks/use-auth-check";
import useUserInformation from "~/components/hooks/use-user-information";

export default function Index() {
  const { useRedirect } = useAuthCheck();
  useRedirect();
  return <></>;
}
