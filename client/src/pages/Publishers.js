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
 
  return (
    <div>
    <div className="container-fluid center-container">
      <h2>Publishers for my novels</h2>
      <div className="table-container">
      <table className="table custom-table">
        <thead>
          <tr>
            <th>Publisher Name</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
  {uniquePublishers.length > 0 ? (
    uniquePublishers.map((publisherId) => {
      // Find the publisher object based on the unique ID
      const publisher = user.novels.find(
        (novel) => novel.publisher && novel.publisher.id === publisherId
      );

      if (publisher) {
        return (
              <tr key={publisher.publisher.id}>
                <td>
                  <Link className="custom-link" to={`/publisher/${publisher.publisher.id}`}>
                    {publisher.publisher.name}
                  </Link>
                </td>
                <td>
                  <a className="custom-link" href={publisher.publisher.website}>
                    {publisher.publisher.website}
                  </a>
                </td>
              </tr>
            );
            } else {
              return (
                <tr key={publisherId}>
                  <td colSpan="2">No Publisher</td>
                </tr>
              );
            }
          })
        ) : (
          <tr>
            <td colSpan="2">No Publishers Found</td>
          </tr>
        )}
      </tbody>
      </table>
      </div>
    </div>
  </div>
  
  );
};

export default Publishers;
