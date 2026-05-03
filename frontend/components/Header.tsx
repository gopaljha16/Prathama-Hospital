import Image from "next/image";
import logo from "@/assests/logo.png";
import { Icon } from "./Icons";

const links = ["Home", "About Us", "Departments", "Our Doctors", "Contact Us"];

export function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="#">
          <Image src={logo} alt="Prathama Hospital" priority />
        </a>
        <nav className="nav-links" aria-label="Primary navigation">
          {links.map((link) => (
            <a key={link} className={link === "Home" ? "active" : ""} href="#">
              {link}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <a className="btn btn-primary" href="#appointment">
            <Icon name="calendar" size={18} />
            Book Appointment
          </a>
          <a className="btn btn-outline" href="tel:+919876543210">
            <Icon name="phone" size={18} />
            +91 98765 43210
          </a>
        </div>
      </div>
    </header>
  );
}
