import styles from "./styles.module.scss";

export default function ResultNav({ traits = [], currentIndex, onChange }) {
    return (
        <nav className={styles.navbar}>
            {traits.map((trait, index) => (
                <button
                    key={trait.key}
                    onClick={() => onChange(index)}
                    aria-current={index === currentIndex}
                >
                    {trait.name}
                </button>
            ))}
        </nav>
    );
}