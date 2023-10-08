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
      <div className="center-container">
        <h2>Novels by {publisher.name}</h2>
        <div class="container-fluid">
            <div className="row custom-card-row">
              {publisherNovels.map((novel) => (
                  <NovelCard novel={novel} />
              ))}
            </div>
        </div>
      
      <Link to="/publishers">Back to Publishers</Link>
      </div>
    </div>
  );
};

export default PublisherNovels;
