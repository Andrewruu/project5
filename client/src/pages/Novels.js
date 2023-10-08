import { useSelector } from "react-redux";
import NovelCard from "../components/NovelCard";
import { Link } from "react-router-dom";

function Novels(){
    const user = useSelector((state) => state.auth.user);

    const novelList = (user.novels.length >0? (
        <div>
            <div class="container-fluid">
                <div className="row custom-card-row">
                {
                    user.novels.map((novel)=>{
                        return (
                            <NovelCard key={novel.id} novel={novel}/>
                        )
                    })
                }
                </div>
            </div>
        </div>
    ): <h1>No Novel</h1>)

    return (
        <div class="container-fluid">
            <div className="center-container">
                <h1>My Novel List</h1>
                <Link to={`/add-novel`}><button className="btn btn-outline-success my-2 custom-blue-button">Add Novel</button></Link>
            </div>
            {novelList}
        </div>
    )
}


export default Novels; 