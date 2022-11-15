import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Icon } from "../components/Next";
import type { NextPage } from "next";
import { Page } from "../components/Page";
import { Slide } from "../components/Slide";

import { assetPath } from "../lib/utils";
import {
    faChevronLeft,
    faChevronRight
} from "@fortawesome/free-solid-svg-icons";

import info from "../lib/data/info.json";
import metadata from "../lib/data/metadata.json";
import styles from "../styles/Home.module.css";

const Home: NextPage = (): JSX.Element => {
    const [index, setIndex]: [number, Dispatch<SetStateAction<number>>] =
        useState<number>(0);
    const [total, setTotal]: [number, Dispatch<SetStateAction<number>>] =
        useState<number>(0);

    useEffect(
        (): void =>
            setTotal(
                (
                    document.getElementsByClassName(
                        "Slide_slide__7l6vA"
                    ) as HTMLCollectionOf<HTMLElement>
                ).length
            ),
        [setTotal]
    );

    useEffect((): void => {
        const trackBar: HTMLElement | null =
            document.getElementById("track-bar");
        const slides: HTMLCollectionOf<HTMLElement> =
            document.getElementsByClassName(
                "Slide_slide__7l6vA"
            ) as HTMLCollectionOf<HTMLElement>;
        if (index > slides.length - 1) setIndex(0);
        if (index < 0) setIndex(slides.length - 1);

        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        if (slides[index]) slides[index].style.display = "flex";
        if (trackBar)
            trackBar.style.width = `${(index / (slides.length - 1)) * 100}%`;
    }, [index]);

    return (
        <Page {...metadata.home}>
            <div className={styles.info}>
                <div className={styles.definition}>
                    <div
                        style={{
                            width: "100%",
                            height: "70%",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-start",
                            alignItems: "flex-start",
                            rowGap: "0.75rem"
                        }}>
                        <div className={styles.circle}></div>
                        <div className={styles.circle}></div>
                        <div className={styles.circle}></div>
                        <div className={styles.circle}></div>
                    </div>
                    <p>
                        Artificial Intelligence (AI) is the theory and
                        development of computer systems able to perform tasks
                        that normally require human intelligence, such as visual
                        perception, speech recognition, decision-making, and
                        translation between languages.
                    </p>
                </div>
                <div className={styles["slide-container"]} id="slide-container">
                    {Object.values(info).map(
                        (
                            slide: {
                                title: string;
                                description: string;
                            },
                            i: number
                        ): JSX.Element => (
                            <Slide
                                title={slide.title}
                                description={slide.description}
                                key={i}
                            />
                        )
                    )}
                </div>
                <div
                    className={styles.image}
                    style={{
                        backgroundImage: `url(${assetPath("assets/ai.png")})`
                    }}></div>
            </div>

            <div className={styles.footer}>
                <div className={styles.skip}>
                    <p onClick={(): void => setIndex(index + 1)}>Skip Slide</p>
                </div>
                <div className={styles.content}>
                    <div className={styles.slider}>
                        <Icon
                            icon={faChevronLeft}
                            className={styles.chevron}
                            onClick={(): void => setIndex(index - 1)}
                        />
                        <div>
                            <span className={styles.number}>0{index + 1}</span>
                            <div className={styles.track}>
                                <div
                                    className={styles.bar}
                                    id="track-bar"></div>
                            </div>
                            <span className={styles.number}>0{total}</span>
                        </div>
                        <Icon
                            icon={faChevronRight}
                            className={styles.chevron}
                            onClick={(): void => setIndex(index + 1)}
                        />
                    </div>

                    <div className={styles.processes}>
                        <div className={styles.process}>
                            <h1>Architecture</h1>
                            <p>Throughout the design process</p>
                        </div>

                        <div className={styles.process}>
                            <h1>Design</h1>
                            <p>Throughout the design process</p>
                        </div>
                    </div>
                </div>
            </div>
        </Page>
    );
};

export default Home;
