import React from 'react'
import video from '../assets/web_video.mp4'

export const Video = () => {
  return (
    <div className='video-container'>
        <video autoPlay loop muted title='Video of the preview of the page'>
            <source src={video}></source>
        </video>
    </div>
  )
}
