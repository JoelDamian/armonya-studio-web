import Image from "next/image";
import Header from "./components/Header";
import ScrollReveal from "./components/ScrollReveal";
import ContactForm from "./components/ContactForm";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page} id="home">
      <Header />
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <Image
          className={styles.heroBg}
          src="/images/cover.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
        />
        <div className={styles.heroContent}>
          <p className={styles.heroSubtitle}>ARQUITECTURA E INTERIORES</p>
          <h1 className={styles.heroTitle}>
            ARMONYA
            <br />
            en el diseño
          </h1>
          <a href="#disciplines" className={styles.heroCta}>
            VER PROYECTOS
          </a>
          <span className={styles.heroScroll} aria-hidden>↓</span>
        </div>
      </section>

      {/* About */}
      <section className={styles.about} id="about">
        <ScrollReveal variant="fadeLeft">
          <div className={styles.aboutText}>
            <h2 className={styles.aboutTitle}>
              Creamos espacios donde la <em>elegancia</em> se encuentra con la funcionalidad.
            </h2>
            <p>
              En Armonya Studio creemos que la arquitectura es el lenguaje silencioso de nuestras vidas. Nuestra filosofía se centra en crear entornos que respiren, inspiren y fomenten un profundo bienestar a través de una estética equilibrada.
            </p>
            <p>
              Fundados en los principios de una sofisticación minimalista, nuestro equipo se especializa en proyectos residenciales y comerciales de alto nivel que resisten el paso del tiempo.
            </p>
          </div>
        </ScrollReveal>
        <ScrollReveal variant="fadeRight">
          <div className={styles.aboutVisual}>
            <Image
              src="/images/about.jpeg"
              alt="Detalle del estudio — jarrón y elementos naturales"
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
              className={styles.aboutImg}
            />
          </div>
        </ScrollReveal>
      </section>

      {/* Creative Disciplines */}
      <section className={styles.disciplines} id="disciplines">
        <ScrollReveal>
          <p className={styles.disciplinesLabel}>EXCELENCIA EN DISEÑO</p>
          <h2 className={styles.disciplinesTitle}>Nuestras disciplinas creativas</h2>
          <div className={styles.disciplineCards}>
            <div className={styles.card}>
              <div className={styles.cardImage}>
                <Image src="/images/gruesa.jpeg" alt="Arquitectura" fill sizes="(max-width: 768px) 100vw, 900px" quality={90} />
              </div>
              <span className={styles.cardIcon} aria-hidden>◇</span>
              <h3 className={styles.cardTitle}>Arquitectura</h3>
            </div>
            <div className={styles.card}>
              <div className={`${styles.cardImage} ${styles.cardImageInteriores}`}>
                <Image src="/images/interiores.jpeg" alt="Diseño de interiores" fill sizes="(max-width: 768px) 100vw, 900px" quality={90} />
              </div>
              <span className={styles.cardIcon} aria-hidden>◇</span>
              <h3 className={styles.cardTitle}>Diseño de interiores</h3>
            </div>
            <div className={styles.card}>
              <div className={styles.cardImage}>
                <Image src="/images/mueble.jpg" alt="Mueblería de melamina" fill sizes="(max-width: 768px) 100vw, 900px" quality={90} />
              </div>
              <span className={styles.cardIcon} aria-hidden>◇</span>
              <h3 className={styles.cardTitle}>Mueblería de melamina</h3>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <ScrollReveal>
          <h2 className={styles.ctaTitle}>
            ¿Listo para convertir tu visión en realidad?
          </h2>
          <p className={styles.ctaSub}>
            Únete a nosotros en una sesión de diseño gratuita para hablar de tu próximo proyecto. Combinamos sensibilidad artística con precisión técnica.
          </p>
          <a href="#contact" className={styles.ctaButton}>
            Reservar consulta
          </a>
        </ScrollReveal>
      </section>

      {/* Contact */}
      <section className={styles.contact} id="contact">
        <ScrollReveal variant="fadeLeft">
          <div className={styles.contactIntro}>
            <h2 className={styles.contactTitle}>
              Construyamos algo <em>hermoso.</em>
            </h2>
            <p>
              ¿Listo para transformar tu espacio? Contáctanos para una consulta privada y deja que nuestros diseñadores den vida a tu visión.
            </p>
            <ul className={styles.contactInfo}>
              <li>
                <span className={styles.contactIcon} aria-hidden>📞</span>
                +591 68496588
              </li>
              <li>
                <a href="https://www.instagram.com/armonya.studio?igsh=MTdtZ3ppbzJwdHZsOA==" target="_blank" rel="noopener noreferrer" className={styles.contactSocialLink}>
                  <span className={styles.contactIcon} aria-hidden>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  </span>
                  armonya.studio
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/share/1FyXNXPDXV/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className={styles.contactSocialLink}>
                  <span className={styles.contactIcon} aria-hidden>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  </span>
                  Armonya Studio
                </a>
              </li>
              <li>
                <a href="https://www.tiktok.com/@armonya.studio?_r=1&_t=ZS-94mDvGgCVR1" target="_blank" rel="noopener noreferrer" className={styles.contactSocialLink}>
                  <span className={styles.contactIcon} aria-hidden>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>
                  </span>
                  armonya.studio
                </a>
              </li>
            </ul>
          </div>
        </ScrollReveal>
        <ScrollReveal variant="fadeRight">
          <ContactForm />
        </ScrollReveal>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <ScrollReveal>
        <div className={styles.footerGrid}>
          <div className={styles.footerBrand}>
            <Image
              src="/images/armonyaLogo2.png"
              alt="Armonya Studio"
              width={320}
              height={104}
              className={styles.footerLogo}
            />
            <p>
              Armonya Studio es una firma de diseño boutique especializada en arquitectura residencial y comercial de alto nivel. Creemos que cada espacio tiene un alma, y nuestra misión es sacarla a la luz.
            </p>
            <div className={styles.social}>
              <a href="https://www.instagram.com/armonya.studio?igsh=MTdtZ3ppbzJwdHZsOA==" aria-label="Instagram">IG</a>
              <a href="https://www.facebook.com/share/1FyXNXPDXV/?mibextid=wwXIfr" aria-label="LinkedIn">FB</a>
              <a href="https://www.tiktok.com/@armonya.studio?_r=1&_t=ZS-94mDvGgCVR1" aria-label="YouTube">TT</a>
            </div>
          </div>
          <div className={styles.footerLinks}>
            <h4>ENLACES RÁPIDOS</h4>
            <a href="#projects">Inicio</a>
            <a href="#about">Nosotros</a>
            <a href="#contact">Contacto</a>
            <a href="https://www.canva.com/design/DAEpXvxw4WY/dGqq1PkkGPWrgxQmIbkb2w/view?utm_content=DAEpXvxw4WY&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=ha9c46da331" target="_blank" rel="noopener noreferrer">Portafolio</a>
          </div>
          <div className={styles.footerStudio}>
            <h4>ESTUDIO</h4>
            <p>Av. Blanco Galindo Km 6</p>
            <p>Cochabamba, Bolivia</p>
            <p>+591 68496588</p>
          </div>
        </div>
        <p className={styles.copyright}>
          © 2024 ARMONYA STUDIO. TODOS LOS DERECHOS RESERVADOS. ARQUITECTURA ELEGANTE PARA UNA VIDA MODERNA.
        </p>
        </ScrollReveal>
      </footer>
    </div>
  );
}
