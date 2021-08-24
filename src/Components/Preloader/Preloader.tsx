import preloader from '../../assets/images/preloader.gif';
import s from './Preloader.module.css';

const Preloader = () => {
    return (
        <img className={s.preloaderImage} src={preloader} alt="preloader" />
    )
}

export default Preloader;