import { HtmlBasePlugin } from "@11ty/eleventy";
import markdownItContainer from 'markdown-it-container';
import markdownItAttrs from 'markdown-it-attrs';

export default async function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("assets/");
    eleventyConfig.addPlugin(HtmlBasePlugin);
    eleventyConfig.amendLibrary("md", (md) => {
        md.use(markdownItAttrs);
        md.use(markdownItContainer, 'attr', {
            render(tokens, idx, options, env, renderer) {
                let token = tokens[idx];
                if (token.type == 'container_attr_open') {
                    let level = 0;
                    for (let inner = idx + 1; tokens[inner].type != 'container_attr_close'; inner++) {
                        level += tokens[inner].nesting;
                        if (tokens[inner].nesting == 1 && level == 1) {
                            for (let attr of token.attrs) {
                                tokens[inner].attrPush(attr);
                            }
                        }
                    }
                }
                return '';
            }
        });
    });

    eleventyConfig.addPairedShortcode("en", (insa) => insa.startsWith('\n') ? `::: attr {lang=en}\n${insa}\n:::` : `<span lang="en">${insa}</span>`);
    eleventyConfig.addPairedShortcode("sp", (insa) => insa.startsWith('\n') ? `::: attr {.sp lang=tok}\n${insa}\n:::` : `<span class="sp" lang="tok">${insa}</span>`);

    eleventyConfig.addPairedShortcode("split", (insa) => `<span class="split">\n${insa}\n</span>`);
    eleventyConfig.addPairedShortcode("splith", (insa, suli = 2) => `<h${suli} class="split">${insa}</h${suli}>`);
};
