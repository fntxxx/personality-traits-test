import styles from './Home.module.scss'
import bgImage from '../../assets/images/main-bg.avif';

export default function Home() {
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
                        <span className={styles.titleMain}>五大性格特質</span>
                        <span className={styles.titleMain}>心理測驗</span>
                        <span className={styles.titleSub}>Big Five personality traits test</span>
                    </h1>
                    <div className={styles.description}>
                        <p className={styles.descriptionText}>
                            五大性格特質（Big Five personality traits）在心理學中常被作為人格的評估，有時也會用來預測學業成就、以及作為適合職業的參考。此理論認為人的主要性格由五項人格特質組成：經驗開放性、盡責性、外向性、親和性、情緒不穩定性。
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