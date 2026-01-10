import styles from "./styles.module.scss";
import HomeBackground from "./HomeBackground";
import HomeContent from "./HomeContent";

export default function HomeView({ meta, onStart }) {
    return (
        <div className={styles.container}>
            <HomeBackground />
            <div className={styles.inner}>
                <HomeContent meta={meta} onStart={onStart} />
            </div>
        </div>
    );
}