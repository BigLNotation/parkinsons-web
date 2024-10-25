import { useContext, useState } from "react";
import Button from "~/components/ui/Button";
import { Form } from "~/routes/dashboard.patients.symptom.add";

interface MultichoiceProps {
  title: string;
  setTitle: (newTitle: string) => void;
  maxSelected: number;
  setMaxSelected: (newTitle: number) => void;
  minSelected: number;
  setMinSelected: (newTitle: number) => void;
  options: {
    name: string;
  }[];
  setOptions: (newOptions: { name: string }[]) => void;
  setQuestionType: (questionType: "FreeForm" | "Slider") => void;
  onDelete: () => void;
}

export default function Multichoice({
  title,
  setTitle,
  maxSelected,
  setMaxSelected,
  minSelected,
  setMinSelected,
  options,
  setOptions,
  setQuestionType,
  onDelete,
}: MultichoiceProps) {
  const [showEditQuestionTypeDropdown, setShowEditQuestionTypeDropdown] =
    useState<boolean>(false);

  return (
    <div className="p-4 bg-gray-950 rounded-lg flex flex-col gap-2">
      <div className="w-full flex flex-row justify-between">
        <p className="text-lg font-semibold">Multichoice Question</p>
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
      <label>Max Selected</label>
      <input
        className="p-2 rounded-md"
        value={maxSelected}
        type="number"
        onChange={(e) => {
          try {
            const value = Number.parseInt(e.target.value);
            if (value < 0) {
              throw Error("Max selected must be positive");
            }
            if (value > options.length) {
              throw Error("Max selected must be less than or equal to 512");
            }
            setMaxSelected(value);
          } catch {
            return;
          }
        }}
      />
      <label>Min Selected</label>
      <input
        className="p-2 rounded-md"
        value={minSelected}
        type="number"
        onChange={(e) => {
          try {
            const value = Number.parseInt(e.target.value);
            if (value < 0) {
              throw Error("Min selected must be positive");
            }
            if (value > minSelected) {
              throw Error(
                "Min selected must not be greater than the max length"
              );
            }
            setMinSelected(value);
          } catch {
            return;
          }
        }}
      />
      <div className="flex flex-col gap-4">
        <p className="font-bold text-md">Options</p>
        {options.length == 0 && (
          <p className="font-bold text-gray-300 text-sm">No Options</p>
        )}
        {options.map((element, index) => (
          <div className="flex flex-row gap-2 w-full">
            <input
              className="p-2 rounded-md w-full"
              value={element.name}
              placeholder="New Option"
              onChange={(event) => {
                setOptions(
                  options.map((e, i) => {
                    if (i == index) {
                      return {
                        ...e,
                        name: event.target.value,
                      };
                    } else {
                      return e;
                    }
                  })
                );
              }}
            />
            <Button
              variant="tertiary"
              onClick={() => {
                setOptions(options.filter((e, i) => i != index));
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#020b18"
              >
                <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
              </svg>
            </Button>
          </div>
        ))}
        <div className="flex flex-row justify-end w-full">
          <Button
            variant="primary"
            onClick={() => {
              setOptions([
                ...options,
                {
                  name: "",
                },
              ]);
            }}
          >
            Add Option
          </Button>
        </div>
      </div>
    </div>
  );
}
