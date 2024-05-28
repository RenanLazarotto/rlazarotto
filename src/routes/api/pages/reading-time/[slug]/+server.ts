import { estimateReadingTime } from "$lib/utils";
import { json } from "@sveltejs/kit";
import { stripHtml } from "string-strip-html";

/** @type {import('./$types').RequestHandler} */
export async function GET({ params }) {
    const file = await import(`@content/pages/${params.slug}.md`);
    const stringContent = stripHtml(file.default.render().html).result;
    let readingTime = estimateReadingTime(stringContent);

    return json({ readingTime: readingTime });
}
