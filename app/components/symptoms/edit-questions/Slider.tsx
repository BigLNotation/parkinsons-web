import { useContext, useState } from "react";
import Button from "~/components/ui/Button";
import { Form } from "~/routes/dashboard.patients.symptom.add";

interface SliderProps {
  title: string;
  setTitle: (newTitle: string) => void;
  units?: string;
  setUnits: (newUnits: string) => void;
  low: number;
  setLow: (newLow: number) => void;
  high: number;
  setHigh: (newHigh: number) => void;
  step: number;
  setStep: (newStep: number) => void;
  highestMessage?: string;
  setHighestMessage: (newHighestMessage: string) => void;
  middleMessage?: string;
  setMiddleMessage: (newMiddleMessage: string) => void;
  lowestMessage?: string;
  setLowestMessage: (newLowestMessage: string) => void;
  setQuestionType: (questionType: "FreeForm" | "Multichoice") => void;
  onDelete: () => void;
}

export default function Slider({
  title,
  setTitle,
  units,
  setUnits,
  low,
  setLow,
  high,
  setHigh,
  step,
  setStep,
  highestMessage,
  setHighestMessage,
  lowestMessage,
  setLowestMessage,
  middleMessage,
  setMiddleMessage,
  setQuestionType,
  onDelete,
}: SliderProps) {
  const [showEditQuestionTypeDropdown, setShowEditQuestionTypeDropdown] =
    useState<boolean>(false);

  return (
    <div className="p-4 bg-gray-950 rounded-lg flex flex-col gap-2">
      <div className="w-full flex flex-row justify-between">
        <p className="text-lg font-semibold">Slider Question</p>
        <span className="flex flex-row gap-2 relative">
          <Button
            variant="primary"
            onClick={() => setShowEditQuestionTypeDropdown((prev) => !prev)}
          >
            Edit Question Type
          </Button>
          {showEditQuestionTypeDropdown && (
            <div className="absolute top-full bg-gray-950 shadow-sm backdrop-blur-sm p-4 rounded-md w-full flex flex-col gap-2 text-gray-300 font-bold">
              <button
                className="hover:text-purple-500 transition duration-200 cursor-pointer"
                onClick={() => setQuestionType("FreeForm")}
              >
                Free Form
              </button>

              <button
                onClick={() => setQuestionType("Multichoice")}
                className="hover:text-purple-500 transition duration-200 cursor-pointer"
              >
                Multichoice
              </button>
            </div>
          )}
          <Button variant="secondary" onClick={onDelete}>
            Delete
          </Button>
        </span>
      </div>
      <label>Title</label>
      <input
        className="p-2 rounded-md"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <label>Units (Optional)</label>
      <input
        className="p-2 rounded-md"
        value={units || ""}
        onChange={(e) => {
          setUnits(e.target.value);
        }}
      />

      <label>Lowest Value</label>
      <input
        className="p-2 rounded-md"
        value={low}
        type="number"
        onChange={(e) => {
          try {
            const value = Number.parseInt(e.target.value);
            if (value < 0) {
              throw Error("Min selected must be positive");
            }
            if (value > high) {
              throw Error(
                "Min selected must not be greater than the max length"
              );
            }
            setLow(value);
          } catch {
            return;
          }
        }}
      />
      <label>Highest Value</label>
      <input
        className="p-2 rounded-md"
        value={high}
        type="number"
        onChange={(e) => {
          try {
            const value = Number.parseInt(e.target.value);
            if (value < 0) {
              throw Error("Max selected must be positive");
            }
            if (value < low) {
              throw Error("Max selected must be less than or equal to 512");
            }
            setHigh(value);
          } catch {
            return;
          }
        }}
      />
      <label>Step</label>
      <input
        className="p-2 rounded-md"
        value={step}
        type="number"
        onChange={(e) => {
          try {
            const value = Number.parseInt(e.target.value);
            if (value < 0) {
              throw Error("Step must be positive");
            }
            setStep(value);
          } catch {
            return;
          }
        }}
      />
      <label>Lowest Message (Optional)</label>
      <input
        className="p-2 rounded-md"
        value={lowestMessage || ""}
        onChange={(e) => {
          setLowestMessage(e.target.value);
        }}
      />
      <label>Middle Message (Optional)</label>
      <input
        className="p-2 rounded-md"
        value={middleMessage || ""}
        onChange={(e) => {
          setMiddleMessage(e.target.value);
        }}
      />
      <label>Highest Message (Optional)</label>
      <input
        className="p-2 rounded-md"
        value={highestMessage || ""}
        onChange={(e) => {
          setHighestMessage(e.target.value);
        }}
      />
    </div>
  );
}
