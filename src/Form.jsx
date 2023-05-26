import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const Form = () => {

    const [question, setQuestion] = useState('Question')
    const [yes, setYes] = useState("Yes")
    const [no, setNo] = useState("No")

    return (
        <form action="">
            <div className="question-section">
                <label htmlFor="question">Enter your question <span>*</span> </label>
                <input type="text" placeholder='Type the question to display' id='question' />
            </div>
            <div className="situations">
                <div className="situation">
                    <label htmlFor="YesText">
                        <p>Affirmative situation</p>
                        <p>(static)</p>
                    </label>
                    <input type="text" id="YesText" placeholder="Yes" autoComplete="off" />
                    <div className="file-section">
                        <label htmlFor="YesImage">Upload an image</label>
                        <input type="file" id="YesImage" />
                        <i title="They'll see this picture when Yes is clicked" className="fas fa-info-circle"></i>
                    </div>
                </div>
                <div className="situation">
                    <label htmlFor="NoText">
                        <p>Negative situation</p>
                        <p>(moving)</p>
                    </label>
                    <input type="text" id="NoText" placeholder="No" autoComplete="off" />
                    <div className="file-section">
                        <label htmlFor="NoImage">Upload an image</label>
                        <input type="file" id="NoImage" />
                        <i title="They'll see this picture when No is clicked" className="fas fa-info-circle"></i>
                    </div>
                </div>
            </div>
            <Link to='/question' className="submit">Generate</Link>
        </form>
    )
}
