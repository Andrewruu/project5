import { useSelector } from "react-redux";
import NovelCard from "../components/NovelCard";
import { Link } from "react-router-dom";

function Novels(){
    const user = useSelector((state) => state.auth.user);

    const novelList = (user.novels.length >0? (
        <div>
            {
                user.novels.map((novel)=>{
                    return <NovelCard key={novel.id} novel={novel}/>
                })
            }
        </div>
    ): <h1>No Novel</h1>)

    return (
        <div>
            <h1>My Novel List</h1>
            <Link to={`/add-novel`}><button>Add Novel</button></Link>
            {novelList}
        </div>
    )
}


export default Novels; 