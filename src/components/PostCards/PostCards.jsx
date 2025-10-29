import { useState, useEffect } from "react";
import styles from "./PostCards.module.css";

function PostCards({ post }) {
  return (
    <article
      className={`${styles.art} playfair`}
      style={{ backgroundImage: `url(${post.image})` }}
    >
      <h3 className={`${styles.highlightText} roboto`}>{post.title}</h3>
      <p>{post.excerpt}</p>
    </article>
  );
}

export default PostCards;
