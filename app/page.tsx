import styles from './styles/Home.module.css'
import Head from "next/head";

export default function Home() {
  return (
    <div>
    <Head>
      <title>YourCompany - Welcome</title>
      <meta name="description" content="Discover YourCompany, our services, and our mission." />
    </Head>

    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.logo}>YourCompany</h1>
        <nav>
          <ul className={styles.navLinks}>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#vision">Vision</a></li>
            <li><a href="#technologies">Technologies</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>

    <main>
      {/* Hero Section */}
      <section className={styles.hero}>
        <h2>Innovating for a Better Tomorrow</h2>
        <p>Delivering cutting-edge technology solutions to drive your success.</p>
        <a href="#contact" className={styles.cta}>Get in Touch</a>
      </section>

      {/* About Section */}
      <section id="about" className={styles.section}>
        <h2>About Us</h2>
        <p>
          At YourCompany, we specialize in building scalable and efficient solutions for
          businesses. Over the years, we've helped companies achieve their goals through our 
          expertise in technology and innovation.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className={styles.section}>
        <h2>Projects Delivered</h2>
        <p>Over <strong>150+</strong> successful projects delivered across diverse industries.</p>
      </section>

      {/* Vision Section */}
      <section id="vision" className={styles.section}>
        <h2>Our Vision</h2>
        <p>
          To empower businesses with technology solutions that drive growth and innovation,
          ensuring a sustainable and prosperous future for everyone.
        </p>
      </section>

      {/* Technologies Section */}
      <section id="technologies" className={styles.section}>
        <h2>Technologies We Use</h2>
        <div className={styles.technologies}>
          <img src="https://img.icons8.com/fluency/48/node-js.png" alt="Node.js" />
          <img src="https://img.icons8.com/ultraviolet/48/react--v2.png" alt="React" />
          <img src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/48/external-kubernetes-is-an-open-source-container-orchestration-system-logo-shadow-tal-revivo.png" alt="Kubernetes" />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={styles.section}>
        <h2>Contact Us</h2>
        <form className={styles.form}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows={5} required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>
    </main>

    <footer className={styles.footer}>
      <p>&copy; 2024 YourCompany. All rights reserved.</p>
    </footer>
  </div>
  );
}
