// This code is the question component, which takes displays the question, answers and RangeSlider component
import React from "react";
import RangeSlider from "~/components/symptoms/form/RangeSlider";

interface QuestionProps {
  disabled?: boolean;
  title: string;
  minSelected: number;
  maxSelected: number;
  options: {
    name: string;
    id: {
      $oid: string;
    };
  }[];
  value: {
    $oid: string;
  }[];
  setValue: (newValue: { $oid: string }[]) => void;
}

const MultichoiceQuestion: React.FC<QuestionProps> = ({
  title,
  minSelected,
  maxSelected,
  value,
  options,
  disabled = false,
  setValue,
}) => {
  const id = `question-${title}`;

  return (
    <div className="flex flex-col gap-8">
      <label htmlFor={id} className="text-lg font-bold">
        {title}
      </label>
      <div className="flex flex-col gap-4">
        {options.map((element) => (
          <div className="flex flex-row gap-2">
            <label className="text-md">{element.name}</label>
            <input
              className="w-12 transition-all"
              disabled={disabled}
              type="checkbox"
              checked={value.map((x) => x.$oid).includes(element.id.$oid)}
              onChange={() => {
                if (value.map((x) => x.$oid).includes(element.id.$oid)) {
                  setValue(value.filter((x) => x != element.id));
                } else {
                  if (maxSelected == 1) {
                    setValue([element.id]);
                    return;
                  }
                  if (value.length >= maxSelected) {
                    return;
                  }
                  setValue([...value, element.id]);
                }
              }}
            ></input>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MultichoiceQuestion;
