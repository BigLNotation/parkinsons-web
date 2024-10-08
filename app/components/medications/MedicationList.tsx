// TODO This is the most scuffed code I have ever written

import MedicationItem from "~/components/medications/MedicationItem";

function MedicationList() {

    // Hardcoded and needs to be un-hardcoded (much like EVERYTHING ELSE LMAO)

    return(
        <div className="flex flex-wrap gap-3 py-4">
            <MedicationItem title="MedicineName" dosage="Twice daily" hadToday={false}/>
            <MedicationItem title="MedicineName" dosage="Twice daily" hadToday={true}/>
            <MedicationItem title="MedicineName" dosage="Twice daily" hadToday={false}/>
            <MedicationItem title="MedicineName" dosage="Twice daily" hadToday={true}/>
            <MedicationItem title="MedicineName" dosage="Twice daily" hadToday={false}/>
        </div>
    )
}

export default MedicationList
