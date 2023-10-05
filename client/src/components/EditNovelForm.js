import React, { useEffect, useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { editNovel } from '../actions/novelActions'; 
import { fetchPublishers } from '../actions/publisherActions';
import { fetchTranslators } from '../actions/translatorActions';
import { useNavigate, useParams } from 'react-router-dom';

function EditNovelForm({ editNovel, errors }) {
    const {id} = useParams();
    const dispatch = useDispatch();
    const nav = useNavigate();
  

    const novels = useSelector((state) => state.auth.user.novels);
    const novel = novels.find((novel) => parseInt(novel.id) === parseInt(id));

    useEffect(() => {
        dispatch(fetchPublishers());
        dispatch(fetchTranslators());
    }, [dispatch]);

    const publishers = useSelector((state) => state.publishers.publishers);
    const translators = useSelector((state) => state.translators.translators);

    const [novelData, setNovelData] = useState({
        name: novel.name,
        image: novel.image,
        description: novel.description,
        publisher_id: novel.publisher_id,
        translator_id: novel.translator_id,
        publisher_attributes: {
            id: novel.publisher.id,
            name: novel.publisher.name,
            website: novel.publisher.website,
        },
        translator_attributes: {
            id: novel.translator.id,
            name: novel.translator.name,
            website: novel.translator.website,
        },
    });

    function handleInputChange(event) {
        const { name, value } = event.target;
        const updatedNovelData = { ...novelData };
        if (name === 'publisher_attributes.name')
        {
            updatedNovelData['publisher_attributes']['id'] = '';
            updatedNovelData['publisher_id'] = ''; 
        }
        if (name === 'translator_attributes.name')
        {
            updatedNovelData['translator_attributes']['id'] = '';
            updatedNovelData['translator_id'] = ''; 
        }
        if (name.includes('.')) {
          const [nestedField, nestedProperty] = name.split('.');
      
          updatedNovelData[nestedField] = { ...updatedNovelData[nestedField] };
          updatedNovelData[nestedField][nestedProperty] = value;
        } else {
          updatedNovelData[name] = value;
      
          if (name === 'publisher_id') {
            // Check if the value is empty (user manually changed publisher name)
            if (!value) {
              updatedNovelData['publisher_attributes']['id'] = '';
              updatedNovelData['publisher_id'] = ''; 
            }
      
            const selectedPublisher = publishers.find(
              (publisher) => publisher.id.toString() === value
            );
      
            if (selectedPublisher) {
              updatedNovelData['publisher_attributes']['id'] =
                selectedPublisher.id;
              updatedNovelData['publisher_attributes']['name'] =
                selectedPublisher.name;
              updatedNovelData['publisher_attributes']['website'] =
                selectedPublisher.website;
            }
          } else if (name === 'translator_id') {
            // Check if the value is empty (user manually changed translator name)
            if (!value) {
              updatedNovelData['translator_attributes']['id'] = '';
              updatedNovelData['translator_id'] = '';
            }
      
            const selectedTranslator = translators.find(
              (translator) => translator.id.toString() === value
            );
      
            if (selectedTranslator) {
              updatedNovelData['translator_attributes']['id'] =
                selectedTranslator.id;
              updatedNovelData['translator_attributes']['name'] =
                selectedTranslator.name;
              updatedNovelData['translator_attributes']['website'] =
                selectedTranslator.website;
            }
          }
        }

        setNovelData(updatedNovelData);
        console.log(updatedNovelData)
    }

    function handleSubmit(e) {
        e.preventDefault();
        
        editNovel(novel.id, novelData, nav);
    }
        

        return (
            <div className="NovelEdit">
            <form className="NovelEdit" onSubmit={handleSubmit}>
                <h1>Edit Novel</h1>
                {errors && errors.length > 0 && (
                <div className="error-messages">
                    {errors.map((error, index) => (
                    <p key={index} className="error">
                        {error}
                    </p>
                    ))}
                </div>
                )}
                <input
                type="text"
                name="name"
                placeholder="Title"
                value={novelData.name}
                onChange={handleInputChange}
                />
                <input
                type="text"
                name="image"
                placeholder="Image URL"
                value={novelData.image}
                onChange={handleInputChange}
                />
                <textarea
                form="NovelAdd"
                name="description"
                placeholder="Description min 15 char"
                value={novelData.description}
                onChange={handleInputChange}
                />

                <input
                type="text"
                name="publisher_attributes.name"
                placeholder="Publisher Name"
                value={novelData.publisher_attributes.name}
                onChange={handleInputChange}
                />
                <input
                type="text"
                name="publisher_attributes.website"
                placeholder="Publisher Website"
                value={novelData.publisher_attributes.website}
                onChange={handleInputChange}
                />
                <input
                type="text"
                name="translator_attributes.name"
                placeholder="Translator Name"
                value={novelData.translator_attributes.name}
                onChange={handleInputChange}
                />
                <input
                type="text"
                name="translator_attributes.website"
                placeholder="Translator Website"
                value={novelData.translator_attributes.website}
                onChange={handleInputChange}
                />
                <select
                name="publisher_id"
                value={novelData.publisher_id}
                onChange={handleInputChange}
                >
                <option value="">Select a Publisher</option>
                {publishers.map((publisher) => (
                    <option key={publisher.id} value={publisher.id}>
                    {publisher.name}
                    </option>
                ))}
                </select>
                <select
                name="translator_id"
                value={novelData.translator_id}
                onChange={handleInputChange}
                >
                <option value="">Select a Translator</option>
                {translators.map((translator) => (
                    <option key={translator.id} value={translator.id}>
                    {translator.name}
                    </option>
                ))}
                </select>

                <button type="submit">Edit Novel</button>
            </form>
            </div>
  );
}

const mapStateToProps = (state) => ({
    errors: state.auth.error ? state.auth.error.errors : [],
  });
  
  const mapDispatchToProps = {
    editNovel,
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(EditNovelForm);
