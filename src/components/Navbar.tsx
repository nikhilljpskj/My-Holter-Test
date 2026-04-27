import { Menu, X } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ButtonLink } from "./ButtonLink";
import { navItems, reportAccessUrl } from "@/data/site";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container nav-shell">
        <NavLink to="/" className="brand" onClick={() => setOpen(false)}>
          <img src="/myholtertest.svg" alt="My Holter Test" />
        </NavLink>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) => (isActive ? "nav-active" : "")}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="nav-cta">
          <ButtonLink
            href={reportAccessUrl}
            target="_blank"
            rel="noreferrer"
            variant="secondary"
          >
            Access Patient Report
          </ButtonLink>
        </div>

        <button
          className="menu-button"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open ? (
        <div className="mobile-nav">
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              onClick={() => setOpen(false)}
              className={({ isActive }) => (isActive ? "nav-active" : "")}
            >
              {item.label}
            </NavLink>
          ))}
          <ButtonLink
            href={reportAccessUrl}
            target="_blank"
            rel="noreferrer"
            variant="secondary"
            className="w-full"
          >
            Access Patient Report
          </ButtonLink>
        </div>
      ) : null}
    </header>
  );
}
