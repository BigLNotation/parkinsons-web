import { useNavigate } from '@remix-run/react';
import { useEffect } from 'react';
import useUserInformation from '~/components/hooks/use-user-information';

export default function Index() {
  const navigate = useNavigate();

  const { data, isError, error, isLoading } = useUserInformation();

  useEffect(() => {
    if (isLoading) return;
    if (isError || !data) {
      console.error(error);
      console.log(`data = ${data}`);
      navigate('/auth/signup');
    } else if (data.is_patient) {
      navigate('/dashboard/patients');
    } else if (!data.is_patient) {
      navigate('/dashboard/caregivers');
    } else {
      navigate('/auth/login');
    }
  }, [isLoading]);

  return <div></div>;
}
