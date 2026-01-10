import styles from "./styles.module.scss";

export default function HomeIntro({ description, onStart }) {
    return (
        <div className={styles.intro}>
            <p className={styles.introDesc}>{description}</p>
            <button type="button" className={styles.startButton} onClick={onStart}>
                <span className={styles.startButtonText}>開始測驗</span>
                <span className={`material-symbols-outlined ${styles.startButtonIcon}`}>
                    arrow_forward
                </span>
            </button>
        </div>
    );
}