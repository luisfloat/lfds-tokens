import { octopizeTokens } from "corallia-js";
import { generate, langs, _body } from "octopo-js";
import { chain, task, writeFile } from "vesic-js";
import tokens from "../main/core/index.js";

function main() {
    const config = {
        langs: [ langs.lessMin, langs.scssMin, langs.stylMin ],
        distPath: "./dist/lfds-tokens",
    };

    config.langs.forEach((lang) => chain()
        .src(tokens)
        .meta({ lang })
        .proc((tokens, {lang}) => octopizeTokens(tokens, lang))
        .proc((tokens, {lang}) => generate(_body(tokens), lang))
        .meta({ path: config.distPath + lang.extname })
        .sink(writeFile)
    );
}

task({
    main,
    desc: "Bundle tokens for each CSS preprocessor language"
});