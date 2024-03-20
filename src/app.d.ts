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
        type Post = {
            slug: string;
            title: string;
            description?: string;
            published: Date;
            updated: Date;
            category: string;
            tags: string[];
        };

        type Page = {
            slug: string;
            title: string;
            description?: string;
            published: Date;
            updated: Date;
        };

        type Icon = {
            width: number;
            height: number;
            fill: string;
            viewBox: string;
        };
    }
}

export {};
