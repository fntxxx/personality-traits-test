import styles from "./styles.module.scss";
import ArrowForwardBlueIcon from "../../../assets/icons/arrow-forward-blue.svg";
import ArrowForwardBlackIcon from "../../../assets/icons/arrow-forward-black.svg";

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
                    <img
                        src={ArrowForwardBlackIcon}
                        alt=""
                        aria-hidden="true"
                        className={styles.restartIcon}
                    />
                </button>
            ) : (
                <button
                    className={styles.next}
                    onClick={onNext}
                >
                    下一個：
                    <span className={styles.text}>{nextTrait.name}</span>
                    <img
                        src={ArrowForwardBlueIcon}
                        alt=""
                        aria-hidden="true"
                        className={styles.nextIcon}
                    />
                </button>
            )}
        </div>
    );
}