import React from 'react'

export const Video = () => {
  return (
    <div className='video-container'>
        <video autoPlay loop muted>
            <source src="/assets/web_video.mp4"></source>
        </video>
    </div>
  )
}
