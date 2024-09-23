import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useUserInformation = () =>
  useQuery({
    queryKey: ['user-info'],
    queryFn: async () => {
      const res = await axios({
        url: 'http://localhost:4444/auth/info',
        withCredentials: true,
      });
      return (await res.data) as {
        first_name: string;
        last_name: string;
        _id: {
          $oid: string;
        };
        email_address: string;
      };
    },
  });
export default useUserInformation;
