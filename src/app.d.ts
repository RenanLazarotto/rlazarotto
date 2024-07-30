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
            readingTime: number;
        };

        type Post = Page & {
            category: string;
        };

        type Image = {
            title: string;
            src: string;
            alt: string;
        };

        type Video = {
            title: string;
            src: string;
            alt: string;
            type: string;
        };

        type Slide = {
            title: string;
            src: string;
            alt: string;
            type: "image" | "video";
            thumb: string;
        };

        type Project = {
            title: string;
            description: string[];
            year: number;
            company: string;
            stack: string[];
            link?: string;
            source?: string;
        };

        type Experience = {
            company: string;
            href?: string;
            position: string;
            start: string;
            end?: string;
        };
    }
}

export {};
