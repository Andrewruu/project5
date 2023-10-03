

export default function NovelCard({novel}){

    return(
        <div className="card">
            
            <h2>{novel.name}</h2>
            <img
            src={novel.image}
            alt={novel.description}
            className="product-avatar"
            />

        </div>
    )

}