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
    console.log(id)

    if (!novel) {
        return <div>Novel not found</div>;
      }

    const handleDelete = () => {
        dispatch(deleteNovel(novel.id,nav));
    };
    return(
        <div className="container">
        <div className="card custom-color-description">
            <h2>{novel.name}</h2>
            <div className="image-container">
                <img
                    src={novel.image}
                    alt="no image"
                    className="product-avatar custom-card-size"
                />
                <div className="text-container">
                    <h5>Description</h5>
                    <p>{novel.description}</p>
                </div>
            </div>

            <div class="card-body">
                
                <p>{'Translator Name: ' + novel.translator.name}</p>
                <p>
                    {'Translator site: '}
                    <a href={novel.translator.website}>{novel.translator.website}</a>
                </p>
                <p>{'Publisher Name: ' + novel.publisher.name}</p>
                <p>
                    {'Publisher site: '}
                    <a href={novel.publisher.website}>{novel.publisher.website}</a>
                </p>
                <Link to={`/edit-novel/${novel.id}`}><button className="btn btn-outline-success my-2 my-sm-0 custom-blue-button" >Edit Novel</button></Link>
                <button className="btn btn-outline-success my-2 my-sm-0 custom-blue-button" onClick={handleDelete}>Delete</button>

            </div>
        </div>

        </div>
    )

}