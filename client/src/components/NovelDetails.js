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
            <p>{'Translator Name: '+novel.translator.name}</p>
            <p>
                {'Translator site: '}
                <a href={novel.translator.website}>{novel.translator.website}</a>
            </p>
            <p>{'Publisher Name: '+novel.publisher.name}</p>
            <p>
                {'Publisher site: '}
                <a href={novel.publisher.website}>{novel.publisher.website}</a>
            </p>
            <Link to={`/edit-novel/${novel.id}`}><button >Edit Novel</button></Link>
            <button className={'remove'} onClick={handleDelete}>Delete</button>

        </div>
    )

}