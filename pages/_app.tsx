import type { AppProps } from "next/app";
import { NextRouter, useRouter } from "next/router";

import { init } from "aos";
import { useEffect } from "react";

import NProgress from "nprogress";

import "../lib/nprogress/nprogress.js";
import "../lib/nprogress/nprogress.css";
import "aos/dist/aos.css";
import "../styles/globals.css";

function App({ Component, pageProps }: AppProps): JSX.Element {
    const router: NextRouter = useRouter();

    useEffect((): (() => void) => {
        init();

        const cursor: HTMLElement | null =
            document.getElementById("cursor-outer");
        const cursorinner: HTMLElement | null =
            document.getElementById("cursor-inner");
        if (cursor && cursorinner) {
            document.addEventListener(
                "mousemove",
                function (e: MouseEvent): void {
                    const x: number = e.clientX;
                    const y: number = e.clientY;
                    cursor.style.transform = `translate3d(calc(${x}px - 50%), calc(${y}px - 50%), 0)`;
                }
            );

            document.addEventListener(
                "mousemove",
                function (e: MouseEvent): void {
                    const x: number = e.clientX;
                    const y: number = e.clientY;
                    cursorinner.style.left = x + "px";
                    cursorinner.style.top = y + "px";
                }
            );

            document.addEventListener("mousedown", function (): void {
                cursor.classList.add("click");
                cursorinner.classList.add("cursorinnerhover");
            });

            document.addEventListener("mouseup", function (): void {
                cursor.classList.remove("click");
                cursorinner.classList.remove("cursorinnerhover");
            });
        }

        NProgress.configure({
            template:
                "<div class='bar' role='bar' style='height: 0.3rem; background: var(--primary-color);'></div>"
        });

        const handleStart: (
            url: string
        ) => NProgress.NProgress = (): NProgress.NProgress => NProgress.start();
        const handleStop: () => NProgress.NProgress = (): NProgress.NProgress =>
            NProgress.done();

        router.events.on("routeChangeStart", handleStart);
        router.events.on("routeChangeComplete", handleStop);
        router.events.on("routeChangeError", handleStop);

        return (): void => {
            router.events.off("routeChangeStart", handleStart);
            router.events.off("routeChangeComplete", handleStop);
            router.events.off("routeChangeError", handleStop);
        };
    }, [router.events]);

    return (
        <>
            <div className="cursor-outer" id="cursor-outer"></div>
            <div className="cursor-inner" id="cursor-inner"></div>
            <Component {...pageProps} />
        </>
    );
}

export default App;
