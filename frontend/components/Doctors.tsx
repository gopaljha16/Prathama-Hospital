import Image from "next/image";
import { doctors } from "./data";
import { Icon } from "./Icons";

export function Doctors() {
  return (
    <section className="section doctors-section" id="doctors">
      <div className="container">
        <h2 className="section-title">Our Doctors</h2>
        <div className="doctor-carousel">
          <button className="round-nav" aria-label="Previous doctor">
            <Icon name="chevronLeft" size={28} />
          </button>
          <div className="doctor-grid">
            {doctors.map((doctor) => (
              <article className="doctor-card" key={doctor.name}>
                <Image src={doctor.image} alt={doctor.name} width={104} height={151} />
                <div className="doctor-info">
                  <h3>{doctor.name}</h3>
                  <p>{doctor.specialty}</p>
                  <strong>{doctor.experience}</strong>
                  <div className="rating">
                    <Icon name="star" size={15} strokeWidth={1.5} />
                    <span>{doctor.rating}</span>
                    <small>({doctor.reviews})</small>
                  </div>
                  <a className="btn btn-primary" href="#appointment">
                    Book Appointment
                  </a>
                </div>
              </article>
            ))}
          </div>
          <button className="round-nav" aria-label="Next doctor">
            <Icon name="chevronRight" size={28} />
          </button>
        </div>
      </div>
    </section>
  );
}
