"use client";

import Image from "next/image";
import { useState } from "react";
import logo from "@/assests/logo.png";
import { Icon } from "./Icons";

const links = ["Home", "About Us", "Departments", "Our Doctors", "Contact Us"];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);
  const openSearch = () => {
    setMenuOpen(false);
    setSearchOpen(true);
  };
  const closeSearch = () => setSearchOpen(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="#">
          <Image src={logo} alt="Prathama Hospital" priority />
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label="Open navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(true)}
        >
          <span />
          <span />
          <span />
        </button>
        <button
          className="mobile-search-toggle"
          type="button"
          aria-label="Open search"
          onClick={openSearch}
        >
          <Icon name="search" size={22} />
        </button>
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
      <div
        className={`mobile-menu ${menuOpen ? "open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <button
          className="menu-backdrop"
          type="button"
          aria-label="Close navigation menu"
          onClick={closeMenu}
        />
        <aside className="menu-panel" aria-label="Mobile navigation">
          <div className="menu-panel-head">
            <Image src={logo} alt="Prathama Hospital" priority />
            <button
              className="menu-close"
              type="button"
              aria-label="Close navigation menu"
              onClick={closeMenu}
            >
              x
            </button>
          </div>
          <nav className="mobile-nav-links" aria-label="Mobile primary navigation">
            {links.map((link) => (
              <a
                key={link}
                className={link === "Home" ? "active" : ""}
                href="#"
                onClick={closeMenu}
              >
                {link}
              </a>
            ))}
          </nav>
          <div className="mobile-menu-actions">
            <button className="btn btn-outline" type="button" onClick={openSearch}>
              <Icon name="search" size={18} />
              Search
            </button>
            <a className="btn btn-primary" href="#appointment" onClick={closeMenu}>
              <Icon name="calendar" size={18} />
              Book Appointment
            </a>
            <a className="btn btn-outline" href="tel:+919876543210" onClick={closeMenu}>
              <Icon name="phone" size={18} />
              +91 98765 43210
            </a>
          </div>
        </aside>
      </div>
      <div
        className={`search-modal ${searchOpen ? "open" : ""}`}
        aria-hidden={!searchOpen}
      >
        <button
          className="search-modal-backdrop"
          type="button"
          aria-label="Close search"
          onClick={closeSearch}
        />
        <form className="search-modal-card" role="search">
          <div className="search-modal-head">
            <h2>Search</h2>
            <button
              className="menu-close"
              type="button"
              aria-label="Close search"
              onClick={closeSearch}
            >
              x
            </button>
          </div>
          <label className="search-modal-field">
            <Icon name="search" size={22} />
            <input
              aria-label="Search doctors, departments or symptoms"
              autoComplete="off"
              name="mobile-hospital-search"
              placeholder="Search Doctors, Departments or Symptoms..."
            />
          </label>
          <button className="btn btn-primary search-modal-submit" type="submit">
            Search
          </button>
        </form>
      </div>
    </header>
  );
}
