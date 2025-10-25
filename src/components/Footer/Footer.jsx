import styles from "./Footer.module.css";

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
          <div>
            <p>Links</p>
            <a href="#">twitter</a>
          </div>
          <div className={styles.sideImg}>
            <a href="#">
              <img
                className={styles.ghImg}
                src="/Portfolio/github.png"
                alt="GitHub"
              />
            </a>
          </div>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
