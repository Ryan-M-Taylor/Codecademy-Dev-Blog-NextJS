import React from "react";
import styles from "./Post.module.css";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

type PostProps = {
  post: {
    slug: string;
    title: string;
    author: string;
    publishDate: string;
    summary: string;
  };
  image: string | StaticImageData;
  local?: boolean;
  priority?: boolean;
};

export default function Post({
  post: { slug, title, author, publishDate, summary },
  image,
  local = false,
}: PostProps) {
  return (
    <Link className={styles.containerLink} href={`/post/${slug}`}>
      <div className={styles.imageContainer}>
        {local ? (
          <Image className={styles.postImage} src={image as StaticImageData} alt={title} />
        ) : (
          <Image
            className={styles.postImage}
            src={image as string}
            alt={title}
            width={500}
            height={500}
          />
        )}
      </div>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.summary}>{summary}</p>
      <small className={styles.info}>
        {publishDate} | {author}
      </small>
    </Link>
  );
}
