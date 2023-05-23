import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { actionGetAllCameras, actionGetCountProfile } from 'store/actions';

import VideoPlayer from 'components/VideoPlayer/VideoPlayer';

import styles from './index.module.css';

function HomePage() {
  const dispatch = useDispatch();
  const cameras = useSelector((state) => state.Cameras.cameras);
  const countProfile = useSelector((state) => state.Users.countProfile);

  useEffect(() => {
    dispatch(actionGetAllCameras());
    dispatch(actionGetCountProfile());
  }, []);

  return (
    <div className={styles.Container}>
      <div className={styles.ContainerDescription}>
        <div className={styles.DescriptionItem}>
          <p className={styles.Title}>Tổng Camera</p>

          <p className={styles.Number}>{cameras.length ? cameras.length : 0}</p>
        </div>

        <div className={styles.DescriptionItem}>
          <p className={styles.Title}>Tổng số Profile</p>

          <p className={styles.Number}>{countProfile}</p>
        </div>
      </div>

      <div className={styles.ContainerCamera}>
        {/* {cameras ? (
          cameras.map((camera) => (
            camera.connection ? (
              {/* <video muted autoPlay className={styles.CameraItem} key={camera._id}>
                <source src={`https://camera-dashboard-be.onrender.com/api/videos/${camera.videoId}`} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <VideoPlayer videoId={camera.videoId} />
            ) : <div key={camera._id} className={styles.CameraItem} />
          ))

        ) : <div className={styles.CameraItem} />}
        */}
        {
          cameras ? (
            cameras.map((camera) => (
              camera.connection ? (
                <VideoPlayer
                  videoId={camera.videoId}
                  className={styles.CameraItem}
                  key={camera._id}
                />
              ) : <div key={camera._id} className={styles.CameraItem} />
            ))
          ) : (
            <div className={styles.CameraItem} />
          )
        }
      </div>
    </div>
  );
}

export default HomePage;
