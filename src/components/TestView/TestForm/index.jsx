// src/components/TestView/TestForm.jsx
import TestOptionRow from "../TestOptionRow";
import styles from "./styles.module.scss";

export default function TestForm({ question, answer, onSelect }) {
    return (
        <form className={styles.form}>
            {question.options.map(option => (
                <TestOptionRow
                    key={option.fraction}
                    questionId={question.id}
                    option={option}
                    answer={answer}
                    onSelect={onSelect}
                />
            ))}
        </form>
    );
}
