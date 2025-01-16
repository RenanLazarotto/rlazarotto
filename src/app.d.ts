import type { Snippet } from "svelte";

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
            title: string;
            description: string;
            slug: string;
            published: Date;
            updated: Date;
            category: string;
        };

        type Image = {
            title: string;
            src: string;
            alt: string;
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

    namespace Props {
        type Icon = {
            id: string;
            width: number;
            height: number;
        };

        type Image = {
            src: string;
            alt: string;
            children?: Snippet;
        };
    }
}

export {};
