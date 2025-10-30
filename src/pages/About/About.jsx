import styles from "./About.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faSquareFigma } from "@fortawesome/free-brands-svg-icons";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faCss } from "@fortawesome/free-brands-svg-icons";
import { faNode } from "@fortawesome/free-brands-svg-icons";
import { faJs } from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
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
            A few months ago, I wrote my first “Hello, World!” and I've been
            hooked on web development ever since. What I enjoy most is learning
            how to bring ideas to life using HTML, CSS, and JavaScript, as well
            as creating interfaces using React and powering them with Node.js
            and SQL.
          </p>
          <p>
            What excites me most about being a Web Developer is being able to
            design and create things that have purpose and solve real problems.
            It's more than just making buttons and websites. You have to love
            making experiences and solutions that help people, like making
            movies better or marketing yourself online.
          </p>

          <p>My teacher once said: </p>
          <h2 className="playfair">
            “Being a web developer is more than just writing code. It's about
            understanding what your code does.”
          </h2>
          <p>
            That’s what captivated and motivated me the most. I dived deep into
            learning React — understanding components and how they all fit
            together. I still remember the joy of creating my first debouncing
            hook and fixing the silly bug that stopped my API calls (forgot an
            await, of course). That’s when I realized how much I loved solving
            problems and seeing my code come to life. Each challenge felt like a
            puzzle, and over time, it became less about just writing code and
            more about building things that truly worked and made sense.
          </p>

          <h2 className="playfair">Skills</h2>
          <div className={styles.icons}>
            <FontAwesomeIcon icon={faSquareFigma} />
            <FontAwesomeIcon icon={faHtml5} />
            <FontAwesomeIcon icon={faCss} />
            <FontAwesomeIcon icon={faJs} />
            <FontAwesomeIcon icon={faReact} />
            <FontAwesomeIcon icon={faNode} />
            <FontAwesomeIcon icon={faDatabase} />
          </div>
        </div>
        <div className={styles.sidePic}>
          <img src="placeholder.jpg" alt="picture of me :)" />
        </div>
      </div>
    </div>
  );
}

export default About;
