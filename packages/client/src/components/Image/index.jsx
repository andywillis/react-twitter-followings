import dummyImg from './dummy.png';

import styles from './index.module.css';

function Image({ alt, src }) {

  return (
    <div className={styles.img}>
      <img
        alt={alt}
        src={src}
        onError={function (e) { e.target.src = dummyImg; }}
      />
    </div>
  );

}

export default Image;
