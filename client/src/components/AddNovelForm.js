import React, { useEffect, useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { addNovel } from '../actions/novelActions';
import { fetchPublishers } from '../actions/publisherActions';
import { fetchTranslators } from '../actions/translatorActions';
import {useNavigate} from 'react-router-dom';

function AddNovelForm({ addNovel, errors }) {
    const dispatch = useDispatch();
    const nav = useNavigate();
    
    useEffect(() => {
        dispatch(fetchPublishers());
        dispatch(fetchTranslators());
    }, [dispatch]);

    const publishers = useSelector((state) => state.publishers.publishers);
    const translators = useSelector((state) => state.translators.translators);

    const [novelData, setNovelData] = useState({
        name: '',
        image: '',
        description: '',
        publisher_id: '',
        translator_id: '',
        publisher_attributes: {
        name: '',
        website: '',
        },
        translator_attributes: {
        name: '',
        website: '',
        },
    });

    function handleInputChange(event) {
        const { name, value } = event.target;

        const updatedNovelData = { ...novelData };

        if (name.includes('.')) {
        const [nestedField, nestedProperty] = name.split('.');

        updatedNovelData[nestedField] = { ...updatedNovelData[nestedField] };

        updatedNovelData[nestedField][nestedProperty] = value;
        } else {
        updatedNovelData[name] = value;

        if (name === 'publisher_id') {
            // Find the selected publisher using the value
            const selectedPublisher = publishers.find(
            (publisher) => publisher.id.toString() === value
            );

            // Publisher is selected, autofill the corresponding fields
            if (selectedPublisher) {
            updatedNovelData['publisher_attributes']['name'] =
                selectedPublisher.name;
            updatedNovelData['publisher_attributes']['website'] =
                selectedPublisher.website;
            } else {
            // If no publisher is selected, reset the fields
            updatedNovelData['publisher_attributes']['name'] = '';
            updatedNovelData['publisher_attributes']['website'] = '';
            }
        } else if (name === 'translator_id') {
            // Find the selected translator using the value
            const selectedTranslator = translators.find(
            (translator) => translator.id.toString() === value
            );
            // Translator is selected, autofill the corresponding fields
            if (selectedTranslator) {
            updatedNovelData['translator_attributes']['name'] =
                selectedTranslator.name;
            updatedNovelData['translator_attributes']['website'] =
                selectedTranslator.website;
            } else {
            // If no translator is selected, reset the fields
            updatedNovelData['translator_attributes']['name'] = '';
            updatedNovelData['translator_attributes']['website'] = '';
            }
        }
        }

        setNovelData(updatedNovelData);
    }

    function handleSubmit(e) {
        e.preventDefault();
    
        addNovel(novelData, nav)
        
    }
    

    return (
        <div className="NovelAdd">
        <form className="NovelAdd" onSubmit={handleSubmit}>
            <h1>Add Novel</h1>
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

            <button type="submit">Add Novel</button>
        </form>
        </div>
  );
}

const mapStateToProps = (state) => ({
  errors: state.auth.error ? state.auth.error.errors : [],
});

const mapDispatchToProps = {
  addNovel,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddNovelForm);
