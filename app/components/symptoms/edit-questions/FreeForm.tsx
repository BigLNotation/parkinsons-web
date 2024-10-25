import { useContext, useState } from "react";
import Button from "~/components/ui/Button";
import { Form } from "~/routes/dashboard.patients.symptom.add";

interface FreeFormProps {
  title: string;
  setTitle: (newTitle: string) => void;
  maxLength: number;
  setMaxLength: (newTitle: number) => void;
  minLength: number;
  setMinLength: (newTitle: number) => void;
  setQuestionType: (questionType: "Multichoice" | "Slider") => void;
  onDelete: () => void;
}

export default function FreeForm({
  title,
  setTitle,
  maxLength,
  setMaxLength,
  minLength,
  setMinLength,
  setQuestionType,
  onDelete,
}: FreeFormProps) {
  const [showEditQuestionTypeDropdown, setShowEditQuestionTypeDropdown] =
    useState<boolean>(false);

  return (
    <div className="p-4 bg-gray-950 rounded-lg flex flex-col gap-2">
      <div className="w-full flex flex-row justify-between">
        <p className="text-lg font-semibold">Free Form Question</p>
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
                onClick={() => setQuestionType("Multichoice")}
              >
                Multichoice
              </button>

              <button
                onClick={() => setQuestionType("Slider")}
                className="hover:text-purple-500 transition duration-200 cursor-pointer"
              >
                Slider
              </button>
            </div>
          )}
          <Button onClick={onDelete} variant="secondary">
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
      <label>Max Length</label>
      <input
        className="p-2 rounded-md"
        value={maxLength}
        type="number"
        onChange={(e) => {
          try {
            const value = Number.parseInt(e.target.value);
            if (value < 0) {
              throw Error("Max length must be positive");
            }
            if (value > 512) {
              throw Error("Max value must be less than or equal to 512");
            }
            setMaxLength(value);
          } catch {
            return;
          }
        }}
      />
      <label>Min Length</label>
      <input
        className="p-2 rounded-md"
        value={minLength}
        type="number"
        onChange={(e) => {
          try {
            const value = Number.parseInt(e.target.value);
            if (value < 0) {
              throw Error("Min length must be positive");
            }
            if (value > maxLength) {
              throw Error("Min length must not be greater than the max length");
            }
            setMinLength(value);
          } catch {
            return;
          }
        }}
      />
    </div>
  );
}
