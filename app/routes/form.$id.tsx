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
import { useLoaderData, useNavigate } from "@remix-run/react";
import SliderQuestion from "~/components/symptoms/form/SliderQuestion";
import FreeFormQuestion from "~/components/symptoms/form/FreeFormQuestion";
import Navbar from "~/components/layout/Navbar";
import MultichoiceQuestion from "~/components/symptoms/form/MultichoiceQuestion";
import useAuthCheck from "~/components/hooks/use-auth-check";

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

export const loader: LoaderFunction = async ({ params, request }) => {
  // Fetch and return the layout and structure of the form

  const cookieHeader = request.headers.get("cookie");

  const res = await axios({
    url: `${process.env.VITE_API_URL}/form/find/${params.id}`,
    withCredentials: true,
    method: "GET",
    headers: {
      Cookie: cookieHeader,
    },
  });
  const data = (await res.data) as Form;
  return json(data);
};

export const action = async () => {
  // This is where we submit the information about the form to the API
};

const SymptomForm = () => {
  const data: Form = useLoaderData<typeof loader>();
  const navigate = useNavigate();
  const { redirect } = useAuthCheck();
  const [answers, setAnswers] = useState<FormAnswers>(() => {
    let answerList: FormAnswers = [];
    for (const question of data.questions) {
      if ("Slider" in question) {
        answerList.push({
          Slider: [question.Slider.id, question.Slider.low],
        });
      } else if ("Multichoice" in question) {
        answerList.push({
          Multichoice: [question.Multichoice.id, []],
        });
      } else if ("FreeForm" in question) {
        answerList.push({
          FreeForm: [question.FreeForm.id, ""],
        });
      }
    }
    return answerList;
  });
  console.log(`data = ${JSON.stringify(data)}`);
  async function handleSubmit(event: any) {
    event.preventDefault();

    const res = await axios({
      url: `${import.meta.env.VITE_API_URL}/form/submit/${data._id.$oid}`,
      method: "POST",
      withCredentials: true,
      data: { answers: answers },
    });
    redirect();

    // Close the form by removing the symptom from state

    // TODO some actual submitting stuff
  }

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
      <form
        className="flex flex-col gap-12 text-gray-200 w-full max-w-[800px] p-8"
        //method="post"
        //action="endpoint"
        onSubmit={handleSubmit}
      >
        <h2 className="font-bold text-2xl">{data.title}</h2>
        {symptomQuestions &&
          data.questions.map((question, index) => {
            if ("Multichoice" in question) {
              const answer = answers.find(
                (element) =>
                  "Multichoice" in element &&
                  element.Multichoice[0] == question.Multichoice.id
              );
              if (!answer || !("Multichoice" in answer)) {
                return;
              }
              const questionValue = answer.Multichoice[1];
              return (
                <MultichoiceQuestion
                  value={questionValue}
                  setValue={(newValue: { $oid: string }[]) => {
                    setAnswers((prev) =>
                      prev.map((element) => {
                        if (
                          "Multichoice" in element &&
                          element.Multichoice[0] == question.Multichoice.id
                        ) {
                          return {
                            Multichoice: [question.Multichoice.id, newValue],
                          };
                        } else {
                          return element;
                        }
                      })
                    );
                  }}
                  title={question.Multichoice.title}
                  options={question.Multichoice.options}
                  minSelected={question.Multichoice.min_selected}
                  maxSelected={question.Multichoice.max_selected}
                />
              );
            }
            if ("FreeForm" in question) {
              const answer = answers.find(
                (element) =>
                  "FreeForm" in element &&
                  element.FreeForm[0] == question.FreeForm.id
              );
              if (!answer || !("FreeForm" in answer)) {
                return;
              }
              const questionValue = answer.FreeForm[1];
              return (
                <FreeFormQuestion
                  value={questionValue}
                  setValue={(newValue: string) => {
                    setAnswers((prev) =>
                      prev.map((element) => {
                        if (
                          "FreeForm" in element &&
                          element.FreeForm[0] == question.FreeForm.id
                        ) {
                          return {
                            FreeForm: [question.FreeForm.id, newValue],
                          };
                        } else {
                          return element;
                        }
                      })
                    );
                  }}
                  title={question.FreeForm.title}
                  min={question.FreeForm.min_length}
                  max={question.FreeForm.max_length}
                />
              );
            }
            if ("Slider" in question) {
              const answer = answers.find(
                (element) =>
                  "Slider" in element && element.Slider[0] == question.Slider.id
              );
              if (!answer || !("Slider" in answer)) {
                return;
              }
              const questionValue = answer.Slider[1];
              return (
                <SliderQuestion
                  value={questionValue}
                  setValue={(newValue: number) => {
                    setAnswers((prev) =>
                      prev.map((element) => {
                        if (
                          "Slider" in element &&
                          element.Slider[0] == question.Slider.id
                        ) {
                          return {
                            Slider: [question.Slider.id, newValue],
                          };
                        } else {
                          return element;
                        }
                      })
                    );
                  }}
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
          <Button variant="tertiary">Back</Button>
          <Button variant="primary" type="submit" onSubmit={handleSubmit}>
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SymptomForm;
