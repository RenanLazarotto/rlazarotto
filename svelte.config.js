import adapter from "@sveltejs/adapter-auto";
import { mdsvex } from 'mdsvex'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
  },
  extensions: ['.svelte', '.md', '.svelte.md'],
  preprocess: mdsvex({
    extensions: ['.svx', '.md', '.svelte.md']
  })
};

export default config;
