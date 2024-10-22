/*
adding symptoms modal
 */

import { useEffect, useState } from "react";
import { useNavigate } from "@remix-run/react";

import Button from "~/components/ui/Button";
import useCaregiverList from "~/components/hooks/use-caregiver-list";
import CaregiverCard from "~/components/caregivers/CaregiverCard";
import axios from "axios";

function ManageCaregivers() {
  const navigate = useNavigate();

  const { data } = useCaregiverList();

  const deleteCaregiver = async (id: { $oid: string }) => {
    const res = await axios({
      url: `${import.meta.env.VITE_API_URL}/caregiver/remove${id.$oid}`,
      withCredentials: true,
    });
  };

  return (
    <div className="py-12 px-6 lg:px-16 flex flex-col flex-1 gap-5">
      <p className="text-2xl font-extrabold text-gray-200">Caregivers</p>
      <p className="font-semibold">Manage your caregivers.</p>
      <div>
        {data?.map((element) => (
          <CaregiverCard
            firstName={element.first_name}
            lastName={element.last_name}
            deleteCaregiver={() => {}}
          />
        ))}
      </div>
      <div className="flex gap-2 mt-4">
        {/*TODO saving and submit functionality*/}
        <Button
          variant={"tertiary"}
          onClick={() => navigate("/dashboard/patients/symptoms")}
        >
          Cancel
        </Button>
      </div>
    </div>
  );
}

export default ManageCaregivers;
