import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export type HistoryProperties = {
  title: string;
  submittedAt: {
    $date: {
      $numberLong: number;
    };
  };
  submittedBy: {
    $oid: string;
  };
  questions:
    | (
        | {
            FreeForm: {
              id: {
                $oid: string;
              };
              title: string;
              max_length: number;
              min_length: number;
            };
          }
        | {
            Multichoice: {
              id: {
                $oid: string;
              };
              title: string;
              min_selected: number;
              max_selected: number;
              options: [
                {
                  name: string;
                  id: {
                    $oid: string;
                  };
                }
              ];
            };
          }
        | {
            Slider: {
              id: {
                $oid: string;
              };
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
  answers: (
    | {
        FreeForm: [
          id: {
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
          {
            $oid: string;
          }[]
        ];
      }
    | {
        Slider: [
          {
            $oid: string;
          },
          number
        ];
      }
  )[];
};

export const useHistoryList = () =>
  useQuery({
    queryKey: ["history-list"],
    queryFn: async () => {
      const res = await axios({
        url: `${import.meta.env.VITE_API_URL}/form/history`,
        withCredentials: true,
      });
      const data = (await res.data) as {
        title: string;
        submitted_at: {
          $date: {
            $numberLong: number;
          };
        };
        submitted_by: {
          $oid: string;
        };
        questions:
          | {
              FreeForm: {
                id: {
                  $oid: string;
                };
                title: string;
                max_length: number;
                min_length: number;
              };
            }
          | {
              Multichoice: {
                id: {
                  $oid: string;
                };
                title: string;
                options: [
                  {
                    name: string;
                    id: {
                      $oid: string;
                    };
                  }
                ];
              };
            }
          | {
              Slider: {
                id: {
                  $oid: string;
                };
                title: string;
                units?: string;
                low: number;
                high: number;
                step: number;
                highest_message?: string;
                middle_message?: string;
                lowest_message?: string;
              };
            }[];
        answers:
          | {
              FreeForm: [
                id: {
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
                {
                  $oid: string;
                }[]
              ];
            }
          | {
              Slider: [
                {
                  $oid: string;
                },
                number
              ];
            }[];
      }[];
      return data.map((element) => {
        return {
          title: element.title,
          submittedBy: element.submitted_by,
          submittedAt: new Date(Number(element.submitted_at.$date.$numberLong)),
          questions: element.questions,
          answers: element.answers,
        };
      });
    },
  });
