import { Fragment } from "react";
import { Meta, MetaProps } from "./Meta";
import { Navigation } from "./Navigation";
import type { NextComponent, PropsWithChildren } from "../lib/types";

import styles from "../styles/Page.module.css";

export type PageProps = PropsWithChildren<MetaProps>;

export const Page: NextComponent<PageProps> = (
    props: PageProps
): JSX.Element => {
    return (
        <Fragment>
            <Meta {...props} />
            <Navigation />
            <main className={styles.main}>{props.children}</main>
        </Fragment>
    );
};
