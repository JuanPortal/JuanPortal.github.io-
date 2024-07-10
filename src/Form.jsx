import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const Form = () => {

    const [question, setQuestion] = useState('')
    const [yes, setYes] = useState('');
    const [no, setNo] = useState('')
    const [uploadedImage, setUploadedImage] = useState(null);

    const onQuestionInputChange = ({ target }) => setQuestion(target.value);
    const onYesInputChange = ({ target }) => setYes(target.value);
    const onNoInputChange = ({ target }) => setNo(target.value);

    const isQuestionEmpty = question.trim() === '';

    const [opacity, setOpacity] = useState('invisibleOpacity')
    const [fileName, setFileName] = useState('')

    const onFileUpload = (e) => {
        setOpacity('visibleOpacity')
        setFileName(e.target.files[0].name)

        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setUploadedImage(reader.result);
        };
        if (file) {
            reader.readAsDataURL(file);
        }
    }

    

    return (
        <form>
            <div className="question-section">
                <label htmlFor="question">Enter your question <span>*</span> </label>
                <input onChange={onQuestionInputChange} value={question} type="text" required placeholder='Type the question to display' id='question' autoComplete="off" />
            </div>

            <div className="situations">
                <div className="situation">
                    <label htmlFor="YesText">
                        <p>Affirmative situation</p>
                        <p>(static)</p>
                    </label>
                    <input onChange={onYesInputChange} value={yes} type="text" id="YesText" placeholder="Yes" autoComplete="off" />
                    <div className="file-section">
                        <label htmlFor="YesImage">Upload an image</label>
                        <input onChange={onFileUpload} type="file" id="YesImage" accept="image/png, image/jpeg, image/jpg" />
                        <i title="They'll see this picture when Yes is clicked" className="fas fa-info-circle"></i>
                    </div>
                    <span className={opacity}>{fileName}</span>
                </div>

                <div className="situation">
                    <label htmlFor="NoText">
                        <p>Negative situation</p>
                        <p>(moving)</p>
                    </label>
                    <input onChange={onNoInputChange} value={no} type="text" id="NoText" placeholder="No" autoComplete="off" />
                    <div className="file-section">
                        {/* <label htmlFor="NoImage">Upload an image</label> */}
                        <label>Upload an image</label>
                        <input type="file" id="NoImage" />
                        {/* <i title="They'll see this picture when No is clicked" className="fas fa-info-circle"></i> */}
                        <i className="fas fa-info-circle"></i>
                    </div>
                    <span className='invisibleOpacity'>File name</span>
                </div>
            </div>

            {
                isQuestionEmpty ? 
                (<button className="submit unavailable" disabled>Generate</button>) : 
                (<Link className="submit" to={`/question?question=${question}&yes=${yes}&no=${no}&image=${encodeURIComponent(uploadedImage)}`}>Generate</Link>)
            }
        </form>
    )
}
