
import { create } from "zustand"
import { createJSONStorage, devtools, persist } from "zustand/middleware"
import { DraftPatient, Patient } from "./types"
import { v4 as uuidv4 } from "uuid"

type PatientState = {
    patients: Patient[],
    activeId: Patient["id"]
    addPatient: (patient: DraftPatient) => void
    deletePatient: (id: Patient["id"]) => void,
    getPatientById: (id: Patient["id"]) => void,
    updatePatient: (id: Patient["id"], patient: DraftPatient) => void
}

const createPatient = (patient: DraftPatient) : Patient => {
    return {...patient, id: uuidv4() }
}

export const usePatientStore = create<PatientState>()(
    devtools(
    persist( (set) => ({
        patients: [],
        activeId: "",
        addPatient: (patient) => {
            // console.log("llego ",patient);
            const newPatient = createPatient(patient)
            set(state => ({
                patients: [...state.patients, newPatient]
            }))
        },
        deletePatient: (id) => {
            set(state => ({
                patients: state.patients.filter(patient => patient.id !== id)
            }))
        },
        getPatientById: (id) => {
            set(() => ({
                activeId: id
            }))
        },
        updatePatient: (id, patient) => {
            set(state => ({
                patients: state.patients.map(patientState => patientState.id === state.activeId ? {id, ...patient} : patientState),
                activeId: ""
            }))
        }
    }),{
        name: "patients-storage",
        storage: createJSONStorage(() => sessionStorage)
    })      
))
