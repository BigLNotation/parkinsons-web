import { Navigate, useNavigate } from '@remix-run/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Navbar from '~/components/layout/Navbar';
import NavbarLoggedOut from '~/components/layout/NavbarLoggedOut';
import Button from '~/components/ui/Button';

const NameInfo = ({
  firstName,
  lastName,
  setFirstName,
  setLastName,
  nextStep,
  errorMessage,
  setErrorMessage,
}: {
  firstName: string;
  lastName: string;
  setFirstName: (firstName: string) => void;
  setLastName: (lastName: string) => void;
  nextStep: () => void;
  errorMessage: string | undefined;
  setErrorMessage: (newErrorMessage: string | undefined) => void;
}) => {
  useEffect(() => {
    setErrorMessage(undefined);
  }, []);

  return (
    <div className="flex flex-col w-full max-w-[550px] md:p-6">
      <div className="flex flex-col gap-2 p-12 rounded-2xl md:bg-gray-950">
        <form
          action={undefined}
          onSubmit={() => {}}
          className="flex flex-col gap-4"
        >
          <div className="flex flex-col gap-2 w-full">
            <label
              className="font-semibold text-gray-300 text-md"
              htmlFor="first-name"
            >
              First Name
            </label>
            <input
              name="first-name"
              className="p-2 rounded-xl border-solid border-2 border-gray-500"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
            ></input>
          </div>
          <div className="flex flex-col gap-2">
            <label
              className="font-semibold text-gray-300 text-md"
              htmlFor="last-name"
            >
              Last Name
            </label>
            <input
              name="last-name"
              className="p-2 rounded-xl border-solid border-2 border-gray-500"
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
            ></input>
          </div>
          <p className="text-red-600 font-semibold h-12">{errorMessage}</p>
          <div className="w-full">
            <Button
              variant="primary"
              isFullSize
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

const EmailAndPassword = ({
  password,
  confirmPassword,
  emailAddress,
  setPassword,
  setConfirmPassword,
  setEmailAddress,
  nextStep,
  errorMessage,
  setErrorMessage,
}: {
  password: string;
  confirmPassword: string;
  emailAddress: string;
  setPassword: (newPassword: string) => void;
  setConfirmPassword: (newConfirmPassword: string) => void;
  setEmailAddress: (newEmailAddress: string) => void;
  nextStep: () => void;
  errorMessage: string | undefined;
  setErrorMessage: (newErrorMessage: string | undefined) => void;
}) => {
  useEffect(() => {
    setErrorMessage(undefined);
  }, []);

  return (
    <div className="flex flex-col w-[80%] max-w-[550px]">
      <div className="flex flex-col gap-2 p-12 rounded-3xl md:bg-gray-950">
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
              className="py-3 rounded-xl border-solid border-2 border-gray-850 px-4"
              placeholder="Your email address"
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
              className="py-3 rounded-xl border-solid border-2 border-gray-850 px-4"
              placeholder="Your password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            ></input>
          </div>
          <div className="flex flex-col gap-2">
            <label
              className="font-semibold text-gray-300 text-md"
              htmlFor="confirm-password"
            >
              Confirm Password
            </label>
            <input
              name="confirm-password"
              className="py-3 rounded-xl border-solid border-2 border-gray-850 px-4"
              type="password"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
            ></input>
          </div>
          <p className="text-red-600 font-semibold h-12">{errorMessage}</p>
          <div className="w-full">
            <Button
              variant="primary"
              isFullSize
              onClick={(event) => {
                event.preventDefault();
                if (password != confirmPassword) {
                  setErrorMessage('Passwords do not match');
                  return;
                }
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

const RoleSelection = ({
  setRoleSelected,
}: {
  setRoleSelected: (
    newRoleSelected: 'patient' | 'caregiver' | undefined
  ) => void;
  errorMessage: string | undefined;
  setErrorMessage: (newErrorMessage: string | undefined) => void;
}) => {
  return (
    <div className="w-full">
      <div className="flex flex-col gap-16 bg-teal-950 py-16 rounded-2xl justify-center items-center w-[80%] max-w-[1400px] mx-auto">
        <h3 className="text-xl text-gray-400 font-bold">
          Which of these best describes you?
        </h3>
        <div className="flex flex-col lg:flex-row gap-8">
          <button
              onClick={() => setRoleSelected('patient')}
              className="rounded-xl px-10 py-16 bg-teal-850 flex flex-col gap-4 justify-center items-center font-bold text-gray-400"
          >
            <span
                className="bg-purple-600 rounded-full w-[150px] aspect-square flex flex-col justify-center items-center">
              <img
                  width={100}
                  src="/icons/person-icon.svg"
                  alt=""
              />
            </span>
            <p className="text-purple-300 text-lg font-bold  w-[200px] leading-6">
              I'm living with Parkinson's
            </p>

          </button>
          <button
              className="rounded-xl px-10 py-16 bg-teal-850 flex flex-col gap-4 justify-center items-center font-bold text-gray-400"
              onClick={() => setRoleSelected('caregiver')}
          >
            <span
                className="bg-purple-600 rounded-full w-[150px] aspect-square flex flex-col justify-center items-center">
              <img
                  width={200}
                  src="/icons/bingud.png"
                  alt=""
              />
            </span>
            <p className="text-purple-300 text-lg font-bold w-[200px] leading-6">
              I'm a nurse, doctor, or caregiver
            </p>
          </button>
        </div>
        <p className="text-sm text-gray-500 font-inter">
          Next week's winning Lotto numbers: 1, 12, 14, 29, 31, 35, with a Powerball of 2.
        </p>
      </div>
    </div>
  );
};

export default function AuthSignup() {
  const [emailAddress, setEmailAddress] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');

  const [errorMessage, setErrorMessage] = useState<string | undefined>('');

  const [roleSelected, setRoleSelected] = useState<
    'patient' | 'caregiver' | undefined
  >();

  const [step, setStep] = useState<
    'role-select' | 'email-and-password' | 'name-info'
  >('role-select');

  const nextStep = async () => {
    switch (step) {
      case 'role-select': {
        setStep('email-and-password');
      }
      case 'email-and-password': {
        if (!emailAddress || !password) {
          return;
        }
        setStep('name-info');
      }
      case 'name-info': {
        if (!firstName || !lastName) return;
        await submitForm(
          firstName,
          lastName,
          emailAddress,
          password,
          roleSelected!
        );
      }
    }
  };

  const navigate = useNavigate();

  const submitForm = async (
    firstName: string,
    lastName: string,
    emailAddress: string,
    password: string,
    role: 'patient' | 'caregiver'
  ) => {
    await axios({
      method: 'PATCH',
      url: 'http://localhost:4444/auth/logout',
      withCredentials: true,
    });
    const createRes = await axios({
      method: 'POST',
      url: 'http://localhost:4444/auth/create',
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
      data: JSON.stringify({
        first_name: firstName,
        last_name: lastName,
        email_address: emailAddress,
        password,
        is_patient: role == 'patient',
      }),
    });
    if (createRes.status !== 200) {
      setErrorMessage('We were unable to create your account');
      return;
    }
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
    const isPatient = loginRes.data.is_patient;
    const redirectLink = isPatient
      ? '/dashboard/patient'
      : '/dashboard/caregivers';
    navigate(redirectLink);
  };

  return (
    <div className="">
      <NavbarLoggedOut />
      <div className="flex flex-col justify-center items-center pt-16 gap-8">
        <h2 className="font-extrabold text-2xl text-gray-200">Sign up to Parkinson's Pulse</h2>
        {(() => {
          switch (step) {
            case 'role-select': {
              return (
                <RoleSelection
                  setRoleSelected={(...any) => {
                    setRoleSelected(...any);
                    nextStep();
                  }}
                  errorMessage={errorMessage}
                  setErrorMessage={setErrorMessage}
                />
              );
            }
            case 'email-and-password': {
              return (
                <EmailAndPassword
                  password={password}
                  confirmPassword={confirmPassword}
                  emailAddress={emailAddress}
                  setPassword={setPassword}
                  setConfirmPassword={setConfirmPassword}
                  setEmailAddress={setEmailAddress}
                  nextStep={nextStep}
                  errorMessage={errorMessage}
                  setErrorMessage={setErrorMessage}
                />
              );
            }
            case 'name-info': {
              return (
                <NameInfo
                  firstName={firstName}
                  lastName={lastName}
                  setFirstName={setFirstName}
                  setLastName={setLastName}
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
