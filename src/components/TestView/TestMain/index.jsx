// src/components/TestView/TestMain.jsx
import styles from "./styles.module.scss";
import TestForm from "../TestForm";
import TestNextButton from "../TestNextButton";

export default function TestMain({ question, index, total, answer, onSelect, onNext }) {
    return (
        <main className={styles.main}>
            <div className={styles.mainContent}>
                <div className={styles.progress}>
                    <span className={styles.progressText}>{index + 1}/{total}</span>
                </div>

                <TestForm
                    question={question}
                    answer={answer}
                    onSelect={onSelect}
                />
            </div>

            <TestNextButton
                index={index}
                total={total}
                onNext={onNext}
                disabled={answer === undefined}
            />
        </main>
    );
}
