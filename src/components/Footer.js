import { Link } from "react-router-dom";

export default function Footer() {
    return <>
        <footer id="footer">



            <div className="container d-md-flex py-4">

                <div className="me-md-auto text-center text-md-start">
                    <div className="copyright">
                        &copy; Copyright <strong><span>MediFlow</span></strong>. All Rights Reserved
                    </div>
                    
                </div>
                <div className="social-links text-center text-md-right pt-3 pt-md-0">
                <Link to="https://twitter.com/i/flow/login" className="twitter"><i className="bi bi-twitter"></i></Link>
                    <Link to="https://www.instagram.com/accounts/login/?hl=en" className="instagram"><i className="bi bi-instagram"></i></Link>
                    <Link to="https://www.facebook.com/login/" className="facebook"><i className="bi bi-facebook"></i></Link>
                    <Link to="https://www.linkedin.com/company/login/" className="linkedin"><i className="bi bi-linkedin"></i></Link>
                </div>
            </div>
        </footer>
    </>
}