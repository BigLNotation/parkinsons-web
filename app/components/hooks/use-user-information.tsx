import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useUserInformation = () =>
  useQuery({
    queryKey: ["user-info"],
    queryFn: async () => {
      const res = await axios({
        url: `${import.meta.env.VITE_API_URL}/auth/info`,
        withCredentials: true,
      });
      return (await res.data) as {
        first_name: string;
        last_name: string;
        _id: {
          $oid: string;
        };
        email_address: string;
        is_patient: boolean;
      };
    },
  });
export default useUserInformation;
