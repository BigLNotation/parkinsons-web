/*
adding symptoms modal
 */

import { useEffect, useState } from 'react';

import Button from '~/components/ui/Button';

function AddSymptomModal({
  toggleAddSymptomModal,
}: {
  toggleAddSymptomModal: () => void;
}) {
  const [formInfo, setFormInfo] = useState<{
    formName: string;
    questions: (
      | {
          Multichoice: {
            title: string;
            min_selected: number;
            max_selected: 1;
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
  }>({
    formName: '',
    questions: [],
  });

  useEffect(() => {
    console.log(`formInfo = ${JSON.stringify(formInfo)}`);
  }, [formInfo]);

  return (
    <>
      <div
        // This is div centering madness.
        className="fixed z-[120] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-980 rounded-2xl px-9 py-8 flex flex-col gap-6 w-[95%] max-w-[650px] text-gray-200"
      >
        <p className="text-2xl font-extrabold text-gray-200">
          Add a new symptom
        </p>
        <p className="font-semibold">Add a symptom to the symptom form list.</p>

        <form className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="symptom-name"
              className="text-gray-200 font-semibold"
            >
              Symptom name (required)
            </label>
            <input
              type="text"
              id="symptom-name"
              className="rounded-xl border-solid border-2 border-gray-850 px-4 h-10"
              placeholder="Symptom Name"
              value={formInfo.formName}
              onChange={(e) =>
                setFormInfo((prev) => ({
                  ...prev,
                  formName: e.target.value,
                }))
              }
            ></input>
          </div>
          <div>
            {formInfo.questions.map((element) => {
              if ('Slider' in element) {
                return <p>Slider Question</p>;
              } else if ('Multichoice' in element) {
                return <p>Multichoice Question</p>;
              } else if ('FreeForm' in element) {
                return <p>FreeForm Question</p>;
              }
            })}
          </div>
          <div className="flex flex-row justify-end">
            <button
              type="button"
              onClick={() => {
                setFormInfo((prev) => ({
                  ...prev,
                  questions: [
                    ...prev.questions,
                    {
                      FreeForm: {
                        title: '',
                        min_length: 0,
                        max_length: 256,
                      },
                    },
                  ],
                }));
              }}
              className="p-4 bg-gray-900 rounded-lg"
            >
              Add Question
            </button>
          </div>
        </form>

        <div className="flex gap-2 mt-4">
          {/*TODO saving and submit functionality*/}
          <Button variant={'primary'}>Save</Button>
          <Button
            variant={'tertiary'}
            onClick={toggleAddSymptomModal}
          >
            Cancel
          </Button>
        </div>
      </div>
    </>
  );
}

export default AddSymptomModal;
