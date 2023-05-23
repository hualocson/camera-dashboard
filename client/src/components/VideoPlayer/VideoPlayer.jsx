import React, { useEffect, useRef, useState } from 'react';

import PropTypes from 'prop-types';

import styles from './index.module.css';

function VideoPlayer({ videoId }) {
  const [videoUrl, setVideoUrl] = useState(null);
  const [storedVideoUrl, setStoredVideoUrl] = useState(null);
  const videoRef = useRef(null);

  useEffect(() => {
    let isMounted = true;

    const fetchVideo = async () => {
      try {
        const storedUrl = localStorage.getItem(`videoUrl_${videoId}`);
        if (storedUrl) {
          setVideoUrl(storedUrl);
          setStoredVideoUrl(storedUrl);
          return;
        }

        const response = await fetch(
          `https://camera-dashboard-be.onrender.com/api/videos/${videoId}`,
          {
            headers: {
              range: 'bytes=0-',
            },
          },
        );

        if (response.ok && isMounted) {
          const videoBlob = await response.blob();
          const v = URL.createObjectURL(videoBlob);
          setVideoUrl(v);
          setStoredVideoUrl(v);
          localStorage.setItem(`videoUrl_${videoId}`, v);
        } else {
          console.error(
            'Failed to fetch video:',
            response.status,
            response.statusText,
          );
        }
      } catch (error) {
        console.error('Error while fetching video:', error);
      }
    };

    if (videoId && !videoUrl && isMounted) {
      fetchVideo();
    }

    return () => {
      isMounted = false;
      if (storedVideoUrl) {
        URL.revokeObjectURL(storedVideoUrl);
      }
    };
  }, [videoId]);

  useEffect(() => {
    const handleBeforeUnload = () => {
      if (videoUrl) {
        URL.revokeObjectURL(videoUrl);
        localStorage.removeItem(`videoUrl_${videoId}`);
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [videoId, videoUrl]);

  return (
    <video ref={videoRef} muted autoPlay loop className={styles.CameraItem}>
      {videoUrl ? (
        <source src={videoUrl} type="video/mp4" />
      ) : (
        'Your browser does not support the video tag.'
      )}
    </video>
  );
}

VideoPlayer.propTypes = {
  videoId: PropTypes.string.isRequired,
};

export default VideoPlayer;
