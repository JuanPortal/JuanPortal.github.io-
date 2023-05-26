import React from 'react'

export const Question = () => {
    const movingButton = ({ target }) => {
        target.style.top = `${Math.floor(Math.random() * 80)}%`
        target.style.left = `${Math.floor(Math.random() * 80)}%`
        console.log(`top: ${target.style.top}    left: ${target.style.left}`);
    }

    return (
        <section className='question'>
            <h3>Question</h3>
            <div className="fun-area">
                <div className='button'>Yes</div>
                <div onClick={movingButton} onMouseOver={movingButton} className='button'>No</div>
            </div>
        </section>
    )
}
