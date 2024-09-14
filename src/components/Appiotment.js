 
  import { useEffect, useRef, useState } from "react"
  
  import { useSelector, useDispatch } from 'react-redux'
import ApiService, { Apiurls } from "../WebService/ApiService"
import { newPatientReducer } from "../reduxData/PatientSlice"

 
 export default function Appiotment() {

   
   
    const recpList = useSelector(state => state.recpInfo.value)
    console.log(recpList)
 
    const [msg, setMsg] = useState("")
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()
    const nameBox = useRef()
    const ageBox = useRef()
    const genBox = useRef()
    const dateBox = useRef()
    const phoneBox = useRef()
    const timeBox = useRef()

    const save = async (event) => {
        event.preventDefault()
        const ob = {
            name: nameBox.current.value,
            sex: genBox.current.value,
            age: ageBox.current.value,
            phoneNumber: phoneBox.current.value, appointmentdate: dateBox.current.value, time: timeBox.current.value
        }
        try {
            setLoading(true)
            const response = await ApiService.PostCall(Apiurls.PATIENTS_SAVE, ob,recpList.id)
            console.log("response Patient save", response)
            if (response.status) {
                setMsg(response.data.msg)
                dispatch(newPatientReducer([response.data]))
            } else {
                setMsg(response.data.msg)
            }
        } catch (error) {
            setMsg("Network error !")
        } finally {
            setLoading(false)
        }
       
    }
     return<>
       <section id="appointment" className="appointment section-bg " style={{ marginTop: "80px" }}>
            <div className="container">

                <div className="section-title">
                    <h2> Appointment..!</h2>
                    <p>{msg}</p>
                </div>

                <form onSubmit={save} className="php-email-form">
                    <div className="row">
                        <div className="col-md-4 form-group mt-md-0">
                            <label>Name</label>
                            <input ref={nameBox} type="text" name="name" className="form-control" id="name" placeholder="Your Name" required/>
                        </div>

                        <div className="col-md-4 form-group mt-md-0">
                            <label>Age</label>
                            <input ref={ageBox} type="number" name="age" className="form-control" id="age" placeholder="Your Age" required/>
                        </div>
                        <div className="col-md-4 form-group mt-md-0">
                            <label>Gender</label>
                            <select ref={genBox} name="gender" className="form-control form-select" id="raddress" required >
                                <option value="male">Male</option>
                                <option value="female">Female</option>

                            </select>
                        </div>



                    </div>

                    <div className="row">
                    <div className="col-md-4 form-group mt-md-0">
                            <label>reception name</label>
                            <select>
                                <option></option>
                            {recpList.map((ob, index) =><option value={ob.id} key={ob.id}>{ob.name}</option>)}
                            </select>
                
                               </div>
                        <div className="col-md-4 form-group mt-md-0">
                            <label>Phone</label>
                            <input ref={phoneBox} type="number" className="form-control" name="phone" id="phone" placeholder="Your Phone" required/>
                        </div>
                        <div className="col-md-4 form-group mt-3 mt-md-0">
                            <label>Appointment Date</label>
                            <input ref={dateBox} type="date" className="form-control" name="date" id="date" required/>
                        </div>
                        <div className="col-md-4 form-group mt-3 mt-md-0">
                            <label>Time</label>
                            <input ref={timeBox} type="time" className="form-control" name="time" id="time" required/>
                        </div>
                    </div>
                    <div className="text-center"><button type="submit">{loading ? <div class="spinner-border" role="status">
                        <span class="sr-only">Loading...</span>
                    </div> : "Save"}</button></div>
                </form>

            </div >
        </section >

     </>
 }