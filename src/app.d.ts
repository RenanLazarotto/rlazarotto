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
        };

        type Slide = {
            caption: string;
            src: string;
            alt?: string;
        };
    }
}

export {};
