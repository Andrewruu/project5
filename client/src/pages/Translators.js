import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Translators = () => {
    const user = useSelector((state) => state.auth.user);
    const uniqueTranslatorNames = [...new Set(user.novels.map((novel) => novel.translator))];
    
    return (
        <div>
        <h2>Translators for my novels</h2>
        <ul>
            {uniqueTranslatorNames.map((translator, index) => (
            <li key={index}><Link to={`/translator/${translator.id}`}>{translator.name}</Link>  {' '}  {<a href={translator.website}>{translator.website}</a>}</li>
            ))
            }
        </ul>
        </div>
    );
};

export default Translators;