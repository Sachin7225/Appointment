import { Link } from "react-router-dom"

export default function Header() {
    return <>
        <div id="topbar" className="d-flex align-items-center fixed-top">
            <div className="container d-flex justify-content-between">
                <div className="contact-info d-flex align-items-center">
                    <i className="bi bi-envelope"></i> <Link to="mailto:contact@example.com">contact@example.com</Link>
                    <i className="bi bi-phone"></i> +91 5589 55488 55
                </div>
                <div className="d-none d-lg-flex social-links align-items-center">
                    <Link to="https://twitter.com/i/flow/login" className="twitter"><i className="bi bi-twitter"></i></Link>
                    <Link to="https://www.instagram.com/accounts/login/?hl=en" className="instagram"><i className="bi bi-instagram"></i></Link>
                    <Link to="https://www.facebook.com/login/" className="facebook"><i className="bi bi-facebook"></i></Link>
                    <Link to="https://www.linkedin.com/company/login/" className="linkedin"><i className="bi bi-linkedin"></i></Link>
                </div>
            </div>
        </div >
    </>
}