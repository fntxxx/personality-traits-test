// src/components/TestView/TestHeader.jsx
import styles from "./styles.module.scss";

export default function TestHeader({ question, index, total, onPrev }) {
    return (
        <header className={styles.header}>
            <button className={styles.backButton} onClick={onPrev}>
                <span className={`material-symbols-outlined ${styles.backButtonIcon}`}>
                    arrow_back
                </span>
            </button>
            <div className={styles.intro}>
                <div className={styles.question}>
                    <span className={styles.questionMark} aria-hidden="true">Q</span>
                    <h2 className={styles.questionText}>{question.problem}</h2>
                </div>
                <div className={styles.title}>
                    <p className={styles.titleMain}>五大性格特質心理測驗</p>
                    <p className={styles.titleSub}>Big Five personality traits test</p>
                </div>
            </div>
        </header>
    );
}
