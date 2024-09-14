import { Link, useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux'
import { useEffect } from "react";
export default function Home() {
    const user = useSelector(state => state.authInfo.value)

    
    return <>
        
        
        
        <section id="hero" className="d-flex align-items-center mt-5">
            <div className="container">
                {user.isLogin ? <> {user.type == "doctor" ? <h1>Welcome Dr. {user.name}</h1> : <> <h1>Welcome MR/MISS. {user.name}</h1></>} </> : <><h1>Welcome to SHUBHCLINIC</h1>
                    <h2>Register Here for Managing Your PaperWork in easy Way...</h2></>}

                <Link to="#about" className="btn-get-started scrollto">Get Started</Link>
            </div>
        </section>

        <section id="why-us" className="why-us">
            <div className="container">

                <div className="row">
                    <div className="col-lg-4 d-flex align-items-stretch">
                        <div className="content">
                            <h3>Why Choose MediFlow?</h3>
                            <p>
                            Choose our HMS for streamlined operations, advanced technology, enhanced patient care, cost-effectiveness, customization, scalability, and reliable support. Optimize your healthcare management effortlessly.
                            </p>
                            <div className="text-center">
                                <Link to="#" className="more-btn">Learn More <i className="bx bx-chevron-right"></i></Link>
                            </div>
                        </div>
                    </div>
                 
                </div>

            </div>
        </section>
    </>
}