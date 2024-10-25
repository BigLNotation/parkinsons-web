/*
adding symptoms modal
 */

import { useEffect, useState } from "react";
import { useNavigate } from "@remix-run/react";

import Button from "~/components/ui/Button";
import {
  useCaregiverList,
  removeCaregiverMutation,
} from "~/components/hooks/use-caregiver-list";
import CaregiverCard from "~/components/caregivers/CaregiverCard";
import axios from "axios";
import AddCaregiverModal from "~/components/caregivers/AddCaregiver";

function ManageCaregivers() {
  const navigate = useNavigate();

  const [displayAddCaregiver, setDisplayAddCaregiver] =
    useState<boolean>(false);

  function toggleAddCaregiverModal() {
    setDisplayAddCaregiver(!displayAddCaregiver);
  }

  const { data } = useCaregiverList();
  const { mutate } = removeCaregiverMutation();

  const deleteCaregiver = async (id: { $oid: string }) => {
    mutate(id);
  };

  return (
    <div className="py-12 px-6 lg:px-16 flex flex-col flex-1 gap-5">
      <p className="text-2xl font-extrabold text-gray-200">Caregivers</p>
      <p className="font-semibold">Manage your caregivers.</p>

      <div className="flex flex-wrap gap-8 py-4">
        {data?.map((element) => (
          <CaregiverCard
            firstName={element.first_name}
            lastName={element.last_name}
            deleteCaregiver={() => deleteCaregiver(element._id)}
          />
        ))}
      </div>
      <div className="flex gap-2 mt-4">
        {/*TODO saving and submit functionality*/}
        <Button variant={"primary"} onClick={toggleAddCaregiverModal}>
          Add Caregiver
        </Button>
        <Button
          variant={"tertiary"}
          onClick={() => navigate("/dashboard/patients/symptoms")}
        >
          Cancel
        </Button>
      </div>
      {displayAddCaregiver && (
        <AddCaregiverModal toggleAddCaregiverModal={toggleAddCaregiverModal} />
      )}
    </div>
  );
}

export default ManageCaregivers;
