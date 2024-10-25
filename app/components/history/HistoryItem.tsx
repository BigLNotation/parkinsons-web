/*
the list items on the history page
 */

import Button from "~/components/ui/Button";

type HistoryItemProps = {
  symptom: string;
  submitted: Date;
  category: "symptom" | "mood";
};

// Variants pre setup for mood tracking, could vary colors by symptom type etc later if we want.
const variants = {
  symptom: "w-full bg-gray-950 py-1 px-6 rounded-xl",
  mood: "w-full bg-gray-900 py-1 px-6 rounded-xl",
};

function enlarge() {
  alert("This hasn't been implemented yet lol");
}

function SymptomCard({ symptom, submitted, category }: HistoryItemProps) {
  return (
    <div className={variants[category]}>
      <div className="flex gap-8 items-center justify-between">
        <p className="text-md text-gray-200 font-bold">{symptom}</p>
        <p className="text-md text-gray-300">{submitted.toUTCString()}</p>
        <div className="h-[50px]">
          <Button variant="secondary" onClick={enlarge} isFullSize>
            Modify
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SymptomCard;
