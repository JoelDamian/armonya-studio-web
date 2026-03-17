"use client";

import type { FormEvent } from "react";
import styles from "../page.module.css";

const WHATSAPP_NUMBER = "59168496588";

function buildWhatsAppMessage(form: HTMLFormElement): string {
  const data = new FormData(form);
  const nombre = (data.get("nombre") as string)?.trim() || "";
  const email = (data.get("email") as string)?.trim() || "";
  const tipo = (data.get("tipo") as string)?.trim() || "";
  const mensaje = (data.get("mensaje") as string)?.trim() || "";

  const lines = [
    "Hola, me gustaría enviar una consulta:",
    "",
    `*Nombre:* ${nombre}`,
    `*Correo:* ${email}`,
    `*Tipo de proyecto:* ${tipo}`,
    "",
    `*Mensaje:*`,
    mensaje || "(Sin mensaje)",
  ];
  return lines.join("\n");
}

export default function ContactForm() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const text = buildWhatsAppMessage(form);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    form.reset();
  }

  return (
    <div className={styles.contactFormWrap}>
      <form className={styles.contactForm} onSubmit={handleSubmit} noValidate>
        <div className={styles.formRow}>
          <label>
            <span className={styles.labelText}>NOMBRE COMPLETO</span>
            <input
              type="text"
              name="nombre"
              placeholder="Juan García"
              autoComplete="name"
            />
          </label>
          <label>
            <span className={styles.labelText}>CORREO ELECTRÓNICO</span>
            <input
              type="email"
              name="email"
              placeholder="juan@ejemplo.com"
              autoComplete="email"
            />
          </label>
        </div>
        <label>
          <span className={styles.labelText}>TIPO DE PROYECTO</span>
          <select name="tipo" defaultValue="Diseño de interiores">
            <option value="Diseño de interiores">Diseño de interiores</option>
            <option value="Arquitectura">Arquitectura</option>
            <option value="Mueblería de melamina">Mueblería de melamina</option>
          </select>
        </label>
        <label>
          <span className={styles.labelText}>MENSAJE</span>
          <textarea
            name="mensaje"
            placeholder="Cuéntanos sobre tu proyecto..."
            rows={4}
          />
        </label>
        <button type="submit" className={styles.submitBtn}>
          Enviar consulta por WhatsApp
        </button>
      </form>
    </div>
  );
}
