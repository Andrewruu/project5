import { Link } from "react-router-dom";

export default function NovelCard({novel}){

    return(
        
        <div class="col-12 col-md-6 col-lg-2 custom-card-col">
            <div className="card text-bg-dark mb-3 custom-card-size" >
                <Link className="custom-card-link" to={`/novel/${novel.id}`}>
                    <img
                        src={novel.image}
                        alt={novel.description}
                        className="card-img-top"
                    />  
                    <div class="card-body">
                        <h5>{novel.name}</h5>
                    </div>
                </Link>

            </div>
        </div>
    )

}