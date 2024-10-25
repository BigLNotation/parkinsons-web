/*
Grid of symptoms for symptom tracking page. Imports SymptomCard component in the same directory.
 */

import React from "react";

import SymptomCard from "~/components/symptoms/SymptomCard";
import { useSymptomList } from "../hooks/use-symptom-list";

// This might be useful later:
// interface symptom {
//     symptom: string;
//     desc: string;
//     status: string;
//     recentlyCompleted: boolean;
//     route: string,
//     category: string,
// }
//
type SymptomGridProps = {
  handleSymptomClick: (id: { $oid: string }) => void;
};

function SymptomGrid({ handleSymptomClick }: SymptomGridProps) {
  const { data } = useSymptomList();

  return (
    <div className="flex flex-wrap gap-8 py-4">
      {data?.map((s) => (
        <SymptomCard
          title={s.title}
          description={s.description}
          status={s.status}
          recentlyCompleted={s.recently_completed}
          key={s.title}
          formId={s.id}
        />
      ))}
    </div>
  );
}

export default SymptomGrid;
