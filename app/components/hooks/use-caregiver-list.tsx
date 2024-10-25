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

export const useCaregiverList = () =>
  useQuery({
    queryKey: ["caregiver-list"],
    queryFn: async () => {
      const res = await axios({
        url: `${import.meta.env.VITE_API_URL}/caregiver/list`,
        withCredentials: true,
      });
      return (await res.data) as Caregiver[];
    },
  });

export const removeCaregiverMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: { $oid: string }) => {
      await axios({
        url: `${import.meta.env.VITE_API_URL}/caregiver/remove/${id.$oid}`,
        withCredentials: true,
        method: "DELETE",
      });
    },
    onMutate: async (id: { $oid: string }) => {
      await queryClient.cancelQueries({
        queryKey: ["caregiver-list", id.$oid],
      });
      const previousCaregivers = queryClient.getQueryData(["caregiver-list"]);
      queryClient.setQueryData(["caregiver-list"], (prev: Caregiver[]) =>
        prev.filter((caregiver) => caregiver._id.$oid != id.$oid)
      );
      return { previousCaregivers };
    },
    onError: (err, id, context) => {
      queryClient.setQueryData(["caregiver-list"], context?.previousCaregivers);
    },
    onSettled: async () => {
      queryClient.invalidateQueries({
        queryKey: ["caregiver-list"],
      });
    },
  });
};
