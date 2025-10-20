import PostList from "../components/PostList/PostList";

function Home() {
  return (
    <section style={{ padding: "2rem" }}>
      <h2>Featured Writing</h2>
      <PostList />
    </section>
  );
}

export default Home;
