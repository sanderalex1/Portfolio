import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

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
          <div>
            <p>Social</p>
            <a href="#">LinkedIn</a>
          </div>
          <div className={styles.sideImg}>
            <a href="#">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
