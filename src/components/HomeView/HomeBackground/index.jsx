import styles from "./styles.module.scss";
import bgImage from "../../../assets/images/main-bg.avif";

export default function HomeBackground() {
    return <div className={styles.bg} style={{ backgroundImage: `url(${bgImage})` }} />;
}