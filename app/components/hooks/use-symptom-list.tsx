import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

interface Caregiver {
  first_name: string;
  last_name: string;
  _id: {
    $oid: string;
  };
  email_address: string;
}

export const useSymptomList = () =>
  useQuery({
    queryKey: ["symptom-list"],
    queryFn: async () => {
      const res = await axios({
        url: `${import.meta.env.VITE_API_URL}/form/symptoms`,
        withCredentials: true,
      });
      return (await res.data) as {
        title: string;
        description?: string;
        status: string;
        id: {
          $oid: string;
        };
        recently_completed: boolean;
      }[];
    },
  });
