import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Menu from './components/Menu';
import { Routes, Route } from 'react-router-dom'

import About from './components/About';
import Register from './components/Register';
import Login from './components/Login';
import { useSelector } from 'react-redux'
import NewReception from './components/doctor/NewReception';
import AllReceptions from './components/doctor/AllReceptions';
import Appointments from './components/doctor/Appointments';
import NewPatient from './components/reception/NewPatient';
import PatientDetails from './components/reception/PatientDetails';
import UpdateReception from './components/doctor/UpdateReception';
import UpdatePateint from './components/reception/UpdatePateint';
import Service from './components/Service';
import { Contact } from './components/Contact';
import NewHome from './NewHome';
import Home from './components/Home';
import Home_pa from './Home_pa';
import Appiotment from './components/Appiotment';


function App() {

  const user = useSelector(state => state.authInfo.value)
  return <>
    <Header />
    <Menu />
    


    <Routes>
      {user.isLogin ?
        <>
         <Route path='/home' element={<Home/>}></Route>
          <Route path='/newReception' element={<NewReception />}></Route>
          <Route path='/allReceptions' element={<AllReceptions />}></Route>
          <Route path='/appointments' element={<Appointments />}></Route>
          <Route path='/updateReceptionDetails' element={<UpdateReception />}></Route>
          <Route path='/newPatient' element={<NewPatient />}></Route>
         
          <Route path='/allPatients' element={<PatientDetails />}></Route>
          <Route path='/updatePatientDetails' element={<UpdatePateint />}></Route>
         
        </> :
        <>
       
          <Route path='/' element={< NewHome/>}></Route>
          <Route path='/home_pa' element={<Home_pa/>}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/services' element={<Service/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/appiotment' element={<Appiotment/>}></Route>
        </>
}


    </Routes>

    <Footer />
  </>
}

export default App;
