import { toast } from "react-toastify"
import { usePatientStore } from "../store"
import { Patient } from "../types"
import PatientDetailItem from "./PatientDetailItem"

type PatientDetailsProps = {
    patient: Patient
}
const PatientDetails = ({patient}: PatientDetailsProps) => {

    const deletePatient = usePatientStore((state) => state.deletePatient)
    const getPatientById = usePatientStore((state) => state.getPatientById)

    const handleDelete = () => {
       deletePatient(patient.id)
       toast("Paciente Eliminado Correctamente", 
        {
            type: "error"
        }
       )
    }

  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
        <PatientDetailItem label="Id" value={patient.id} />
        <PatientDetailItem label="Nombre" value={patient.name} />
        <PatientDetailItem label="Propietario" value={patient.caretaker} />
        <PatientDetailItem label="Email" value={patient.email} />
        <PatientDetailItem label="Fecha de Alta" value={patient.date.toString()} />
        <PatientDetailItem label="Sintomas" value={patient.symptoms} />

        <div className="flex justify-between mt-10 xs:flex-col xs:gap-3">
            <button className="bg-indigo-600 px-3 py-1 text-white rounded-md xs:w-full" onClick={() => getPatientById(patient.id)}>Editar</button>
            <button className="bg-red-600 px-3 py-1 text-white rounded-md xs:w-full" onClick={handleDelete}>Eliminar</button>
        </div>


    </div>
  )
}

export default PatientDetails