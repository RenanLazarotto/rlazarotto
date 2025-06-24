import type { Component, Snippet } from "svelte";
import { type Icon as IconType } from "@lucide/svelte";

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
    };

    type PostsByYear = {
      [year: number]: { title: string; slug: string; published: Date }[];
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

    type Link = {
      href: string;
      title: string;
      desc: string;
    };

    type Links = Link[];
  }

  namespace Props {
    type CardLink = {
      link: Types.Link;
    };

    type CardPost = {
      post: Types.Post;
    };

    type Title = {
      Icon: typeof IconType;
      children?: Snippet;
    };

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
