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
      <h2>Translators for my novels</h2>
        {uniqueTranslators.map((translatorId) => {
          // Find the translator object based on the unique ID
          const translator = user.novels.find(
            (novel) => novel.translator && novel.translator.id === translatorId
          );

          if (translator) {
            return (
              <div key={translator.translator.id}>
                <Link to={`/translator/${translator.translator.id}`}>
                  {translator.translator.name}
                </Link>{" "}
                <a href={translator.translator.website}>
                  {translator.translator.website}
                </a>
              </div>
            );
          }

          return <p>No Translator</p>
        })}
    </div>
  );
};

export default Translators;
