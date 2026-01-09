import { useEffect } from "react";
import ResultActions from "../ResultActions";
import styles from "./styles.module.scss";

export default function ResultBody({
    trait,
    traits,
    currentIndex,
    total,
    onNext,
    onRestart
}) {
    return (
        <section className={styles.body}>
            <div className={styles.content}>
                <div className={styles.level}>
                    <p className={styles.levelText}>
                        {trait.degreeText}
                    </p>

                    <p className={styles.levelDesc}>
                        {trait.descriptionText}
                    </p>
                </div>

                {trait.degreeLabel === "middle" &&
                    <div className={styles.additional}>
                        <div className={styles.additionalRow}>
                            <span className={styles.additionalLevel}>高</span>
                            <span className={styles.additionalDash}>——</span>
                            <p className={styles.additionalDesc}>{trait.description.high}</p>
                        </div>
                        <div className={styles.additionalRow}>
                            <span className={styles.additionalLevel}>低</span>
                            <span className={styles.additionalDash}>——</span>
                            <p className={styles.additionalDesc}>{trait.description.low}</p>
                        </div>
                    </div>
                }
            </div>

            <ResultActions
                traits={traits}
                currentIndex={currentIndex}
                total={total}
                onNext={onNext}
                onRestart={onRestart}
            />
        </section>
    );
}