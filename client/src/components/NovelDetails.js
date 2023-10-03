import { Link, useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { deleteNovel } from '../actions/novelActions';

export default function NovelDetails(){
    const dispatch = useDispatch();
    const nav = useNavigate();
    //This is Novel id from route url
    const {id} = useParams();

    const novels = useSelector((state) => state.auth.user.novels);
    
    const novel = novels.find((novel) => parseInt(novel.id) === parseInt(id));


    console.log(novel)
    if (!novel) {
        return <div>Novel not found</div>;
      }

    const handleDelete = () => {
        dispatch(deleteNovel(novel.id,nav));
    };
    return(
        <div className="card">
            
            <img
            src={novel.image}
            alt="no image"
            className="product-avatar"
            />
            <p>{novel.description}</p>
            <h2>{novel.name}</h2>
            <button className={'remove'} onClick={handleDelete}>Delete</button>

        </div>
    )

}