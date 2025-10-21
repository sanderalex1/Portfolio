import posts from "../../data/data.json";
import PostCard from "../PostCards/PostCards";
import styles from "./PostList.module.css";

function PostList() {
  return (
    <div className={styles.sectionGrid}>
      {posts.map((p) => (
        <PostCard key={p.id} post={p} />
      ))}
    </div>
  );
}

export default PostList;
