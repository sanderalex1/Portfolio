import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className={`${styles.footer} roboto`}>
      <div className="container">
        <section className={styles.leftSection}>
          <div>
            <p>© 2025</p>
            <a href="#">Oleksandr Myrhorodskyi</a>
          </div>
          <div>
            <p>Work</p>
            <a href="#">KodeHode</a>
          </div>
          <div className={styles.sideImg}>
            <a href="https://github.com/sanderalex1" target="blank">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://github.com/sanderalex1" target="blank">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
