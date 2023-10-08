import { Link } from "react-router-dom";

export default function NovelCard({novel}){

    return(
        
        <div class="col-12 col-md-6 col-lg-2">
            <div className="card text-bg-dark mb-3 custom-card-size" >
                
                <img
                    src={novel.image}
                    alt={novel.description}
                    className="card-img-top"
                />  
                <div class="card-body">
                    <h2>{novel.name}</h2>
                    <Link to={`/novel/${novel.id}`}><button>View Novel</button></Link>
                </div>

            </div>
        </div>
    )

}