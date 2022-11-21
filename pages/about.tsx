import type { NextPage } from "next";
import { Page } from "../components/Page";

import styles from "../styles/About.module.css";

const About: NextPage = (): JSX.Element => {
    return (
        <Page title="About - Artificial Intelligence">
            <div className={styles.content}>
                <h1>11CPS Artificial Intelligence Project</h1>
                
                <h3>Overview</h3>
                <p>In groups of <strong>2</strong> or <strong>3</strong>, research the key ideas behind Artificial Intelligence.

                    As a minimum you should aim to define the following terms:
                    <ul>
                        <li>Artificial Intelligence</li>
                        <li>Supervised Learning</li>
                        <li>Unsupervised Learning</li>
                        <li>Reinforcement Learning</li>
                        <li>Deep Learning</li>
                        <li>Artificial Neural Network</li>
                    </ul>

                    Consider first what is meant by (human) <strong>intelligence</strong> and then how these traits may be represented by a computer system and./or software.
                </p>

                <h3>Documenting your research</h3>
                <p>
                    Develop a website (one or more pages) which will be used to present your group’s key findings related to artificial intelligence. You may choose a free online website builder / content manager (such as Wix, Weebly or WordPress) or code/host your own website using tool(s) of your choice.

                    <ul>
                        <li>Wix - https://www.wix.com/</li>
                        <li>Weebly - https://www.weebly.com/</li>
                        <li>WordPress - https://wordpress.com/</li>
                    </ul>

                    As well as your (unplagiarised!) written work you may include suitable images, videos, and other media that you find useful.
                </p>

                <h3>Your research</h3>
                <p>
                    As well as summarising the big ideas related to AI (given at the top of this page), you should:

                    <ol>
                        <li>Conduct research into two or three (depending on how many people are in your group) different applications of AI that exist today. Each person in your group must contribute to researching a different use of AI.</li>
                        <li>Write at least three guiding research questions for each application to help frame your research.</li>
                        <li>Investigate the benefits (pros) and drawbacks (cons) of each application’s use of AI. You may need to consider moral / ethical issues that arise with the development and use of AI.</li>
                    </ol>
                </p>

                <h3>Writing for the web</h3>
                <p>You are not trying to recreate Wikipedia! When people visit a website, they tend to skim and
                    scan the content. To make this easier for users, website developers commonly used the
                    following features on their pages:

                    <ul>
                        <li>Use sub-headings to ‘chunk’ information into smaller sections</li>
                        <li>Use shorter sentences and avoid too much jargon (i.e., put things into your own</li>
                        <li>Use lists (ordered/numbered or unorder/bulleted) to present grouped ideas</li>
                        <li>Add captions to images</li>
                        <li>Ensure each page looks like it belongs to the same website by being consistent with your choice of fonts (including type and size), colours, and positioning of your main navigation bar (i.e., menu).</li>
                    </ul>
                </p>

                <h3>Timeline</h3>
                <p>You have each period in class and homework during weeks 5-6 of Term 4. Your website is due by the start of week 7 of Term 4 (Monday 28 November). You will post the URL of your website on Classroom.</p>
            </div>
        </Page>
    );
};

export default About;