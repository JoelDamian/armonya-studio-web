"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const stored = localStorage.getItem("armonya-theme") as "light" | "dark" | null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initial = stored ?? (prefersDark ? "dark" : "light");
    setTheme(initial);
    document.documentElement.setAttribute("data-theme", initial);
  }, []);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("armonya-theme", next);
  };

  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
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
        <Link href="#home">INICIO</Link>
        <Link href="#about">NOSOTROS</Link>
        <Link href="#projects">PROYECTOS</Link>
        <Link href="#contact">CONTACTO</Link>
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
  );
}
