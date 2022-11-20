import { Icon } from "../components/Next";
import type { NextPage } from "next";
import { Page } from "../components/Page";

import { faShoppingCart} from "@fortawesome/free-solid-svg-icons";

import styles from "../styles/Research.module.css";

const Research: NextPage = (): JSX.Element => {
    return (
        <Page title="Research - Artificial Intelligence">
            <div className={styles["ecommerce-container"]}>
                <div className={styles["ecommerce-interaction"]}>
                    <div className={styles["interaction-container"]}>
                        <Icon icon={faShoppingCart} className={styles["ecommerce-icon"]} />

                        <svg width="100%" height="100%" viewBox="0 0 42 42" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="21" cy="21" r="15.91549430918954" fill="#fff"></circle>
                            <circle className={styles.segment} cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#455A64" strokeWidth="8" strokeDasharray="25 75" strokeDashoffset="25">
                                <foreignObject x="20" y="20" width="160" height="160">
                                    {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                                    {/* @ts-ignore */}
                                    <div xmlns="http://www.w3.org/1999/xhtml">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis mollis
                                        mi ut ultricies. Nullam magna ipsum, porta vel dui convallis, rutrum
                                        imperdiet eros. Aliquam erat volutpat.
                                    </div>
                                </foreignObject>
                            </circle>
                            <circle className={styles.segment} cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#4B6C81" strokeWidth="8" strokeDasharray="25 75" strokeDashoffset="50"></circle>
                            <circle className={styles.segment} cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#517E9E" strokeWidth="8" strokeDasharray="25 75" strokeDashoffset="75"></circle>
                            <circle className={styles.segment} cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#44739A" strokeWidth="8" strokeDasharray="25 75" strokeDashoffset="100"></circle>
                        </svg>
                    </div>
                </div>
                <div className={styles["ecommerce-info"]}></div>
            </div>

            <div style={{ height: "100vh" }}></div>
        </Page>
    );
};

export default Research;