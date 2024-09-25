import React, { useEffect, useRef } from 'react';
import Plyr from 'plyr';
import 'plyr/dist/plyr.css';

interface VideoEmbedProps {
  url: string;
}

const VideoEmbed: React.FC<VideoEmbedProps> = ({ url }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const playerRef = useRef<Plyr | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      playerRef.current = new Plyr(videoRef.current, {
        controls: ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'captions', 'settings', 'pip', 'airplay', 'fullscreen'],
        settings: ['captions', 'quality', 'speed'],
        tooltips: { controls: true, seek: true },
        captions: { active: true, language: 'auto', update: true }
      });
    }

    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
      }
    };
  }, []);

  const isLoomVideo = url.includes('loom.com');

  if (isLoomVideo) {
    const videoId = url.split('/').pop()?.split('?')[0];
    return (
      <div style={{ position: 'relative', paddingBottom: '62.5%', height: 0 }}>
        <iframe
          src={`https://www.loom.com/embed/${videoId}`}
          allowFullScreen
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
        ></iframe>
      </div>
    );
  }

  return (
    <video ref={videoRef} className="w-full">
      <source src={url} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoEmbed;