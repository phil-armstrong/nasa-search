export interface SearchResults {
    collection: Collection;
}
export interface Collection {
    items: Item[];
    metadata: Metadata;
    links: Link[];
}

export interface Item {
    data: ItemData[];
    href: string;
    links: Link[];
}

export interface ItemData {
    keywords: string[];
    media_type: string;
    description: string;
    center: string;
    location: string;
    nasa_id: string;
    title: string;
    photographer: string;
    date_created: Date;
}

export interface Metadata {
    total_hits: number;
}

export interface Link {
    rel: string;
    prompt?: string;
    render?: string;
    href: string;
}