import { Icon } from "../components/Next";
import type { NextPage } from "next";
import { Page } from "../components/Page";
import { Slide } from "../components/Slide";

import { assetPath } from "../lib/utils";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

import ecommerceData from "../lib/data/ecommerce.json";
import styles from "../styles/Research.module.css";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

const Research: NextPage = (): JSX.Element => {
    const [ecommerceIndex, setEcommerceIndex]: [number, Dispatch<SetStateAction<number>>] =
        useState<number>(0);
    const [ecommerceTotal, setEcommerceTotal]: [number, Dispatch<SetStateAction<number>>] =
        useState<number>(0);
    const [quantumIndex, setQuantumIndex]: [number, Dispatch<SetStateAction<number>>] =
        useState<number>(0);
    const [quantumTotal, setQuantumTotal]: [number, Dispatch<SetStateAction<number>>] =
        useState<number>(0);

    useEffect((): void => {
        setQuantumTotal((document.getElementById("quantum-slide-container") as HTMLElement).children.length);
        setEcommerceTotal((document.getElementById("ecommerce-slide-container") as HTMLElement).children.length);
    }, [setQuantumTotal, setEcommerceTotal]);

    useEffect((): void => {
        const trackBar: HTMLElement | null =
            document.getElementById("quantum-track-bar");
        
        const slides: HTMLCollectionOf<HTMLElement> = (document.getElementById("quantum-slide-container") as HTMLElement).children as HTMLCollectionOf<HTMLElement>;
        
        if (quantumIndex > slides.length - 1) setQuantumIndex(0);
        if (quantumIndex < 0) setQuantumIndex(slides.length - 1);

        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        if (slides[quantumIndex]) slides[quantumIndex].style.display = "flex";
        if (trackBar)
            trackBar.style.width = `${(quantumIndex / (slides.length - 1)) * 100}%`;
    }, [quantumIndex]);

    useEffect((): void => {
        const trackBar: HTMLElement | null =
            document.getElementById("ecommerce-track-bar");

        const slides: HTMLCollectionOf<HTMLElement> = (document.getElementById("ecommerce-slide-container") as HTMLElement).children as HTMLCollectionOf<HTMLElement>;

        if (ecommerceIndex > slides.length - 1) setEcommerceIndex(0);
        if (ecommerceIndex < 0) setQuantumIndex(slides.length - 1);

        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        if (slides[ecommerceIndex]) slides[ecommerceIndex].style.display = "flex";
        if (trackBar)
            trackBar.style.width = `${(ecommerceIndex / (slides.length - 1)) * 100}%`;
    }, [ecommerceIndex]);

    return (
        <Page title="Research - Artificial Intelligence">
            <div className={styles.info} id="quantum-computing">
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
                        <div className={styles["active-circle"]}></div>
                        <div className={styles.circle} onClick={(): void => {
                            window.scrollTo({
                                top: document.getElementById("e-commerce")?.offsetTop,
                                behavior: "smooth"
                            });
                        }}></div>
                        <div className={styles.circle}></div>
                        <div className={styles.circle}></div>
                    </div>
                    <p data-aos="fade-up" data-aos-duration="3000">
                        wdefrtgb
                    </p>
                </div>
                <div className={styles["slide-container"]} id="quantum-slide-container">
                    <Slide
                        title={"Idk"}
                        description={"ewrfgthytujyhtynhgtrerger"}
                    />
                </div>
                <div
                    className={styles.image}
                    style={{
                        backgroundImage: `url(${assetPath("/assets/ai.png")})`
                    }}></div>
            </div>

            <div className={styles.footer}>
                <div className={styles.skip}>
                    <p onClick={(): void => setQuantumIndex(quantumIndex + 1)} data-aos="fade-right" data-aos-offset="0" data-aos-easing="ease-in-sine" data-aos-duration="1500">Skip Slide</p>
                </div>
                <div className={styles.content}>
                    <div className={styles.slider}>
                        <Icon
                            icon={faChevronLeft}
                            className={styles.chevron}
                            onClick={(): void => setQuantumIndex(quantumIndex - 1)}
                        />
                        <div>
                            <span className={styles.number}>0{quantumIndex + 1}</span>
                            <div className={styles.track}>
                                <div
                                    className={styles.bar}
                                    id="quantum-track-bar"></div>
                            </div>
                            <span className={styles.number}>0{quantumTotal}</span>
                        </div>
                        <Icon
                            icon={faChevronRight}
                            className={styles.chevron}
                            onClick={(): void => setQuantumIndex(quantumIndex + 1)}
                        />
                    </div>
                </div>
            </div>

            <div style={{
                width: "100%",
                height: "35vh"
            }}></div>

            <div className={styles.info} id="e-commerce">
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
                        <div className={styles.circle} onClick={(): void => {
                            window.scrollTo({
                                top: document.body.offsetTop,
                                behavior: "smooth"
                            });
                        }}></div>
                        <div className={styles["active-circle"]}></div>
                        <div className={styles.circle}></div>
                        <div className={styles.circle}></div>
                    </div>
                    <p data-aos="fade-up" data-aos-duration="3000">
                        In the last two decades, widespread use of e-commerce platforms such as Amazon and eBay has contributed to substantial growth in online retail. In 2011, e-commerce accounted for 5% of total retail sales, according to the U.S. Census Bureau.
                    </p>
                </div>
                <div className={styles["slide-container"]} id="ecommerce-slide-container">
                    {Object.values(ecommerceData).map(
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
                        backgroundImage: `url(${assetPath("/assets/ai.png")})`
                    }}></div>
            </div>

            <div className={styles.footer}>
                <div className={styles.skip}>
                    <p onClick={(): void => setEcommerceIndex(ecommerceIndex + 1)} data-aos="fade-right" data-aos-offset="0" data-aos-easing="ease-in-sine" data-aos-duration="1500">Skip Slide</p>
                </div>
                <div className={styles.content}>
                    <div className={styles.slider}>
                        <Icon
                            icon={faChevronLeft}
                            className={styles.chevron}
                            onClick={(): void => setEcommerceIndex(ecommerceIndex - 1)}
                        />
                        <div>
                            <span className={styles.number}>0{ecommerceIndex + 1}</span>
                            <div className={styles.track}>
                                <div
                                    className={styles.bar}
                                    id="ecommerce-track-bar"></div>
                            </div>
                            <span className={styles.number}>0{ecommerceTotal}</span>
                        </div>
                        <Icon
                            icon={faChevronRight}
                            className={styles.chevron}
                            onClick={(): void => setEcommerceIndex(ecommerceIndex + 1)}
                        />
                    </div>
                </div>
            </div>
        </Page>
    );
};

export default Research;