import React from "react";
import { Link, useParams } from "react-router-dom";
import NovelCard from "./NovelCard";
import { useSelector } from "react-redux";

const TranslatorNovels = () => {
  const novels = useSelector((state) => state.auth.user.novels);
  const translators = novels.map((novel) => novel.translator)
  console.log(translators)

  const { id } = useParams();

  const translator = translators.find((pub) => pub.id === parseInt(id));

  if (!translator) {
    return <div>Translator not found</div>;
  }


  const translatorNovels = novels.filter((novel) => novel.translator_id === translator.id);

  return (
    <div>
      <div className="center-container">
        <h2>Novels by {translator.name}</h2>

        <div class="container-fluid">
            <div className="row custom-card-row">
              {translatorNovels.map((novel) => (
                  <NovelCard novel={novel} />
              ))}
            </div>
        </div>

        <Link to="/translators">Back to Translators</Link>
      </div>
    </div>
  );
};

export default TranslatorNovels;
