"use client";

import React, { useEffect } from "react";
import { POSTS_BY_SLUG } from "../../../data/postData";
import { CONTENTS_BY_SLUG } from "../../../data/postContentData";
import DownloadButton from "../../../components/DownloadButton/DownloadButton";
import styles from "./page.module.css";

type MetadataProps = {
  params: { slug: string };
};

export async function generateMetadata({
  params,
}: MetadataProps): Promise<Metadata> {
  const slug = params.slug;
  return {
    title: `${slug}`,
    description: `${slug}`,
  };
}

type PageProps = {
  params: {
    slug: string;
  };
};

export default function Page({ params }: PageProps) {
  const slug = params.slug;
  const post = POSTS_BY_SLUG[slug];
  const content = CONTENTS_BY_SLUG[slug];

  useEffect(() => {
    document.title = slug;
    const metaDescription = document.createElement("meta");
    metaDescription.title = "description";
    metaDescription.content = slug;
    document.head.appendChild(metaDescription);
  }, []);

  if (!post) {
    throw new Error(`Post not found for slug: ${slug}`);
  }
  return (
    <div className={styles.container}>
      <h1>{post.title}</h1>
      <small>
        {post.publishDate} | {post.author}
      </small>
      <p>{content?.copy}</p>
      <DownloadButton />
    </div>
  );
}
