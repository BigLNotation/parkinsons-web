/*
List of submissions for history tracking page. Imports HistoryItem component in the same directory.
 */

// TODO Literally all the business logic i.e. date filtering etc.

import HistoryItem from "~/components/history/HistoryItem";
import history_array from "./history_data";
import { useHistoryList } from "../hooks/use-history-list";

function HistoryList() {
  const { data } = useHistoryList();

  // display by category i.e. time
  const displayed_items = history_array;
  // const displayed_items = history_array.filter((s) => s.submitted.getTime TODO SOMETHING HERE)

  return (
    <div className="flex flex-wrap gap-3 py-4">
      {data?.map((item, index) => (
        //@ts-expect-error category type lol
        <HistoryItem
          key={index}
          symptom={item.title}
          submitted={item.submittedAt}
          category="symptom"
        />
      ))}
    </div>
  );
}

export default HistoryList;
