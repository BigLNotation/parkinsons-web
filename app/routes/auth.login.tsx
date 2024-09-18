import { Navigate, useNavigate } from '@remix-run/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Navbar from '~/components/layout/Navbar';
import NavbarLoggedOut from '~/components/layout/NavbarLoggedOut';
import Button from '~/components/ui/Button';

const EmailAndPassword = ({
  password,
  emailAddress,
  setPassword,
  setEmailAddress,
  nextStep,
  errorMessage,
  setErrorMessage,
}: {
  password: string;
  emailAddress: string;
  setPassword: (newPassword: string) => void;
  setEmailAddress: (newEmailAddress: string) => void;
  nextStep: () => void;
  errorMessage: string | undefined;
  setErrorMessage: (newErrorMessage: string | undefined) => void;
}) => {
  useEffect(() => {
    setErrorMessage(undefined);
  }, []);

  return (
    <div className="flex flex-col w-full max-w-[550px] md:p-6">
      <div className="flex flex-col gap-2 p-12 rounded-xl md:bg-gray-950">
        <form
          action={undefined}
          onSubmit={() => {}}
          className="flex flex-col gap-4"
        >
          <div className="flex flex-col gap-2 w-full">
            <label
              className="font-semibold text-gray-300 text-md"
              htmlFor="email-address"
            >
              Email Address
            </label>
            <input
              name="email-address"
              className="p-2 rounded-xl border-solid border-2 border-gray-500"
              value={emailAddress}
              onChange={(event) => setEmailAddress(event.target.value)}
            ></input>
          </div>
          <div className="flex flex-col gap-2">
            <label
              className="font-semibold text-gray-300 text-md"
              htmlFor="password"
            >
              Password
            </label>
            <input
              name="password"
              type="password"
              className="p-2 rounded-xl border-solid border-2 border-gray-500"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            ></input>
          </div>
          <p className="text-red-600 font-semibold h-12">{errorMessage}</p>
          <div className="w-full flex flex-row justify-end ">
            <Button
              variant="primary"
              onClick={(event) => {
                event.preventDefault();
                nextStep();
              }}
            >
              Next
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default function AuthLogin() {
  const [emailAddress, setEmailAddress] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const [errorMessage, setErrorMessage] = useState<string | undefined>('');

  const [step, setStep] = useState<'email-and-password'>('email-and-password');

  const nextStep = async () => {
    switch (step) {
      case 'email-and-password': {
        if (!emailAddress || !password) {
          return;
        }
        submitForm(emailAddress, password);
      }
    }
  };

  const navigate = useNavigate();

  const submitForm = async (emailAddress: string, password: string) => {
    await axios({
      method: 'PATCH',
      url: 'http://localhost:4444/auth/logout',
      withCredentials: true,
    });
    const loginRes = await axios({
      method: 'POST',
      url: 'http://localhost:4444/auth/login',
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
      data: JSON.stringify({
        email_address: emailAddress,
        password,
      }),
    });
    if (loginRes.status !== 200) {
      setErrorMessage('We were unable to sign you into your account');
      return;
    }
    navigate('/dashboard');
  };

  return (
    <div className="">
      <NavbarLoggedOut />
      <div className="flex flex-col justify-center items-center pt-12">
        <h2 className="font-bold text-xl">Sign up to Parkinson's Pulse</h2>
        {(() => {
          switch (step) {
            case 'email-and-password': {
              return (
                <EmailAndPassword
                  password={password}
                  emailAddress={emailAddress}
                  setPassword={setPassword}
                  setEmailAddress={setEmailAddress}
                  nextStep={nextStep}
                  errorMessage={errorMessage}
                  setErrorMessage={setErrorMessage}
                />
              );
            }
            default: {
              return <></>;
            }
          }
        })()}
      </div>
    </div>
  );
}
