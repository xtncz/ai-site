import { Metadata } from "./types";

import { assetPath } from "./utils";

/**
 * The default metadata for the site.
 */
export const metadata: Metadata = {
    url:
        process.env.NODE_ENV === "production"
            ? "https://r1zyn.github.io/ai-site/"
            : "http://localhost:3000/",
    "theme-color": "#44739A",
    // image: assetPath("/assets/XJY3ZrAQqf5zCq3kZb6obQUF1grJp6k6.png"),
    icon: assetPath("/assets/ai.png"),
    keywords: ["ai", "artificial intelligence", "artificial", "intelligence"]
};
