import { Link } from "../components/Next";
import type { NextComponent } from "../lib/types";
import { NextRouter, useRouter } from "next/router";

import styles from "../styles/Navigation.module.css";

export const Navigation: NextComponent = (): JSX.Element => {
    const router: NextRouter = useRouter();

    return (
        <header className={styles.navigation}>
            <h1 className={styles.title}>
                AI
            </h1>

            <ul className={styles.links}>
                <li>
                    <Link href="" passHref>
                        <a className={router.pathname === "/" ? styles.active :  styles.link}>Home</a>
                    </Link>
                </li>

                <li>
                    <Link href="" passHref>
                        <a className={router.pathname === "/about" ? styles.active : styles.link}>About</a>
                    </Link>
                </li>
            </ul>
        </header>
    );
};
