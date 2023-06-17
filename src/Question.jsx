import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

export const Question = () => {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const question = params.get('question');
    const yes = params.get('yes');
    const no = params.get('no');

    const movingButton = ({ target }) => {
        target.style.top = `${Math.floor(Math.random() * 80)}%`
        target.style.left = `${Math.floor(Math.random() * 80)}%`
        console.log(`top: ${target.style.top}    left: ${target.style.left}`)
    }

    const [funAreaVisibility, setFunAreaVisibility] = useState('')
    const [yesAreaVisibility, setYesAreaVisibility] = useState('hidden')

    const onYesClick = () => {
        setFunAreaVisibility('hidden')
        setYesAreaVisibility('')
    }

    return (
        <section className='question'>
            <h3>{question}</h3>
            <div className="areas">
                <div className={`fun-area ${funAreaVisibility}`}>
                    <div onClick={onYesClick} className='button'>{yes || "Yes"}</div>
                    <div onClick={movingButton} onMouseOver={movingButton} className='button'>{no || "No"}</div>
                </div>

                <div className={`yes-area ${yesAreaVisibility}`}>
                    <img src="https://firebasestorage.googleapis.com/v0/b/tricky-question.appspot.com/o/yes.webp?alt=media&token=fbf1d76d-6921-4cf1-838c-442455d7c8c3" alt="suprised monkey meme" title='suprised monkey meme'/>
                </div>
            </div>
        </section>
    )
}
