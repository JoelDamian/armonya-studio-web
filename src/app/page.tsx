import Image from "next/image";
import Header from "./components/Header";
import ScrollReveal from "./components/ScrollReveal";
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
          src="/images/hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
        />
        <div className={styles.heroContent}>
          <p className={styles.heroSubtitle}>ARQUITECTURA E INTERIORES</p>
          <h1 className={styles.heroTitle}>
            Armonya
            <br />
            en el diseño
          </h1>
          <a href="#projects" className={styles.heroCta}>
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
            <a href="#contact" className={styles.aboutLink}>
              NUESTRA HISTORIA →
            </a>
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
      <section className={styles.disciplines}>
        <ScrollReveal>
          <p className={styles.disciplinesLabel}>EXCELENCIA EN DISEÑO</p>
          <h2 className={styles.disciplinesTitle}>Nuestras disciplinas creativas</h2>
          <div className={styles.disciplineCards}>
            <div className={styles.card}>
              <div className={styles.cardImage}>
                <Image src="/images/disciplines.jpg" alt="Arquitectura" fill sizes="400px" />
              </div>
              <span className={styles.cardIcon} aria-hidden>◇</span>
              <h3 className={styles.cardTitle}>Arquitectura</h3>
            </div>
            <div className={styles.card}>
              <div className={styles.cardImage}>
                <Image src="/images/disciplines.jpg" alt="Diseño de interiores" fill sizes="400px" />
              </div>
              <span className={styles.cardIcon} aria-hidden>◇</span>
              <h3 className={styles.cardTitle}>Diseño de interiores</h3>
            </div>
            <div className={styles.card}>
              <div className={styles.cardImage}>
                <Image src="/images/disciplines.jpg" alt="Consultoría" fill sizes="400px" />
              </div>
              <span className={styles.cardIcon} aria-hidden>◇</span>
              <h3 className={styles.cardTitle}>Consultoría</h3>
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
                <span className={styles.contactIcon} aria-hidden>📍</span>
                Av. del Diseño 123, Bloque C, París
              </li>
              <li>
                <span className={styles.contactIcon} aria-hidden>✉</span>
                hello@armonyastudio.com
              </li>
              <li>
                <span className={styles.contactIcon} aria-hidden>📞</span>
                +33 (0) 123 45 67 89
              </li>
            </ul>
          </div>
        </ScrollReveal>
        <ScrollReveal variant="fadeRight">
          <div className={styles.contactFormWrap}>
            <form className={styles.contactForm} action="#">
              <div className={styles.formRow}>
                <label>
                  <span className={styles.labelText}>NOMBRE COMPLETO</span>
                  <input type="text" placeholder="Juan García" />
                </label>
                <label>
                  <span className={styles.labelText}>CORREO ELECTRÓNICO</span>
                  <input type="email" placeholder="juan@ejemplo.com" />
                </label>
              </div>
              <label>
                <span className={styles.labelText}>TIPO DE PROYECTO</span>
                <select defaultValue="Diseño de interiores">
                  <option>Diseño de interiores</option>
                  <option>Arquitectura</option>
                  <option>Consultoría</option>
                </select>
              </label>
              <label>
                <span className={styles.labelText}>MENSAJE</span>
                <textarea placeholder="Cuéntanos sobre tu proyecto..." rows={4} />
              </label>
              <button type="submit" className={styles.submitBtn}>
                ENVIAR CONSULTA
              </button>
            </form>
          </div>
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
              <a href="#" aria-label="Instagram">IG</a>
              <a href="#" aria-label="LinkedIn">IN</a>
              <a href="#" aria-label="YouTube">YT</a>
            </div>
          </div>
          <div className={styles.footerLinks}>
            <h4>ENLACES RÁPIDOS</h4>
            <a href="#projects">Proyectos</a>
            <a href="#about">Nuestro equipo</a>
            <a href="#">Noticias y prensa</a>
            <a href="#contact">Contacto</a>
          </div>
          <div className={styles.footerStudio}>
            <h4>ESTUDIO</h4>
            <p>Av. Creativa 123</p>
            <p>Distrito del Diseño</p>
            <p>hello@armonyastudio.com</p>
            <p>+1 (234) 567-890</p>
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
