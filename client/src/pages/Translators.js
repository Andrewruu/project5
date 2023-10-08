import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Translators = () => {
  const user = useSelector((state) => state.auth.user);

  // Create a Set to store unique translator IDs
  const uniqueTranslatorIds = new Set();

  // Iterate through the user's novels and add unique translator IDs to the Set
  user.novels.forEach((novel) => {
    if (novel.translator && novel.translator.id) {
      uniqueTranslatorIds.add(novel.translator.id);
    }
  });

  // Convert the Set of unique IDs back to an array
  const uniqueTranslators = [...uniqueTranslatorIds];

  return (
<div>
  <div className="container-fluid center-container">
    <h2>Translators for my novels</h2>
    <div className="table-container">
    <table className="table custom-table">
      <thead>
        <tr>
          <th>Translator Name</th>
          <th>Website</th>
        </tr>
      </thead>
      <tbody>
        {uniqueTranslators.map((translatorId) => {
          // Find the translator object based on the unique ID
          const translator = user.novels.find(
            (novel) => novel.translator && novel.translator.id === translatorId
          );

          return (
            <tr key={translatorId}>
              <td>
                {translator ? (
                  <Link className="custom-link" to={`/translator/${translator.translator.id}`}>
                    {translator.translator.name}
                  </Link>
                ) : (
                  "No Translator"
                )}
              </td>
              <td>
                {translator ? (
                  <a className="custom-link" href={translator.translator.website}>
                    {translator.translator.website}
                  </a>
                ) : (
                  "-"
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
    </div>
  </div>
</div>

  );
};

export default Translators;
