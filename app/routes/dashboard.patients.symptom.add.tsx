/*
adding symptoms modal
 */

import { useEffect, useState } from 'react';
import { useNavigate } from '@remix-run/react';

import Button from '~/components/ui/Button';

function AddSymptom() {
  const navigate = useNavigate();

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
    <div className="py-12 px-6 lg:px-16 flex flex-col flex-1 gap-5">
      <p className="text-2xl font-extrabold text-gray-200">Add a new symptom</p>
      <p className="font-semibold">Add a symptom to the symptom form list.</p>

      <form className="flex flex-col gap-4 w-full">
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
        <div className="flex flex-row justify-end"></div>
      </form>

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
                    title: '',
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
        <Button variant={'primary'}>Save</Button>
        <Button
          variant={'tertiary'}
          onClick={() => navigate('/dashboard/patients/symptoms')}
        >
          Cancel
        </Button>
      </div>
    </div>
  );
}

export default AddSymptom;
