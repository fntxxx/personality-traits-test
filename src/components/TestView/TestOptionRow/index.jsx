// src/components/TestView/TestOptionRow.jsx
import styles from "./styles.module.scss";

export default function TestOptionRow({ questionId, option, answer, onSelect }) {
    const sentences = option.description.split("。"); // 以中文句號拆
    const firstSentence = sentences[0] + (sentences[0] ? "。" : "");
    const rest = sentences.slice(1).join("");

    return (
        <div className={styles.optionRow}>
            <input
                type="radio"
                name={questionId}
                id={`${questionId}-${option.fraction}`}
                value={option.fraction}
                checked={answer === option.fraction}
                onChange={() => onSelect(option.fraction)}
            />
            <label
                htmlFor={`${questionId}-${option.fraction}`}
                className={styles.optionText}
            >
                <span>
                    <span className={styles.optionPrefix}>{firstSentence}</span>
                    {rest && <span>{rest}</span>}
                </span>
            </label>
        </div>
    );
}