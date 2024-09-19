// components/VideoPlayer.tsx
import React from 'react';

interface VideoPlayerProps {
  src: string;
  type?: string;
  controls?: boolean;
  poster?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src, type = 'video/mp4', controls = true, poster }) => {
  return (
    <div className="video-container">
      <video 
        controls={controls} 
        poster={poster} 
        className="w-full h-auto"
      >
        <source src={src} type={type} />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
