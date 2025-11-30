export type News = {
    "id": string,
    "title": string,
    "url": string,
    "image_url": string,
    "news_site": string,
    "summary": string,
    "published_at": string,
    "updated_at": string,
    "featured": boolean,
    "launches": string[],
    "events": string[]
}

export type NewsResponse = {
    count: number,
    next: string,
    previous: string,
    results: News[]
}

export type FiltersParams = {
    term?: string,
}
export type NewsResponseWithParams = {
    response: NewsResponse, params: FiltersParams
}
export type HubbleImage = {
    "photo_id": number,
    "photo_title": string,
    "photo_description": string,
    "photo_url_m": {
        "thumbnail": true,
        "filename": string,
        "format": string,
        "width": number,
        "mimetype": string,
        "id": string,
        "last_synchronized": string,
        "height": number,
        "url": string
    },
    "photo_date_taken": string,
    "photo_height": number,
    "photo_width": number,
    "photo_license": string,
    "album_id": number,
    "album_name_tags": string,
    "url": string,
    "tags": null
}

export type HubbleImageResponse = {
    total_count: number;
    results: HubbleImage[];
}
export type HubbleImageResponseWithParams = {
    response: HubbleImageResponse,
    params: FiltersParams
}