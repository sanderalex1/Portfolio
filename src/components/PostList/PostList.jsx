import posts from "../../data/data.json";
import PostCard from "../PostCards/PostCards";
import styles from "./PostList.module.css";

function PostList() {
  return (
    <div className={styles.sectionGrid}>
      {posts.map((p) => (
        <a href={p.link} target="blank">
          <PostCard key={p.id} post={p} />
        </a>
      ))}
    </div>
  );
}

export default PostList;
