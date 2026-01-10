// src/components/TestView/index.jsx
import styles from "./styles.module.scss";
import TestHeader from "./TestHeader";
import TestMain from "./TestMain";

export default function TestView({ question, index, total, answer, onAnswer, onNext, onPrev }) {
    const handleSelect = (value) => {
        onAnswer(question.id, Number(value));
    };

    return (
        <div className={styles.container}>
            <TestHeader question={question} index={index} total={total} onPrev={onPrev} />
            <TestMain
                question={question}
                index={index}
                total={total}
                answer={answer}
                onSelect={handleSelect}
                onNext={onNext}
            />
        </div>
    );
}
