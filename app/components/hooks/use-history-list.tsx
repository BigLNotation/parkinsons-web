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

export const useHistoryList = () =>
  useQuery({
    queryKey: ["history-list"],
    queryFn: async () => {
      const res = await axios({
        url: `${import.meta.env.VITE_API_URL}/form/history`,
        withCredentials: true,
      });
      const data = (await res.data) as {
        title: string;
        submitted_at: {
          $date: {
            $numberLong: number;
          };
        };
      }[];
      return data.map((element) => {
        return {
          title: element.title,
          submittedAt: new Date(Number(element.submitted_at.$date.$numberLong)),
        };
      });
    },
  });
