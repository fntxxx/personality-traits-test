// src/components/Question/index.jsx
import { useEffect } from "react";
import styles from "./Question.module.scss";

export default function Question({
    question,
    index,
    total,
    answer,
    onAnswer,
    onNext,
    onPrev
}) {
    const handleSelect = (value) => {
        onAnswer(question.id, Number(value));
    };

    useEffect(() => {
        console.log(question);
    }, [question])

    return (
        <div className={styles.container}>
            <header className={styles.intro}>
                <button className={styles.backButton} onClick={onPrev}>
                    <span
                        className={`material-symbols-outlined ${styles.backButtonIcon}`}
                    >
                        arrow_back
                    </span>
                </button>
                <div className={styles.question}>
                    <span className={styles.questionMark} aria-hidden="true">Q</span>
                    <h2 className={styles.questionText}>{question.problem}</h2>
                </div>
                <div className={styles.title}>
                    <p className={styles.titleMain}>五大性格特質心理測驗</p>
                    <p className={styles.titleSub}>Big Five personality traits test</p>
                </div>
            </header>
            <main className={styles.main}>
                <div className={styles.mainContent}>
                    <div className={styles.progress}>
                        <span className={styles.progressText}>{index + 1}/{total}</span>
                    </div>

                    <form className={styles.form}>
                        {question.options.map(option => {
                            const sentences = option.description.split("。"); // 以中文句號拆
                            const firstSentence = sentences[0] + (sentences[0] ? "。" : "");
                            const rest = sentences.slice(1).join("");

                            return (
                                <div key={option.fraction} className={styles.optionRow}>
                                    <input
                                        type="radio"
                                        name={question.id}
                                        id={`${question.id}-${option.fraction}`}
                                        value={option.fraction}
                                        checked={answer === option.fraction}
                                        onChange={() => handleSelect(option.fraction)}
                                    />
                                    <label
                                        htmlFor={`${question.id}-${option.fraction}`}
                                        className={styles.optionText}
                                    >
                                        <span>
                                            <span className={styles.optionPrefix}>{firstSentence}</span>
                                            {rest && <span>{rest}</span>}
                                        </span>
                                    </label>
                                </div>
                            )
                        })}
                    </form>
                </div>

                <button
                    type="button"
                    className={styles.nextButton}
                    onClick={onNext}
                    disabled={answer === undefined}
                >
                    <span className={styles.nextButtonText}>
                        {index === total - 1 ? "計算結果" : "下一題"}
                    </span>
                    <span
                        className={`material-symbols-outlined ${styles.nextButtonIcon}`}
                    >
                        arrow_forward
                    </span>
                </button>
            </main>
        </div >
    );
}
