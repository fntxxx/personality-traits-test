import styles from "./styles.module.scss";

export default function ResultActions({
    traits,
    currentIndex,
    total,
    onNext,
    onRestart
}) {
    const isLast = currentIndex === total - 1;
    const nextTrait = traits[currentIndex + 1];

    return (
        <div className={styles.actions}>
            {isLast ? (
                <button
                    className={styles.restart}
                    onClick={onRestart}
                >
                    <span className={styles.text}>重新測驗</span>
                    <span
                        className={`material-symbols-outlined ${styles.restartIcon}`}
                    >
                        arrow_forward
                    </span>
                </button>
            ) : (
                <button
                    className={styles.next}
                    onClick={onNext}
                >
                    下一個：
                    <span className={styles.text}>{nextTrait.name}</span>
                    <span
                        className={`material-symbols-outlined ${styles.nextIcon}`}
                    >
                        arrow_forward
                    </span>
                </button>
            )}
        </div>
    );
}