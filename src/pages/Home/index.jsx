import styles from './Home.module.scss'
import bgImage from '../../assets/images/main-bg.avif';

export default function Home({ meta }) {
    return (
        <div className={styles.container}>
            <div
                className={styles.bg}
                style={{ backgroundImage: `url(${bgImage})` }}
            >
            </div>
            <div className={styles.inner}>
                <div className={styles.content}>
                    <h1 className={styles.title}>
                        <span className={styles.titleMain}>{meta.name.zh}</span>
                        <span className={styles.titleSub}>{meta.name.en}</span>
                    </h1>
                    <div className={styles.description}>
                        <p className={styles.descriptionText}>
                            {meta.description}
                        </p>

                        <a href="#" className={styles.startButton}>
                            <span className={styles.startButtonText}>開始測驗</span>
                            <span
                                className={`material-symbols-outlined ${styles.startButtonIcon}`}
                            >
                                arrow_forward
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}