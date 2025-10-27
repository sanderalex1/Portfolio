import styles from "./About.module.css";
function About() {
  return (
    <div className="container">
      <div className={styles.aboutContainer}>
        <div className={`${styles.heroTitle} roboto`}>
          <h3 className="playfair">About</h3>
          <h2 className="playfair">
            I'm Alex. A junior web developer, based in Kristiansund, Norway.
          </h2>
          <p>
            A few months ago, I wrote my first “Hello, World!” — and that was
            it. I was hooked. Since then, I’ve been diving deep into web
            development, learning how to make ideas come alive using HTML, CSS,
            and JavaScript, crafting interfaces with React, and powering them
            with Node.js and SQL.
          </p>
        </div>
        <div className={styles.sidePic}>
          <img src="placeholder.jpg" alt="picture of me :)" />
        </div>
      </div>
    </div>
  );
}

export default About;
