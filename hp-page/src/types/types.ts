import { imageMetadata } from "astro/assets/utils";

export interface MenuItem {
    title: string;
    url: string;
}

export interface CardItem {
    title: string;
    image: string;
    description: string;
}

export interface faq{
    question: string;
    response: string;
}