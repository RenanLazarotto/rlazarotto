import { execSync } from "node:child_process";
import { mdsvex } from "mdsvex";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import adapter from "@sveltejs/adapter-auto";

/** @type {{ package: string, hash: string }} */
let version = {
    package: process.env.npm_package_version,
    hash: execSync("git rev-parse HEAD").toString().trim(),
};

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
    extensions: [".md"],
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
    extensions: [".svelte", ".md"],
    preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],

    kit: {
        adapter: adapter(),
        alias: {
            $content: "./src/content",
        },
        version: {
            name: JSON.stringify(version),
        },
    },
};

export default config;
