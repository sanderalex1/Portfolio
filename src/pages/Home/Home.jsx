import PostList from "../../components/PostList/PostList";
import styles from "./Home.module.css";

function Home() {
  return (
    <div className="container">
      <div className={`${styles.heroTitle}`}>
        <a href="#" className="roboto" style={{ textTransform: "uppercase" }}>
          hello, my name is alex
        </a>
        <h1 className="playfair">I make websites.</h1>
        <p className={`${styles.heroParagraph} roboto`}>
          Each project — a lesson, a challenge, and a chance to turn ideas into
          something real.
        </p>
      </div>

      <section>
        <h2 className="playfair" style={{ color: "#313234" }}>
          Featured Works
        </h2>
        <PostList />
      </section>
    </div>
  );
}

export default Home;
