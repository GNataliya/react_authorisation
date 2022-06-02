import loading from './Spinner.gif';
import style from './style.module.scss';

function Loading() {

  return (
    <div className={style.loading}>
      <img src={loading} alt="loading..." className={style.loading}  />
    </div>
  );
};

export default Loading;