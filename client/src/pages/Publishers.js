import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Publishers = () => {
  const user = useSelector((state) => state.auth.user);

  // Create a Set to store unique publisher IDs
  const uniquePublisherIds = new Set();

  // Iterate through the user's novels and add unique publisher IDs to the Set
  user.novels.forEach((novel) => {
    if (novel.publisher && novel.publisher.id) {
      uniquePublisherIds.add(novel.publisher.id);
    }
  });

  // Convert the Set of unique IDs back to an array
  const uniquePublishers = [...uniquePublisherIds];
  console.log(user.novels)
  return (
    <div>
      <h2>Publishers for my novels</h2>
      <ul>
        {uniquePublishers.map((publisherId) => {
          // Find the publisher object based on the unique ID
          const publisher = user.novels.find(
            (novel) => novel.publisher && novel.publisher.id === publisherId
          );

          if (publisher) {
            return (
              <li key={publisher.publisher.id}>
                <Link to={`/publisher/${publisher.publisher.id}`}>
                  {publisher.publisher.name}
                </Link>{" "}
                <a href={publisher.publisher.website}>
                  {publisher.publisher.website}
                </a>
              </li>
            );
          }

          return <p>No Publisher</p>
        })}
      </ul>
    </div>
  );
};

export default Publishers;
