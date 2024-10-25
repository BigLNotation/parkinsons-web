/*
adding symptoms modal
 */

import axios from "axios";
import { useEffect, useState } from "react";

import Button from "~/components/ui/Button";

function AddCaregiverModal({
  toggleAddCaregiverModal,
}: {
  toggleAddCaregiverModal: () => void;
}) {
  const [caregiverToken, setCaregiverToken] = useState<string | undefined>("");

  async function generateCaregiverToken() {
    const res = await axios({
      url: `${import.meta.env.VITE_API_URL}/caregiver/generate`,
      withCredentials: true,
    });
    if (res.status != 200) {
      return;
    }
    const data = res.data as {
      created_token: string;
    };
    setCaregiverToken(data.created_token);
  }

  return (
    <>
      <div
        // This is div centering madness.
        className="fixed z-[120] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-980 rounded-2xl px-9 py-8 flex flex-col gap-6 w-[95%] max-w-[650px] text-gray-200"
      >
        <p className="text-xl font-extrabold text-gray-200">
          Add a new caregiver
        </p>
        <ol className="pl-8 text-md text-gray-200 list-decimal">
          <li>Generate caregiver token</li>
          <li>Share with your caregiver (within an hour)</li>
        </ol>
        <div className="flex flex-row justify-left gap-4">
          <p className="text-lg bg-gray-900 text-black w-24 py-2 min-w-52 items-center flex justify-center min-h-12 px-4 rounded-md">
            {caregiverToken}
          </p>
          {!!caregiverToken && (
            <Button
              variant="secondary"
              onClick={() => {
                if (!caregiverToken) return;
                navigator.clipboard.writeText(caregiverToken);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#09142592"
              >
                <path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z" />
              </svg>
            </Button>
          )}
        </div>

        <div className="flex gap-2 mt-4">
          {/*TODO saving and submit functionality*/}
          <Button
            variant={"primary"}
            as="button"
            // disabled={!!caregiverToken}
            onClick={generateCaregiverToken}
          >
            Generate
          </Button>
          <Button variant={"tertiary"} onClick={toggleAddCaregiverModal}>
            Back
          </Button>
        </div>
      </div>
    </>
  );
}

export default AddCaregiverModal;
