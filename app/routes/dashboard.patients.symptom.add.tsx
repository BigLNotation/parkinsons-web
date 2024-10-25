/*
adding symptoms modal
 */

import { useEffect, useState, createContext } from "react";
import { useNavigate } from "@remix-run/react";

import Button from "~/components/ui/Button";
import FreeForm from "~/components/symptoms/edit-questions/FreeForm";
import Multichoice from "~/components/symptoms/edit-questions/Multichoice";
import Slider from "~/components/symptoms/edit-questions/Slider";
import axios from "axios";

export interface Form {
  title: string;
  description?: string;
  questions: (
    | {
        Multichoice: {
          title: string;
          min_selected: number;
          max_selected: number;
          options: {
            name: string;
          }[];
        };
      }
    | {
        FreeForm: {
          title: string;
          max_length: number;
          min_length: number;
        };
      }
    | {
        Slider: {
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

const QuestionInput = ({
  symptomName,
  setSymptomName,
  label,
  placeholder,
}: {
  symptomName: string;
  label: string;
  placeholder?: string;
  setSymptomName: (newName: string) => void;
}) => (
  <>
    <label htmlFor="symptom-name" className="text-gray-200 font-semibold">
      {label}
    </label>
    <input
      type="text"
      id="symptom-name"
      className="rounded-xl border-solid border-2 border-gray-850 px-4 h-10"
      placeholder={placeholder}
      value={symptomName}
      onChange={(e) => setSymptomName(e.target.value)}
    ></input>
  </>
);

function AddSymptom() {
  const navigate = useNavigate();

  const [formInfo, setFormInfo] = useState<Form>({
    title: "",
    questions: [],
  });

  const handleCreateForm = async () => {
    const res = await axios({
      url: `${import.meta.env.VITE_API_URL}/form/create`,
      data: formInfo,
      withCredentials: true,
      method: "POST",
    });
    if (res.status != 200) {
      return;
    }
    navigate("/dashboard/patients/symptoms");
  };

  const handleDeleteQuestion = (index: number) => {
    setFormInfo((prevData) => ({
      ...prevData,
      questions: prevData.questions.filter((_, i) => i !== index),
    }));
  };

  const handleInputChange = (index: number, value: any) => {
    setFormInfo((prevData) => ({
      ...prevData,
      questions: prevData.questions.map((element, i) => {
        if (i == index) {
          return value;
        } else {
          return element;
        }
      }),
    }));
  };

  return (
    <div className="py-12 px-6 lg:px-16 flex flex-col flex-1 gap-5">
      <p className="text-2xl font-extrabold text-gray-200">Add a new symptom</p>
      <p className="font-semibold">Add a symptom to the symptom form list.</p>
      <QuestionInput
        symptomName={formInfo.title}
        placeholder="Symtom name"
        label="Symptom name (required)"
        setSymptomName={(newName: string) =>
          setFormInfo((prev) => ({ ...prev, title: newName }))
        }
      />
      <QuestionInput
        symptomName={formInfo.description || ""}
        placeholder="Symptom description"
        label="Symptom description (optional)"
        setSymptomName={(newDescription: string) =>
          setFormInfo((prev) => ({ ...prev, description: newDescription }))
        }
      />
      <div className="flex flex-col gap-4 w-full">
        <div className="flex flex-col gap-2"></div>
        <div className="flex flex-col gap-4">
          {formInfo.questions.map((element, index) => {
            if ("Slider" in element) {
              return (
                <Slider
                  onDelete={() => handleDeleteQuestion(index)}
                  key={index}
                  setQuestionType={(
                    newQuestionType: "Multichoice" | "FreeForm"
                  ) => {
                    if (newQuestionType == "Multichoice") {
                      handleInputChange(index, {
                        Multichoice: {
                          title: element.Slider.title,
                          min_selected: 0,
                          max_selected: 1,
                          options: [],
                        },
                      });
                    }
                    if (newQuestionType == "FreeForm") {
                      handleInputChange(index, {
                        FreeForm: {
                          title: element.Slider.title,
                          min_length: 0,
                          max_length: 255,
                        },
                      });
                    }
                  }}
                  title={element.Slider.title}
                  setTitle={(newTitle: string) =>
                    handleInputChange(index, {
                      Slider: { ...element.Slider, title: newTitle },
                    })
                  }
                  units={element.Slider.units}
                  setUnits={(newUnits: string) =>
                    handleInputChange(index, {
                      Slider: { ...element.Slider, units: newUnits },
                    })
                  }
                  low={element.Slider.low}
                  setLow={(newLow: number) =>
                    handleInputChange(index, {
                      Slider: {
                        ...element.Slider,
                        low: newLow,
                      },
                    })
                  }
                  high={element.Slider.high}
                  setHigh={(newHigh: number) =>
                    handleInputChange(index, {
                      Slider: {
                        ...element.Slider,
                        high: newHigh,
                      },
                    })
                  }
                  step={element.Slider.step}
                  setStep={(newStep: number) =>
                    handleInputChange(index, {
                      Slider: {
                        ...element.Slider,
                        step: newStep,
                      },
                    })
                  }
                  highestMessage={element.Slider.highest_message}
                  setHighestMessage={(newHighestMessage: string) =>
                    handleInputChange(index, {
                      Slider: {
                        ...element.Slider,
                        highest_message: newHighestMessage,
                      },
                    })
                  }
                  lowestMessage={element.Slider.lowest_message}
                  setLowestMessage={(newLowestMessage: string) =>
                    handleInputChange(index, {
                      Slider: {
                        ...element.Slider,
                        lowest_message: newLowestMessage,
                      },
                    })
                  }
                  middleMessage={element.Slider.middle_message}
                  setMiddleMessage={(newMiddleMessage: string) =>
                    handleInputChange(index, {
                      Slider: {
                        ...element.Slider,
                        middle_message: newMiddleMessage,
                      },
                    })
                  }
                />
              );
            } else if ("Multichoice" in element) {
              return (
                <Multichoice
                  key={index}
                  onDelete={() => handleDeleteQuestion(index)}
                  options={element.Multichoice.options}
                  setOptions={(
                    newOptions: {
                      name: string;
                    }[]
                  ) =>
                    handleInputChange(index, {
                      Multichoice: {
                        ...element.Multichoice,
                        options: newOptions,
                      },
                    })
                  }
                  setQuestionType={(newQuestionType: "FreeForm" | "Slider") => {
                    if (newQuestionType == "FreeForm") {
                      handleInputChange(index, {
                        FreeForm: {
                          title: element.Multichoice.title,
                          min_length: 0,
                          max_length: 255,
                        },
                      });
                    }
                    if (newQuestionType == "Slider") {
                      handleInputChange(index, {
                        Slider: {
                          title: element.Multichoice.title,
                          low: 1,
                          high: 5,
                          step: 1,
                        },
                      });
                    }
                  }}
                  title={element.Multichoice.title}
                  setTitle={(newTitle: string) =>
                    handleInputChange(index, {
                      Multichoice: { ...element.Multichoice, title: newTitle },
                    })
                  }
                  maxSelected={element.Multichoice.max_selected}
                  setMaxSelected={(newMaxSelected: number) =>
                    handleInputChange(index, {
                      Multichoice: {
                        ...element.Multichoice,
                        max_selected: newMaxSelected,
                      },
                    })
                  }
                  minSelected={element.Multichoice.min_selected}
                  setMinSelected={(newMinSelected: number) =>
                    handleInputChange(index, {
                      Multichoice: {
                        ...element.Multichoice,
                        min_selected: newMinSelected,
                      },
                    })
                  }
                />
              );
            } else if ("FreeForm" in element) {
              return (
                <FreeForm
                  key={index}
                  onDelete={() => handleDeleteQuestion(index)}
                  setQuestionType={(
                    newQuestionType: "Multichoice" | "Slider"
                  ) => {
                    if (newQuestionType == "Multichoice") {
                      handleInputChange(index, {
                        Multichoice: {
                          title: element.FreeForm.title,
                          min_selected: 0,
                          max_selected: 1,
                          options: [],
                        },
                      });
                    }
                    if (newQuestionType == "Slider") {
                      handleInputChange(index, {
                        Slider: {
                          title: element.FreeForm.title,
                          low: 1,
                          high: 5,
                          step: 1,
                        },
                      });
                    }
                  }}
                  title={element.FreeForm.title}
                  setTitle={(newTitle: string) =>
                    handleInputChange(index, {
                      FreeForm: { ...element.FreeForm, title: newTitle },
                    })
                  }
                  maxLength={element.FreeForm.max_length}
                  setMaxLength={(newMaxLength: number) =>
                    handleInputChange(index, {
                      FreeForm: {
                        ...element.FreeForm,
                        max_length: newMaxLength,
                      },
                    })
                  }
                  minLength={element.FreeForm.min_length}
                  setMinLength={(newMinLength: number) =>
                    handleInputChange(index, {
                      FreeForm: {
                        ...element.FreeForm,
                        min_length: newMinLength,
                      },
                    })
                  }
                />
              );
            }
          })}
        </div>
        <div className="flex flex-row justify-end"></div>
      </div>

      <div className="flex gap-2 mt-4">
        {/*TODO saving and submit functionality*/}
        <Button
          variant="secondary"
          onClick={() => {
            setFormInfo((prev) => ({
              ...prev,
              questions: [
                ...prev.questions,
                {
                  FreeForm: {
                    title: "",
                    min_length: 0,
                    max_length: 256,
                  },
                },
              ],
            }));
          }}
        >
          Add Question
        </Button>
        <Button variant={"primary"} onClick={handleCreateForm}>
          Create
        </Button>
        <Button
          variant={"tertiary"}
          onClick={() => navigate("/dashboard/patients/symptoms")}
        >
          Cancel
        </Button>
      </div>
    </div>
  );
}

export default AddSymptom;
