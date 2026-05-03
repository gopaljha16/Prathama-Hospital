import Image from "next/image";
import hospitalImage from "@/assests/derived/hospital.png";
import { quickStats } from "./data";
import { Icon } from "./Icons";

const checklist = [
  "Advanced Medical Technology",
  "Experienced & Caring Doctors",
  "Patient-Centered Care",
  "24/7 Emergency Services",
];

export function About() {
  return (
    <section className="section about-section" id="about">
      <div className="container about-grid">
        <article className="about-card">
          <h2>About Prathama Hospital</h2>
          <p>
            We are dedicated to providing comprehensive healthcare services with
            a patient-first approach. Our state-of-the-art infrastructure and
            experienced medical professionals ensure the best possible care for
            you and your family.
          </p>
          <ul>
            {checklist.map((item) => (
              <li key={item}>
                <span>+</span>
                {item}
              </li>
            ))}
          </ul>
        </article>
        <div className="hospital-photo">
          <Image src={hospitalImage} alt="Prathama Hospital building" />
        </div>
        <article className="why-card">
          <h2>Why Choose Us?</h2>
          <div className="why-stats">
            {quickStats.map((stat) => (
              <div key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
          <div className="testimonial">
            <p>
              &quot;Excellent care and support from the entire staff. The doctors are
              very experienced and take time to understand the problem. Highly
              recommended!&quot;
            </p>
            <strong>- Ramesh Kumar</strong>
            <div className="stars">
              {Array.from({ length: 5 }).map((_, index) => (
                <Icon key={index} name="star" size={18} strokeWidth={1.4} />
              ))}
            </div>
          </div>
          <div className="dots" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
        </article>
      </div>
    </section>
  );
}
