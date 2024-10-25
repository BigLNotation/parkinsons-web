import {
  LoaderFunction,
  LoaderFunctionArgs,
  createCookie,
  json,
} from "@remix-run/node";
// This is the symptom form component, which takes a question component and ideally will take a textbox component. Submitting this form stores all the data from the RangeSlider for each question and the TextBox.
import React, { useState } from "react";
import Button from "~/components/ui/Button";

import symptomQuestions from "~/components/symptoms/form/symptom_questions";
import axios from "axios";
import { useLoaderData, useLocation, useNavigate } from "@remix-run/react";
import SliderQuestion from "~/components/symptoms/form/SliderQuestion";
import FreeFormQuestion from "~/components/symptoms/form/FreeFormQuestion";
import Navbar from "~/components/layout/Navbar";
import MultichoiceQuestion from "~/components/symptoms/form/MultichoiceQuestion";
import useAuthCheck from "~/components/hooks/use-auth-check";
import { HistoryProperties } from "~/components/hooks/use-history-list";

export interface Form {
  title: string;
  _id: {
    $oid: string;
  };
  description?: string;
  questions: (
    | {
        Multichoice: {
          title: string;
          id: { $oid: string };
          min_selected: number;
          max_selected: number;
          options: {
            name: string;
            id: {
              $oid: string;
            };
          }[];
        };
      }
    | {
        FreeForm: {
          title: string;
          max_length: number;
          id: { $oid: string };
          min_length: number;
        };
      }
    | {
        Slider: {
          id: { $oid: string };
          title: string;
          units?: string;
          low: number;
          high: number;
          step: number;
          highest_message?: string;
          middle_message?: string;
          lowest_message?: string;
        };
      }
  )[];
}

type FormAnswers = (
  | {
      FreeForm: [
        {
          $oid: string;
        },
        string
      ];
    }
  | {
      Multichoice: [
        {
          $oid: string;
        },
        { $oid: string }[]
      ];
    }
  | {
      Slider: [{ $oid: string }, number];
    }
)[];

const SymptomForm = () => {
  const location = useLocation();
  const { title, questions, answers }: HistoryProperties = location.state;
  const navigate = useNavigate();
  const { redirect } = useAuthCheck();
  console.log(`questions = ${JSON.stringify(questions)}`);
  console.log(`answers = ${JSON.stringify(answers)}`);

  const [isAcessibilityModalVisible, setIsAccessibilityModalVisible] =
    useState<boolean>(false);

  return (
    <div className="flex flex-col justify-center items-center">
      <Navbar
        variant="patient"
        toggleSidebar={() => {}}
        isSidebarOpen={false}
        toggleAccessibilityModal={() =>
          setIsAccessibilityModalVisible((prev) => !prev)
        }
      />
      <div
        className="flex flex-col gap-12 text-gray-200 w-full max-w-[800px] p-8"
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <h2 className="font-bold text-2xl">{title}</h2>
        {symptomQuestions &&
          questions.map((question, index) => {
            console.log(`question = ${JSON.stringify(question)}`);
            if ("Multichoice" in question) {
              const answer = answers.find(
                (element) =>
                  "Multichoice" in element &&
                  element.Multichoice[0].$oid == question.Multichoice.id.$oid
              );
              if (!answer || !("Multichoice" in answer)) {
                return;
              }
              const questionValue = answer.Multichoice[1];
              console.log(`selected = ${JSON.stringify(questionValue)}`);
              console.log(
                `options = ${JSON.stringify(question.Multichoice.options)}`
              );
              return (
                <MultichoiceQuestion
                  disabled
                  value={[...questionValue]}
                  setValue={(newValue: { $oid: string }[]) => {}}
                  title={question.Multichoice.title}
                  key={index}
                  options={question.Multichoice.options}
                  minSelected={question.Multichoice.min_selected}
                  maxSelected={question.Multichoice.max_selected}
                />
              );
            }
            if ("FreeForm" in question) {
              const answer = answers.find((element) => {
                console.log(element);
                return (
                  "FreeForm" in element &&
                  element.FreeForm[0].$oid == question.FreeForm.id.$oid
                );
              });
              if (!answer || !("FreeForm" in answer)) {
                console.log("could not find answer");
                return;
              }
              const questionValue = answer.FreeForm[1];
              return (
                <FreeFormQuestion
                  disabled
                  key={index}
                  value={questionValue}
                  setValue={(newValue: string) => {}}
                  title={question.FreeForm.title}
                  min={question.FreeForm.min_length}
                  max={question.FreeForm.max_length}
                />
              );
            }
            if ("Slider" in question) {
              const answer = answers.find(
                (element) =>
                  "Slider" in element &&
                  element.Slider[0].$oid == question.Slider.id.$oid
              );
              if (!answer || !("Slider" in answer)) {
                return;
              }
              const questionValue = answer.Slider[1];
              return (
                <SliderQuestion
                  disabled
                  value={questionValue}
                  setValue={(newValue: number) => {}}
                  key={index}
                  min={question.Slider.low}
                  max={question.Slider.high}
                  step={question.Slider.step}
                  sliderName={question.Slider.title}
                  text={question.Slider.title}
                  answers={[
                    question.Slider.lowest_message || "",
                    question.Slider.middle_message || "",
                    question.Slider.highest_message || "",
                  ]}
                />
              );
            }
          })}
        <div className="flex gap-4 mx-auto">
          <Button variant="tertiary" onClick={() => navigate(-1)}>
            Back
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SymptomForm;
