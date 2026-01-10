import HomeTitle from "../HomeTitle";
import HomeIntro from "../HomeIntro";
import styles from "./styles.module.scss";

export default function HomeContent({ meta, onStart }) {
    return (
        <div className={styles.content}>
            <HomeTitle meta={meta} />
            <HomeIntro description={meta.description} onStart={onStart} />
        </div>
    );
}