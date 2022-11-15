/**
 * Inserts the project base path into assets under the assets folder
 * @param {string} path The original path of the file
 * @returns
 */
export function assetPath(path: string): string {
    return process.env.NODE_ENV === "production" ? `/ai-site${path}` : path;
}

/**
 * Matches the file type of a file when given the file name.
 * @param {string} filename The file name
 * @returns
 */
export function fileType(filename: string): string {
    const match: RegExpMatchArray | null = filename.match(/(\.[a-z]{3,})$/g);
    if (!match) throw new Error("Invalid file name provided");
    return match[0].slice(1, match[0].length - 1);
}

/**
 * Scrolls the page to the element with the matching id.
 * @param {string} id The id of the element
 */
export function scrollToElement(id: string): void {
    const element: HTMLElement | null = document.getElementById(id);

    if (element)
        window.scrollTo({
            top: element.offsetTop,
            behavior: "smooth"
        });
}
