import Image from "next/image";
import logo from "@/assests/logo.png";
import { Icon } from "./Icons";

export function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Image src={logo} alt="Prathama Hospital" />
          <p>
            Prathama Hospital is committed to providing exceptional healthcare
            with compassion, innovation, and excellence.
          </p>
          <div className="socials">
            <span>f</span>
            <span>ig</span>
            <span>t</span>
            <span>in</span>
          </div>
        </div>
        <div>
          <h3>Quick Links</h3>
          <a href="#">Home</a>
          <a href="#about">About Us</a>
          <a href="#departments">Departments</a>
          <a href="#doctors">Our Doctors</a>
          <a href="#contact">Contact Us</a>
        </div>
        <div>
          <h3>Departments</h3>
          <a href="#">Cardiology</a>
          <a href="#">Neurology</a>
          <a href="#">Orthopedics</a>
          <a href="#">Pediatrics</a>
          <a href="#">Gynecology</a>
          <a href="#">General Medicine</a>
        </div>
        <div>
          <h3>Contact Us</h3>
          <p><Icon name="location" size={17} /> 123, Health Street, Hyderabad, Telangana 500001</p>
          <p><Icon name="phone" size={17} /> +91 98765 43210</p>
          <p><Icon name="mail" size={17} /> info@prathamahospital.net</p>
        </div>
        <div>
          <h3>Emergency</h3>
          <p>24/7 Emergency Services</p>
          <p><Icon name="phone" size={17} /> +91 98765 43210</p>
          <a className="emergency-btn" href="tel:+919876543210">
            Emergency Call
          </a>
          <small>Privacy Policy | Terms & Conditions</small>
        </div>
      </div>
    </footer>
  );
}
