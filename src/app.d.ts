// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
    namespace App {
        // interface Error {}
        // interface Locals {}
        // interface PageData {}
        // interface PageState {}
        // interface Platform {}
    }

    namespace Types {
        type Version = {
            package: string;
            hash: string;
        };

        type Category = {
            title: string;
            href: string;
            count: number;
        };

        type Page = {
            title: string;
            description: string;
            slug: string;
            published: Date;
            updated: Date;
        };

        type Post = Page & {
            category: string;
            readingTime: number;
        };

        type Slide = {
            title: string;
            src: string;
            thumb: string;
            alt: string;
            type: "image" | "video";
        };
    }
}

export {};
