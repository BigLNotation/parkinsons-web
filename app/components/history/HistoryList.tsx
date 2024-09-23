/*
List of submissions for history tracking page. Imports HistoryItem component in the same directory.
 */

// TODO Literally all the business logic i.e. date filtering etc.

import HistoryItem from "~/components/history/HistoryItem";
import history_array from "./history_data";

function HistoryList() {

    // display by category i.e. time
    const displayed_items = history_array;
    // const displayed_items = history_array.filter((s) => s.submitted.getTime TODO SOMETHING HERE)

    return(
        <div className="flex flex-wrap gap-3 py-4">
            {displayed_items.map((item) =>
                //@ts-expect-error category type lol
                <HistoryItem key={item.id} symptom={item.symptom} submitted={item.submitted} category={item.category}/>
            )}
        </div>
    )
}

export default HistoryList
