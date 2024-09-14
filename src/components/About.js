import { Link } from "react-router-dom";

export default function About() {
    return <>
        <section id="about" className="about mt-5">
            <div className="container-fluid">

                <div className="row">
                    <div className="col-xl-5 col-lg-6 video-box d-flex justify-content-center align-items-stretch position-relative">
                        <Link href="https://www.youtube.com/watch?v=jDDaplaOz7Q" className="glightbox play-btn mb-4"></Link>
                    </div>

                    <div className="col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5">
                        <h3>Efficient Healthcare Coordination: Revolutionizing Hospital Management Systems</h3>
                        <p>Transforming healthcare management: HMS integrates technology to optimize operations, enhance patient care, and streamline administrative tasks, revolutionizing hospital efficiency and effectiveness.</p>

                        <div className="icon-box">
                            <div className="icon"><i className="bx bx-fingerprint"></i></div>
                            <h4 className="title"><Link href="">MediTech</Link></h4>
                            <p className="description">Streamlining healthcare management. Enhance care, optimize operations, and boost efficiency with our innovative Hospital Management System. Revolutionize your hospital's performance today</p>
                        </div>

                        <div className="icon-box">
                            <div className="icon"><i className="bx bx-gift"></i></div>
                            <h4 className="title"><Link href="">HealthFlow</Link></h4>
                            <p className="description">Empowering hospitals. Our advanced HMS enhances care delivery, streamlines admin tasks, and maximizes resources. Transform your hospital's operations and elevate patient outcomes effortlessly</p>
                        </div>

                        <div className="icon-box">
                            <div className="icon"><i className="bx bx-atom"></i></div>
                            <h4 className="title"><Link href="">CareSync</Link></h4>
                            <p className="description">Redefining healthcare management. Seamlessly integrate technology to optimize operations, improve patient care, and enhance efficiency. Experience the future of hospital management with CareSync.</p>
                        </div>

                    </div>
                </div>

            </div>
        </section></>
}