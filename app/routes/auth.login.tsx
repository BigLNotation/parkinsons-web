import { Navigate, useNavigate } from "@remix-run/react";
import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "~/components/layout/Navbar";
import NavbarLoggedOut from "~/components/layout/NavbarLoggedOut";
import Button from "~/components/ui/Button";

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
              placeholder="Your password"
              className="py-3 rounded-xl border-solid border-2 border-gray-850 px-4"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
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

export default function AuthLogin() {
  const [emailAddress, setEmailAddress] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [errorMessage, setErrorMessage] = useState<string | undefined>("");

  const [step, setStep] = useState<"email-and-password">("email-and-password");

  const nextStep = async () => {
    switch (step) {
      case "email-and-password": {
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
      method: "PATCH",
      url: `${import.meta.env.VITE_API_URL}/auth/logout`,
      withCredentials: true,
    });
    const loginRes = await axios({
      method: "POST",
      url: `${import.meta.env.VITE_API_URL}/auth/login`,
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
      data: JSON.stringify({
        email_address: emailAddress,
        password,
      }),
    });
    if (loginRes.status !== 200) {
      setErrorMessage("We were unable to sign you into your account");
      return;
    }
    const isPatient = loginRes.data.is_patient;
    const redirectLink = isPatient
      ? "/dashboard/patients/home"
      : "/dashboard/caregivers/home";
    navigate(redirectLink);
  };

  return (
    <div className="">
      <NavbarLoggedOut />
      <div className="flex flex-col justify-center items-center pt-16 gap-8">
        <h2 className="font-extrabold text-2xl text-gray-200">
          Log in to Parkinson's Pulse
        </h2>
        {(() => {
          switch (step) {
            case "email-and-password": {
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
