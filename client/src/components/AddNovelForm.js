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
            id:'',
            name: '',
            website: '',
        },
        translator_attributes: {
            id:'',
            name: '',
            website: '',
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
    
        addNovel(novelData, nav)
        
    }
    console.log(errors)

    return (
        <div className="mb-3">
          <div className='container custom-form-size'>
            <form className="NovelAdd" onSubmit={handleSubmit}>
                <h1>Add Novel</h1>
                <label for="FormControlInput1" class="form-label">Title</label>
                <input
                  class="form-control"
                  type="text"
                  name="name"
                  placeholder="Title"
                  value={novelData.name}
                  onChange={handleInputChange}
                />

                {errors && errors.length > 0 && (
                <div className="error-messages custom-error-message">
                    {errors.map((error, index) => (
                    error.includes("Name") ?
                    <p key={index} className="error">
                        {error.replace("Name", "Title")}
                    </p> : null
                    ))}
                </div>
                )}

                <label for="FormControlInput1" class="form-label">Image URL</label>
                <input
                  class="form-control"
                  type="text"
                  name="image"
                  placeholder="Image URL"
                  value={novelData.image}
                  onChange={handleInputChange}
                />

                 <div className="error-messages custom-error-message">
                    {errors.map((error, index) => (
                    error.includes("Image") ?
                    <p key={index} className="error">
                        {error}
                    </p> : null
                    ))}
                </div>

                <label for="FormControlInput1" class="form-label">Description</label>
                <textarea
                  class="form-control"
                  form="NovelAdd"
                  name="description"
                  placeholder="Description min 15 char"
                  value={novelData.description}
                  onChange={handleInputChange}
                />

                <div className="error-messages custom-error-message">
                    {errors.map((error, index) => (
                    error.includes("Description") ?
                    <p key={index} className="error">
                        {error}
                    </p> : null
                    ))}
                </div>

                <label for="FormControlInput1" class="form-label">Publisher Name</label>
                <input
                  class="form-control"
                  type="text"
                  name="publisher_attributes.name"
                  placeholder="Publisher Name"
                  value={novelData.publisher_attributes.name}
                  onChange={handleInputChange}
                />

                <div className="error-messages custom-error-message">
                    {errors.map((error, index) => (
                    error.includes("Publisher name") ?
                    <p key={index} className="error">
                        {error}
                    </p> : null
                    ))}
                </div>

                <label for="FormControlInput1" class="form-label">Publisher Website</label>
                <input
                  class="form-control"
                  type="text"
                  name="publisher_attributes.website"
                  placeholder="Publisher Website"
                  value={novelData.publisher_attributes.website}
                  onChange={handleInputChange}
                />

                <div className="error-messages custom-error-message">
                    {errors.map((error, index) => (
                    error.includes("Publisher website") ?
                    <p key={index} className="error">
                        {error}
                    </p> : null
                    ))}
                </div>

                <label for="FormControlInput1" class="form-label">Translator Name</label>
                <input
                  class="form-control"
                  type="text"
                  name="translator_attributes.name"
                  placeholder="Translator Name"
                  value={novelData.translator_attributes.name}
                  onChange={handleInputChange}
                />

                <div className="error-messages custom-error-message">
                    {errors.map((error, index) => (
                    error.includes("Translator name") ?
                    <p key={index} className="error">
                        {error}
                    </p> : null
                    ))}
                </div>

                <label for="FormControlInput1" class="form-label">Translator Website</label>
                <input
                  class="form-control"
                  type="text"
                  name="translator_attributes.website"
                  placeholder="Translator Website"
                  value={novelData.translator_attributes.website}
                  onChange={handleInputChange}
                />

                <div className="error-messages custom-error-message">
                    {errors.map((error, index) => (
                    error.includes("Translator website") ?
                    <p key={index} className="error">
                        {error}
                    </p> : null
                    ))}
                </div>

                <label for="FormControlInput1" class="form-label">Publisher</label>
                <select
                  class="form-select"
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
                <label for="FormControlInput1" class="form-label">Translator</label>
                <select
                  class="form-select"
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

                <button className="btn btn-outline-success my-2 custom-blue-button" type="submit">Add Novel</button>
            </form>
          </div>
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
