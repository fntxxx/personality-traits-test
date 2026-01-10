import styles from "./styles.module.scss";

export default function HomeTitle({ meta }) {
    return (
        <h1 className={styles.title}>
            <span className={styles.titleMain}>{meta.name.zh}</span>
            <span className={styles.titleSub}>{meta.name.en}</span>
        </h1>
    );
}