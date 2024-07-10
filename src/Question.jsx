import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShare } from '@fortawesome/free-solid-svg-icons';

export const Question = () => {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    
    const question = params.get('question') || '';
    const yes = params.get('yes') || '';
    const no = params.get('no') || '';
    const imageUrl = params.get('imageUrl') || '';

    const handleSharing = () => {
        navigator.clipboard.writeText(window.location.href)
        alert('URL copied to the clipboard!')
    }

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
      <h3>{question || "Question"}</h3>
      <div className="areas">
          <div className={`fun-area ${funAreaVisibility}`}>
              <div onClick={onYesClick} className='button'>{yes || "Yes"}</div>
              <div onClick={movingButton} onMouseOver={movingButton} className='button'>{no || "No"}</div>
          </div>

          <div className={`yes-area ${yesAreaVisibility}`}>
            {imageUrl ? (
              <img src={imageUrl} alt="Uploaded" />
            ) : (
              <img src='https://firebasestorage.googleapis.com/v0/b/tricky-question.appspot.com/o/yes.webp?alt=media&token=fbf1d76d-6921-4cf1-838c-442455d7c8c3' alt="Default" />
            )}
          </div>
      </div>
      <div onClick={handleSharing} className="share">Share it with your friends! <FontAwesomeIcon icon={faShare} /></div>
  </section>
  )
}