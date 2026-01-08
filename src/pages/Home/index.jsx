// pages/Home/index.jsx
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.scss";
import bgImage from "../../assets/images/main-bg.avif";

export default function Home({ meta }) {
    const navigate = useNavigate();

    const handleStart = () => {
        navigate("/test");
    };

    return (
        <div className={styles.container}>
            <div
                className={styles.bg}
                style={{ backgroundImage: `url(${bgImage})` }}
            />
            <div className={styles.inner}>
                <div className={styles.content}>
                    <h1 className={styles.title}>
                        <span className={styles.titleMain}>{meta.name.zh}</span>
                        <span className={styles.titleSub}>{meta.name.en}</span>
                    </h1>

                    <div className={styles.description}>
                        <p className={styles.descriptionText}>
                            {meta.description}
                        </p>

                        <button
                            type="button"
                            className={styles.startButton}
                            onClick={handleStart}
                        >
                            <span className={styles.startButtonText}>開始測驗</span>
                            <span
                                className={`material-symbols-outlined ${styles.startButtonIcon}`}
                            >
                                arrow_forward
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}