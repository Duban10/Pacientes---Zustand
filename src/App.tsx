
import { ToastContainer } from 'react-toastify'
import './App.css'
import PatientForm from './components/PatientForm'
import PatientList from './components/PatientList'


function App() {

  return (
    <>
      <div className='container mx-auto mt-20 xs:mt-10'>
        <h1 className='font-black text-5xl text-center md:w-2/3 md:mx-auto xs:text-4xl'>
          Seguimiento de pacientes {' '}
          <span className='text-indigo-700'>Veterinaria</span></h1>
      </div>
      <div className='xs:mt-4 mt-12 md:flex justify-center'>
          <PatientForm />
          <PatientList />
      </div>
      <ToastContainer />
    </>
  )
}

export default App
