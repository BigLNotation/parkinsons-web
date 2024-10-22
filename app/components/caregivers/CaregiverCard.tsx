/*
the boxes for symptom selecting
 */

import Button from '~/components/ui/Button';
import React from 'react';

// Currently designed to function as a button controlling state, can be modified to link to a seperate page for the form if we wanted.

type CaregiverCardProps = React.HTMLAttributes<HTMLButtonElement> & {
  firstName: string;
  lastName: string;
  deleteCaregiver: Function;
  //link?: string,
};

const variants = {
  normal:
    'bg-gray-950 py-6 px-8 rounded-2xl hover:bg-purple-950 transition duration-200',
  highlighted:
    'bg-gray-950 py-6 px-8 rounded-2xl border-2 border-teal-750 hover:bg-purple-950 transition duration-200',
};

function CaregiverCard({
  firstName,
  lastName,
  deleteCaregiver,
  ...other
}: CaregiverCardProps) {
  return (
    <button {...other}>
      <div className="flex gap-8 items-center justify-between ">
        {/*TODO Put icons here*/}
        <div className="w-[70px] h-[70px] bg-gray-500 rounded-full"></div>

        <div className="w-[220px] flex flex-col gap-5 text-left">
          <div className="flex flex-col gap-2">
            <p className="text-md font-bold text-gray-200 leading-none">
              {firstName} {lastName}
            </p>
          </div>
          <div>
            <Button
              variant="primary"
              onClick={() => deleteCaregiver()}
            >
              Remove ➜
            </Button>
          </div>
        </div>
      </div>
    </button>
  );
}

export default CaregiverCard;
