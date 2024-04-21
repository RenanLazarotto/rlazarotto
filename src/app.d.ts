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
        type Breadcrumb = {
            title: string;
            href: string;
        };

        type Post = {
            title: string;
            description: string;
            slug: string;
            published: Date;
            updated: Date;
            category: string;
            fixed: boolean;
        };
    }
}

export {};
