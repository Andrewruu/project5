import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Publishers = () => {
    const user = useSelector((state) => state.auth.user);
    const uniquePublisherNames = [...new Set(user.novels.map((novel) => novel.publisher))];

    return (
        <div>
        <h2>Publishers for my novels</h2>
        <ul>
            {uniquePublisherNames.map((publisher, index) => (
            <li key={index}><Link to={`/publisher/${publisher.id}`}>{publisher.name}</Link> {' '}  {<a href={publisher.website}>{publisher.website}</a>}</li>
            ))
            }
        </ul>
        </div>
    );
};

export default Publishers;
