import React from 'react'

export const Video = () => {
  return (
    <div className='video-container'>
        <video autoPlay loop muted title='Video of the preview of the page'>
            <source src="https://firebasestorage.googleapis.com/v0/b/tricky-question.appspot.com/o/web_video.mp4?alt=media&token=8c3bc2fb-0304-44a0-937f-e64615c7427d"></source>
        </video>
    </div>
  )
}
