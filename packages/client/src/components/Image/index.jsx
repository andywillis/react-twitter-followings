import dummyImg from './dummy.png';

import styles from './index.module.css';

function Image({ alt, src, handleImageLoad }) {

  function handleError(e) {
    e.target.src = dummyImg;
  }

  return (
    <div className={styles.img}>
      <img
        width="48px"
        height="48px"
        alt={alt}
        src={src}
        onLoad={handleImageLoad}
        onError={handleError}
      />
    </div>
  );

}

export default Image;
