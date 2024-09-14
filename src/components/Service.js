export default function Service(){
    return <>
    <section id="services" className="services">
      <div className="container">

        <div className="section-title">
          <h2>Services</h2>
          <p>Our services include appointment scheduling, patient registration, inventory management, billing, and analytics, ensuring seamless operations and superior patient care.</p>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div className="icon-box">
              <div className="icon"><i className="fas fa-heartbeat"></i></div>
              <h4><a href="">Appointment Scheduling</a></h4>
              <p>Efficiently manage patient appointments, reducing wait times and optimizing healthcare provider schedules for enhanced patient satisfaction and staff productivity.</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
            <div className="icon-box">
              <div className="icon"><i className="fas fa-pills"></i></div>
              <h4><a href="">Patient Registration</a></h4>
              <p>Streamline the registration process, ensuring accurate and organized patient records from the moment they enter the healthcare system, improving efficiency and data management.</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
            <div className="icon-box">
              <div className="icon"><i className="fas fa-hospital-user"></i></div>
              <h4><a href="">Inventory Management</a></h4>
              <p>Track and manage medical supplies and equipment, ensuring availability when needed, minimizing waste, and optimizing resource allocation for cost-effectiveness.</p>
            </div>
          </div>

         

        </div>

      </div>
    </section>
    </>
}