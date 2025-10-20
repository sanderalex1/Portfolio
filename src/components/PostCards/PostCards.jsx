import { useState, useEffect } from "react";
import styles from "./PostCards.module.css";

function PostCards({ post }) {
  return (
    <article
      className={`${styles.art}`}
      style={{ backgroundImage: `url(${post.image})` }}
    >
      <h3 className={styles.highlightText}>{post.title}</h3>
      <p>{post.excerpt}</p>
      <small>{post.count} ❤️</small>
    </article>
  );
}

export default PostCards;
