import { useMutation, useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useCaregiverList = () =>
  useQuery({
    queryKey: ['caregiver-list'],
    queryFn: async () => {
      const res = await axios({
        url: 'http://localhost:4444/caregiver/list',
        withCredentials: true,
      });
      return (await res.data) as {
        first_name: string;
        last_name: string;
        _id: {
          $oid: string;
        };
        email_address: string;
      }[];
    },
  });

const removeCaregiverMutation = useMutation({
  mutationFn: async (id: { $oid: string }) => {
    await axios({});
  },
});
export default useCaregiverList;
