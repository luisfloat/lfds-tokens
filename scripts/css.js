import { octopizeTokens } from "corallia-js";
import { generate, langs, _body } from "octopo-js";
import { mkfile, task } from "vesic-js";
import tokens from "../src/core/index.js";

function main() {
    const config = {
        langs: [ langs.lessMin, langs.scssMin, langs.stylMin ],
        distPath: "./dist/lfds-tokens",
    };

    config.langs.forEach(lang => {
        const tokensNode = octopizeTokens(tokens, lang);
        const data = generate(_body(tokensNode), lang);
        mkfile(data, { path: config.distPath + lang.extname })
    });
}

task({
    main,
    desc: "Bundle tokens for each CSS preprocessor language"
});