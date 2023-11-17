import styles from './Profile.module.css';
import { ThemeContext } from '../context/Context';
import { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import useLocalStorage from '../functions/useLocalStorage';

const randomImage = 'https://i.pravatar.cc/100';
const defaultImage = 'img/profile.png';

const Profile = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  const [fullName, setFullName] = useState({
    isInput: false,
    value: 'Max Mustermann',
  });
  const [userName, setUserName] = useState({
    isInput: false,
    value: 'MaxTasty123',
  });

  const [favoriteFood, setFavoriteFood] = useState({
    isInput: false,
    value: '',
  });

  const [image, setImage] = useState(defaultImage);

  const [localFullName, setLocalFullName] = useLocalStorage('fullName', fullName.value);
  const [localUserName, setLocalUserName] = useLocalStorage('userName', userName.value);
  const [localFavoriteFood, setLocalFavoriteFood] = useLocalStorage(
    'favoriteFood',
    favoriteFood.value
  );
  const [localProfileImage, setLocalProfileImage] = useLocalStorage('profileImage', image);

  useEffect(() => {
    if (localFullName && localFullName !== fullName.value) {
      setFullName({
        isInput: false,
        value: localFullName,
      });
    }
    if (localUserName && localUserName !== userName.value) {
      setUserName({
        isInput: false,
        value: localUserName,
      });
    }

    if (localFavoriteFood && localFavoriteFood !== favoriteFood.value) {
      setFavoriteFood({
        isInput: false,
        value: localFavoriteFood,
      });
    }

    if (localProfileImage && localProfileImage !== image) {
      setImage(localProfileImage);
    }
  }, []);

  const handleShowInput = (_val, _callback, maxLength) => {
    if (_val.length > maxLength) {
      return;
    }

    _callback({
      isInput: true,
      value: _val,
    });
  };

  const handleKeyPress = (e, _callback, value, _callbackStorage) => {
    if (e.key === 'Enter' || e === 'blur') {
      _callback({
        isInput: false,
        value: value,
      });
      _callbackStorage(value);
    }
  };

  const handleNewImage = () => {
    const newImage = `${randomImage}?u=${Math.floor(Math.random() * 10000) + 1}`;
    setImage(newImage);
    setLocalProfileImage(newImage);
  };

  return (
    <>
      <main className={`${styles.profile} ${theme ? styles.dark : ''}`}>
        <h1>Profil</h1>
        <section className={`${styles.flexcontainer}`}>
          <img
            className={styles.profile_image}
            src={image}
            alt="Profilbild"
            onClick={handleNewImage}
          />
          <article>
            <div className={styles.name}>
              <h4>Name:</h4>
              <div>
                {fullName.isInput ? (
                  <input
                    className={styles.input}
                    type="text"
                    value={fullName.value}
                    onChange={(e) => handleShowInput(e.target.value, setFullName, 18)}
                    onKeyUp={(e) =>
                      handleKeyPress(e, setFullName, fullName.value, setLocalFullName)
                    }
                    onBlur={() =>
                      handleKeyPress('blur', setFullName, fullName.value, setLocalFullName)
                    }
                    autoFocus
                  />
                ) : (
                  <>
                    <p>{fullName.value}</p>
                    <FontAwesomeIcon
                      icon={faPen}
                      style={{ color: '#93969a' }}
                      onClick={() =>
                        setFullName({
                          isInput: true,
                          value: fullName.value,
                        })
                      }
                    />
                  </>
                )}
              </div>
            </div>
            <div className={styles.name}>
              <h4>Username:</h4>
              <div>
                {userName.isInput ? (
                  <input
                    className={styles.input}
                    type="text"
                    value={userName.value}
                    onChange={(e) => handleShowInput(e.target.value, setUserName, 18)}
                    onKeyUp={(e) =>
                      handleKeyPress(e, setUserName, userName.value, setLocalUserName)
                    }
                    onBlur={() =>
                      handleKeyPress('blur', setUserName, userName.value, setLocalUserName)
                    }
                    autoFocus
                  />
                ) : (
                  <>
                    <p>{userName.value}</p>
                    <FontAwesomeIcon
                      icon={faPen}
                      style={{ color: '#93969a' }}
                      onClick={() =>
                        setUserName({
                          isInput: true,
                          value: userName.value,
                        })
                      }
                    />
                  </>
                )}
              </div>
            </div>
          </article>
        </section>
        <div className={`${styles.inputcontainer}`}>
          <label htmlFor="input">Das esse ich am liebsten:</label>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            className={`${styles.input}`}
            value={favoriteFood.value}
            onChange={(e) => handleShowInput(e.target.value, setFavoriteFood, 150)}
            disabled={!favoriteFood.isInput}
            autoFocus
          ></textarea>
          <button
            onClick={() => {
              if (favoriteFood.isInput) {
                setLocalFavoriteFood(favoriteFood.value);
              }

              setFavoriteFood({
                isInput: !favoriteFood.isInput,
                value: favoriteFood.value,
              });
            }}
          >
            {favoriteFood.isInput ? 'SAVE' : 'EDIT'}
          </button>
        </div>

        <div className={`${styles.icon}`}>
          <a target="_blank" href="https://icons8.com/icon/107049/konto-testen" rel="noreferrer">
            Profilbild
          </a>
          <p> Icon von </p>
          <a target="_blank" href="https://icons8.com" rel="noreferrer">
            Icons8
          </a>
          <p> und </p>
          <a target="_blank" href="https://i.pravatar.cc" rel="noreferrer">
            Pravatar
          </a>
        </div>
        {children}
      </main>
    </>
  );
};

export default Profile;
