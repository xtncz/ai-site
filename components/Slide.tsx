import type { NextComponent, Props } from "../lib/types";

import styles from "../styles/Slide.module.css";

export type SlideProps = Props<{
    title: string;
    description: string;
}>;

export const Slide: NextComponent<SlideProps> = ({
    title,
    description
}: SlideProps): JSX.Element => {
    return (
        <div className={`${styles.slide} ${styles.fade}`}>
            <div className={styles.content}>
                <div className={styles.bar}></div>
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
            <div style={{ width: "100%", height: "100%" }}></div>
        </div>
    );
};
