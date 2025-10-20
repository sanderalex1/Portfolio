import posts from "../../data/data.json";
import PostCard from "../PostCards/PostCards";

function PostList() {
  return (
    <div style={{ marginTop: "1rem" }}>
      {posts.map((p) => (
        <PostCard key={p.id} post={p} />
      ))}
    </div>
  );
}

export default PostList;
