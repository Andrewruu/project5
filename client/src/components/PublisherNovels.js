import React from "react";
import { Link, useParams } from "react-router-dom";
import NovelCard from "./NovelCard";
import { useSelector } from "react-redux";

const PublisherNovels = () => {
  const novels = useSelector((state) => state.auth.user.novels);
  const publishers = novels.map((novel) => novel.publisher)
  console.log(publishers)

  const { id } = useParams();

  const publisher = publishers.find((pub) => pub.id === parseInt(id));

  if (!publisher) {
    return <div>Publisher not found</div>;
  }


  const publisherNovels = novels.filter((novel) => novel.publisher_id === publisher.id);

  return (
    <div>
      <h2>Novels by {publisher.name}</h2>
      <ul>
        {publisherNovels.map((novel) => (
          <li key={novel.id}>
            <NovelCard novel={novel} />
          </li>
        ))}
      </ul>
      <Link to="/publishers">Back to Publishers</Link>
    </div>
  );
};

export default PublisherNovels;
