"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";

const navLinks = [
  { href: "#home", label: "INICIO" },
  { href: "#about", label: "NOSOTROS" },
  { href: "#disciplines", label: "PROYECTOS" },
  { href: "#contact", label: "CONTACTO" },
];

export default function Header() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("armonya-theme") as "light" | "dark" | null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initial = stored ?? (prefersDark ? "dark" : "light");
    setTheme(initial);
    document.documentElement.setAttribute("data-theme", initial);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("armonya-theme", next);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className={styles.header}>
        <button
          type="button"
          className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ""}`}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
        >
          <span className={styles.hamburgerLine} />
          <span className={styles.hamburgerLine} />
          <span className={styles.hamburgerLine} />
        </button>
        <Link href="/" className={styles.logo} onClick={closeMenu}>
          <Image
            src="/images/armonyaLogo2.png"
            alt="Armonya Studio"
            width={280}
            height={88}
            className={styles.logoImg}
            priority
          />
        </Link>
        <nav className={styles.nav}>
          {navLinks.map(({ href, label }) => (
            <Link key={href} href={href}>
              {label}
            </Link>
          ))}
        </nav>
        <button
          type="button"
          className={styles.themeToggle}
          onClick={toggleTheme}
          aria-label="Cambiar modo oscuro"
        >
          <span className={styles.moon}>◇</span>
        </button>
      </header>
      <div
        className={styles.navOverlay}
        data-open={menuOpen}
        aria-hidden={!menuOpen}
      >
        <nav className={styles.navPanel}>
          {navLinks.map(({ href, label }) => (
            <Link key={href} href={href} onClick={closeMenu}>
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
