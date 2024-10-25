// This code is the question component, which takes displays the question, answers and RangeSlider component
import React from "react";
import RangeSlider from "~/components/symptoms/form/RangeSlider";

interface QuestionProps {
  title: string;
  min: number;
  max: number;
  value: string;
  setValue: (newValue: string) => void;
}

const FreeFormQuestion: React.FC<QuestionProps> = ({
  title,
  min,
  max,
  value,
  setValue,
}) => {
  const id = `question-${title}`;

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-lg font-bold">
        {title}
      </label>
      <textarea
        className="p-4 outline outline-2 outline-black/50 rounded-md text-md min-h-32 flex flex-col justify-start"
        maxLength={max}
        minLength={min}
        value={value}
        name={id}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default FreeFormQuestion;
