import { useNavigate } from "react-router-dom"

export default function NewHome(){

    const navigate = useNavigate()
    const login=()=>{
     
        navigate("/login")
     }
     const register=()=>{
      
        navigate("/register")
     }
     const home=()=>{
      
        navigate("/home_pa")
     }
     return<>
     
     <div  style={{marginTop:'5%'}}className="container-fluid main">
                <div className="row ">
                    <div className="col-sm-4 round">
                        {/* <img src="https://cdn-icons-png.freepik.com/256/456/456212.png" alt="User Icon" /> */}
                        <img src="../assets/doctor.jpg" alt="User Icon" />
                        <div><h2 className="text-center">Doctor Panel</h2></div>
                       
                        <div className="text-center"><button onClick={login} className="btn btn-primary btn-main"  >Log In</button></div>
                        <div className="text-center"><button onClick={register} className="btn btn-primary btn-main">Sign Up</button></div>
                   
                        
                    </div>
                    <div className="col-sm-4 round">
                 <img src="../assets/hospital-reception.jpg"  alt="User Icon" ></img> 
                  
                    <div><h2 className="text-center"> Reception Panel</h2></div>


                    <div className="text-center note">
                            <h2 style={{color:'gold'}}><span className="text-danger">NOTE :</span> Id and Password Given By Doctor</h2>
                        </div>
                        <div className="text-center"><button onClick={login}className="btn btn-primary btn-main">Log In</button></div>
                     
                       
                        {/* <div className="text-center"><button onClick={register} className="btn btn-primary btn-main">Sign Up</button></div> */}
                    </div>
                    <div onClick={home} className="col-sm-4 round">
                        <button><img src="../assets/pat.jpg"></img>
                        <div><h2 className="text-center">Patient Panel</h2></div></button>
                        </div>
                </div>
                
            </div>
              
            

    
     </>
 }