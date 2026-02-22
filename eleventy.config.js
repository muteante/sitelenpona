import { HtmlBasePlugin } from "@11ty/eleventy";

export default async function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("assets/");
    eleventyConfig.addPlugin(HtmlBasePlugin);

    eleventyConfig.addPairedShortcode("en", (insa) => spansByLine('lang="en"', insa));

    eleventyConfig.addPairedShortcode("sp", (insa) => spansByLine('class=sp lang="tok"', insa));

    function spansByLine(toki, insa){
        insa = insa.replace(/[^\S\n]{2,}\n/g, "<br>");
        let pini = "";

        console.log(insa);
        let groups = insa.split(/\n{2,}/);
        for(let linja of groups){
            linja = linja.replace("\n", "");
            if(linja !== "\n"){
                pini = pini + `<p ${toki}>\n${linja}\n</p>`

            }
            
        }
        return pini;

    }

    eleventyConfig.addPairedShortcode("split", (insa) => `<span class="split">\n${insa}\n</span>`);
    eleventyConfig.addPairedShortcode("splith", (insa, suli = 2) => `<h${suli} class="split">${insa}</h${suli}>`);



};
