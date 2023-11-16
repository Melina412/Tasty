import PropTypes from 'prop-types';
import styles from './VideoPlayer.module.css';

const VideoPlayer = ({ youtubeLink, onHandleSetIsShownVideo }) => {
  const getYouTubeId = (youtubeLink) => {
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = youtubeLink.match(regExp);
    return match && match[7].length == 11 ? match[7] : false;
  };

  return (
    <section className={styles.video_section}>
      <div className={styles.close} onClick={onHandleSetIsShownVideo}>
        x
      </div>
      <iframe
        className={styles.video_player}
        src={`https://www.youtube.com/embed/${getYouTubeId(youtubeLink)}?autoplay=1&mute=1`}
      ></iframe>
    </section>
  );
};

VideoPlayer.propTypes = {
  youtubeLink: PropTypes.string,
  onHandleSetIsShownVideo: PropTypes.func,
};

export default VideoPlayer;
