import React from 'react';
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

    return (
        <section className='question'>
            <h3>{question}</h3>
            <div className="fun-area">
                <div className='button'>{yes || "Yes"}</div>
                <div onClick={movingButton} onMouseOver={movingButton} className='button'>{no || "No"}</div>
            </div>
        </section>
    )
}
