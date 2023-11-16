import styles from './Profile.module.css';
import { ThemeContext } from '../context/Context';
import { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import useLocalStorage from '../functions/useLocalStorage';

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

  const [localFullName, setLocalFullName] = useLocalStorage('fullName', fullName.value);
  const [localUserName, setLocalUserName] = useLocalStorage('userName', userName.value);

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
  }, []);

  const handleShowInput = (_val, _callback) => {
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
    }

    _callbackStorage(value);
  };

  return (
    <>
      <main className={`${styles.profile} ${theme ? styles.dark : ''}`}>
        <h1>Profil</h1>
        <section className={`${styles.flexcontainer}`}>
          <img src="../img/profile.png" alt="Profilbild" />
          <article>
            <div className={styles.name}>
              <h4>Name:</h4>
              <div>
                {fullName.isInput ? (
                  <input
                    className={styles.input}
                    type="text"
                    value={fullName.value}
                    onChange={(e) => handleShowInput(e.target.value, setFullName)}
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
                    onChange={(e) => handleShowInput(e.target.value, setUserName)}
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
          <input className={`${styles.input}`} type="text" name="input" />
        </div>

        <div className={`${styles.icon}`}>
          <a target="_blank" href="https://icons8.com/icon/107049/konto-testen">
            Profilbild
          </a>
          <p> Icon von </p>
          <a target="_blank" href="https://icons8.com">
            Icons8
          </a>
        </div>
        {children}
      </main>
    </>
  );
};

export default Profile;
