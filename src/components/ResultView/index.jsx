import ResultHeader from "./ResultHeader";
import ResultBody from "./ResultBody";
import styles from "./styles.module.scss";

export default function ResultView({
    traits,
    currentIndex,
    currentTrait,
    onChangeIndex,
    onRestart,
}) {
    return (
        <div className={styles.container}>
            <ResultHeader
                trait={currentTrait}
                traits={traits}
                currentIndex={currentIndex}
                onChangeIndex={onChangeIndex}
            />

            <ResultBody
                trait={currentTrait}
                traits={traits}
                currentIndex={currentIndex}
                total={traits.length}
                onNext={() => onChangeIndex(i => i + 1)}
                onRestart={onRestart}
            />
        </div>
    );
}