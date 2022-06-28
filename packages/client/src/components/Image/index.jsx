import dummyImg from './dummy.png';

import styles from './index.module.css';

function Image({ alt, src, handleImageLoad }) {

  function handleError(e) {
    e.target.src = dummyImg;
  }

  return (
    <div className={styles.img}>
      <img
        alt={alt}
        src={src}
        onLoad={handleImageLoad}
        onError={handleError}
      />
    </div>
  );

}

export default Image;
