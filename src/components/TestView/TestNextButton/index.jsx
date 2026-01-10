// src/components/TestView/TestNextButton.jsx
import styles from "./styles.module.scss";
import ArrowForwardIcon from "../../../assets/icons/arrow-forward-white.svg";

export default function TestNextButton({ index, total, onNext, disabled }) {
    return (
        <button
            type="button"
            className={styles.nextButton}
            onClick={onNext}
            disabled={disabled}
        >
            <span className={styles.nextButtonText}>
                {index === total - 1 ? "計算結果" : "下一題"}
            </span>
            <img
                src={ArrowForwardIcon}
                alt=""
                aria-hidden="true"
                className={styles.nextButtonIcon}
            />
        </button>
    );
}
