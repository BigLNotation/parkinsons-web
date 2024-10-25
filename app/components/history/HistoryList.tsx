/*
List of submissions for history tracking page. Imports HistoryItem component in the same directory.
 */

// TODO Literally all the business logic i.e. date filtering etc.

import HistoryItem from "~/components/history/HistoryItem";
import { useHistoryList } from "../hooks/use-history-list";
import { useNavigate } from "@remix-run/react";

function HistoryList() {
  const { data } = useHistoryList();
  const navigate = useNavigate();

  return (
    <div className="flex flex-wrap gap-3 py-4">
      {data?.map((item, index) => (
        <HistoryItem
          key={index}
          symptom={item.title}
          submitted={item.submittedAt}
          category="symptom"
          onClick={() =>
            navigate("/submission", {
              state: item,
            })
          }
        />
      ))}
    </div>
  );
}

export default HistoryList;
