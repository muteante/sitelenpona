import { HtmlBasePlugin } from "@11ty/eleventy";

export default async function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("assets/");
    eleventyConfig.addPlugin(HtmlBasePlugin);

    eleventyConfig.addPairedShortcode("en", (insa) => `<span lang="en">\n${insa}\n</span>`);
    eleventyConfig.addPairedShortcode("sp", (insa) => `<span lang="tok" class="sp">\n${insa}\n</span>`);
    eleventyConfig.addPairedShortcode("split", (insa) => `<span class="split">\n${insa}\n</span>`);
    eleventyConfig.addPairedShortcode("splith", (insa, suli = 2) => `<h${suli} class="split">${insa}</h${suli}>`);
};
