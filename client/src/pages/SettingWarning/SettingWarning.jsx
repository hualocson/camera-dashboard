import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { actionAddWarning, actionGetAllLocations, actionGetAllUsers } from 'store/actions';

import DropButton from 'assets/Icons/DropButton.png';
import Person from 'assets/Images/missingperson1.png';
import Meco from 'assets/Images/meco_office.png';

import { toast } from 'react-toastify';
import styles from './index.module.css';

function SettingWarning() {
  const dispatch = useDispatch();
  const profiles = useSelector((state) => state.Users.users);
  const locations = useSelector((state) => state.Locations.locations);

  const [name, setName] = useState('');
  const [selectedValue, setSelectedValue] = useState('High');
  const [selectedArea, setSelectedArea] = useState('');
  const [selectedFace, setSelectedFace] = useState('');
  const [selectedCamera, setSelectedCamera] = useState('');

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAreaChange = (event) => {
    setSelectedArea(event.target.value);
  };

  const handleFaceChange = (event) => {
    setSelectedFace(event.target.value);
  };

  const handleCameraChange = (event) => {
    setSelectedCamera(event.target.value);
  };

  const handleAddWarning = () => {
    if (name !== '' && selectedArea !== '' && selectedCamera !== '' && selectedValue !== '') {
      dispatch(
        actionAddWarning({
          content: name,
          location: selectedArea,
          serial: selectedCamera,
          securityLevel: selectedValue,
          playback: '/',
        }),
      );
    } else {
      toast.error('Please select all value');
    }
  };

  useEffect(() => {
    dispatch(actionGetAllLocations());
    dispatch(actionGetAllUsers());
  }, []);

  return (
    <>
      <p>Cài đặt</p>

      <div className={styles.ContainerInfo}>
        <p>Tên cảnh báo:</p>

        <input
          className={styles.InputNameWarning}
          type="text"
          placeholder="Cảnh báo 1"
          value={name}
          onChange={handleNameChange}
        />
      </div>

      <div className={styles.ContainerSetting}>
        <div className={styles.Header}>
          <p>Cảnh báo theo thời gian</p>

          <img src={DropButton} alt="DropButton" />
        </div>

        <div className={styles.Center}>
          <p className={styles.CenterTitle}>Khung thời gian cảnh báo</p>

          <span>Từ</span>
          <input type="text" />

          <span>Đến</span>
          <input type="text" />

          <span>Mức độ cảnh báo</span>
          <select
            className={styles.Select}
            onChange={handleSelectChange}
            value={selectedValue}
          >
            <option value="High">High</option>

            <option value="Medium">Medium</option>

            <option value="Low">Low</option>
          </select>
        </div>
      </div>

      <div className={styles.ContainerSetting}>
        <div className={styles.Header}>
          <p>Cảnh báo theo khuôn mặt</p>

          <img src={DropButton} alt="DropButton" />
        </div>

        <div className={styles.Center2}>
          <p className={styles.CenterTitle}>Chọn khuôn mặt được dùng để cảnh báo:</p>
          <select
            className={styles.Select}
            onChange={handleFaceChange}
            value={selectedFace}
          >
            {profiles.map((profile) => (
              <option key={profile._id} value={profile.username}>
                {profile.username}
              </option>
            ))}
          </select>
          <img className={styles.ImgPerson} src={Person} alt="person" />
        </div>
      </div>

      <div className={styles.ContainerSetting}>
        <div className={styles.Header}>
          <p>Cảnh báo theo khu vực</p>

          <img src={DropButton} alt="DropButton" />
        </div>

        <div className={styles.Center3}>
          <div>
            <p className={styles.CenterTitle}>Chọn khu vực để cảnh báo:</p>
            <select
              className={styles.Select}
              onChange={handleAreaChange}
              value={selectedArea}
            >
              <option key="default">
                Location
              </option>
              {locations.map((location) => (
                <option key={location._id} value={location.id}>
                  {location.id}
                </option>
              ))}
            </select>

            <p className={styles.CenterTitle}>Chọn camera để cảnh báo:</p>
            <select
              className={styles.Select}
              onChange={handleCameraChange}
              value={selectedCamera}
            >
              {locations
                .find((location) => location.id === selectedArea)
                ?.serial.split(',')
                .map((serialValue) => (
                  <option key={serialValue} value={serialValue}>
                    {serialValue}
                  </option>
                ))}
            </select>
          </div>

          <img className={styles.ImgWarning} src={Meco} alt="person" />
        </div>
      </div>

      <div className={styles.ContainerButton}>
        <button type="button" className={styles.Button}>
          Cancel
        </button>

        <button type="button" onClick={handleAddWarning} className={styles.Button}>
          Save
        </button>
      </div>
    </>
  );
}

export default SettingWarning;
