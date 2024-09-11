import { useState } from 'react';
import Navbar from '~/components/layout/Navbar';

const NameInfo = ({
  firstName,
  lastName,
  setFirstName,
  setLastName,
  nextStep,
}: {
  firstName: string;
  lastName: string;
  setFirstName: (firstName: string) => void;
  setLastName: (lastName: string) => void;
  nextStep: () => void;
}) => {
  const [error, setError] = useState<string | undefined>();

  return (
    <div className="flex flex-col gap-2 p-8 rounded-xl bg-gray-950">
      <form
        action={undefined}
        onSubmit={() => {}}
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="first-name">First Name</label>
          <input
            name="first-name"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          ></input>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="last-name">Last Name</label>
          <input
            name="last-name"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          ></input>
        </div>
        <p className="text-red-800">{error}</p>
        <button
          type="submit"
          onClick={(event) => {
            event.preventDefault();
            if (firstName.length < 4) {
              setError('First name must be longer than three characters');
              return;
            }
            if (firstName.length >= 40) {
              setError('First name must be less than forty characters');
              return;
            }
            if (lastName.length < 4) {
              setError('Last name must be longer than three characters');
              return;
            }
            if (lastName.length >= 40) {
              setError('Last name must be less than forty characters');
              return;
            }
            nextStep();
          }}
        >
          Next
        </button>
      </form>
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
}: {
  password: string;
  confirmPassword: string;
  emailAddress: string;
  setPassword: (newPassword: string) => void;
  setConfirmPassword: (newConfirmPassword: string) => void;
  setEmailAddress: (newEmailAddress: string) => void;
  nextStep: () => void;
}) => {
  const [error, setError] = useState<string | undefined>();

  return (
    <div className="flex flex-col gap-2 p-8 rounded-xl bg-gray-950">
      <form
        action={undefined}
        onSubmit={() => {}}
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="email-address">Email Address</label>
          <input
            name="email-address"
            value={emailAddress}
            onChange={(event) => setEmailAddress(event.target.value)}
          ></input>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          ></input>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            name="confirm-password"
            type="password"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
          ></input>
        </div>
        <p className="text-red-800">{error}</p>
        <button
          type="submit"
          onClick={(event) => {
            event.preventDefault();
            if (password != confirmPassword) {
              setError('Passwords do not match');
              return;
            }
            nextStep();
          }}
        >
          Next
        </button>
      </form>
    </div>
  );
};

const RoleSelection = ({
  setRoleSelected,
}: {
  setRoleSelected: (
    newRoleSelected: 'patient' | 'caregiver' | undefined
  ) => void;
}) => {
  return (
    <div className="flex flex-col gap-2 bg-teal-950 w-full">
      <h3>Which of these best describe you?</h3>
      <div className="flex flex-row gap-4">
        <button onClick={() => setRoleSelected('patient')}>
          I'm living with Parkinson's
        </button>
        <button onClick={() => setRoleSelected('caregiver')}>
          I'm a nurse, doctor, or caregiver
        </button>
      </div>
    </div>
  );
};

export default function Auth() {
  const [emailAddress, setEmailAddress] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');

  const [roleSelected, setRoleSelected] = useState<
    'patient' | 'caregiver' | undefined
  >();

  const [step, setStep] = useState<
    'role-select' | 'email-and-password' | 'name-info'
  >('role-select');

  const nextStep = async () => {
    switch (step) {
      case 'role-select': {
        if (!roleSelected) {
          return;
        }
        setStep('email-and-password');
      }
      case 'email-and-password': {
        if (!emailAddress || !password) {
          return;
        }
        setStep('name-info');
      }
      case 'name-info': {
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

  return (
    <div className="">
      <Navbar variant="logged-out" />
      <div className="flex flex-col justify-center items-center">
        <h2 className="font-bold text-2xl">Sign up to Parkinson's Pulse</h2>
        {(() => {
          switch (step) {
            case 'role-select': {
              return (
                <RoleSelection
                  setRoleSelected={(...any) => {
                    setRoleSelected(...any);
                    nextStep();
                  }}
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

export const submitForm = async (
  firstName: string,
  lastName: string,
  emailAddress: string,
  password: string,
  role: 'patient' | 'caregiver'
) => {
  await fetch('http://localhost:3000/auth/signup', {
    body: JSON.stringify({
      firstName,
      lastName,
      emailAddress,
      password,
      role,
    }),
  });
};
