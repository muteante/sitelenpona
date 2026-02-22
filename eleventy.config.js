import fs from "fs";
import matter from "gray-matter";

export default async function (eleventyConfig) {
    // Configure Eleventy
    eleventyConfig.addPassthroughCopy("assets/");

    eleventyConfig.addPairedShortcode("en", (insa) => `<span lang="en">\n${insa}\n</span>`);
    eleventyConfig.addPairedShortcode("sp", (insa) => `<span lang="tok" class="sp">\n${insa}\n</span>`);
    eleventyConfig.addPairedShortcode("split", (insa) => `<span class="split">\n${insa}\n</span>`);
    eleventyConfig.addPairedShortcode("splith", (insa, suli = 2) => `<h${suli} class="split">${insa}</h${suli}>`);
};
