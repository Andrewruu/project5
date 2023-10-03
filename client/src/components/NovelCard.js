import { Link } from "react-router-dom";

export default function NovelCard({novel}){

    return(
        <div className="card">
            
            <img
            src={novel.image}
            alt={novel.description}
            className="product-avatar"
            />
            <h2>{novel.name}</h2>
            <Link to={`/novel/${novel.id}`}><button>View Novel</button></Link>

        </div>
    )

}