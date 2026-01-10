import styles from "./styles.module.scss";
import ArrowForwardIcon from "../../../assets/icons/arrow-forward-white.svg";

export default function HomeIntro({ description, onStart }) {
    return (
        <div className={styles.intro}>
            <p className={styles.introDesc}>{description}</p>
            <button type="button" className={styles.startButton} onClick={onStart}>
                <span className={styles.startButtonText}>開始測驗</span>
                <img
                    src={ArrowForwardIcon}
                    alt=""
                    aria-hidden="true"
                    className={styles.startButtonIcon}
                />
            </button>
        </div>
    );
}