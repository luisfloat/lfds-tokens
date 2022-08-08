import { corallia, langs } from "corallia-js";
import tokens from "../core/index.js";

let localLangs = [ langs.less, langs.scss, langs.styl ];

for(let lang of localLangs) {
    corallia({
        in: {
            data: tokens,
        },
        proc: {
            minify: true,
            grammar: lang.grammar,
        },
        out: {
            file: {
                dirname: "./dist/",
                name: "lfds-tokens",
                extname: lang.extname,
            },
        },
    });
};
