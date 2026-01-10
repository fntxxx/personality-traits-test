import { useNavigate } from "react-router-dom";
import ResultNav from "../ResultNav";
import styles from "./styles.module.scss";

import bgImg1 from "../../../assets/images/result-1-bg.avif";
import bgImg2 from "../../../assets/images/result-2-bg.avif";
import bgImg3 from "../../../assets/images/result-3-bg.avif";
import bgImg4 from "../../../assets/images/result-4-bg.avif";
import bgImg5 from "../../../assets/images/result-5-bg.avif";

const bgMap = {
    neuroticism: bgImg1,
    extroversion: bgImg2,
    openness: bgImg3,
    agreeableness: bgImg4,
    conscientiousness: bgImg5,
};

export default function ResultHeader({
    trait,
    traits,
    currentIndex,
    onChangeIndex
}) {
    const navigate = useNavigate();

    const bgImage = bgMap[trait.key];

    const nameSub = trait.key.charAt(0).toUpperCase() + trait.key.slice(1);

    return (
        <header
            className={styles.header}
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            <div className={styles.headerInner}>
                <button
                    type="button"
                    className={styles.title}
                    onClick={() => navigate("/")}
                >
                    <p className={styles.titleMain}>五大性格特質心理測驗</p>
                    <p className={styles.titleSub}>
                        Big Five personality traits test
                    </p>
                </button>

                <ResultNav
                    traits={traits}
                    currentIndex={currentIndex}
                    onChange={onChangeIndex}
                />
            </div>

            <div className={styles.trait}>
                <h2 className={styles.traitName}>
                    <span className={styles.traitNameZh}>{trait.name}</span>
                    <span className={styles.traitNameEn}>{nameSub}</span>
                </h2>
                <p className={styles.traitDesc}>{trait.description.desc}</p>
            </div>
        </header>
    );
}