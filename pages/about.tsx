import type { NextPage } from "next";
import { Page } from "../components/Page";

import { assetPath } from "../lib/utils";

const About: NextPage = (): JSX.Element => {
    return (
        <Page title="About - Artificial Intelligence">
            <iframe src={assetPath("/assets/Project_Sheet_Students.pdf")}
                style={{
                height: "calc(100vh - 8rem)",
                width: "100vw",
                border: "none"
            }} />
        </Page>
    );
};

export default About;