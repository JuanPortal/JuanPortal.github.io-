import React from 'react'
import video from '../assets/web_video.mp4'

export const Video = () => {
  return (
    <div className='video-container'>
        <video autoPlay loop muted>
            <source src={video}></source>
        </video>
    </div>
  )
}
