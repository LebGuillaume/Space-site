import {
    CardsGrid,
    RelatedNews,
    Title,
    WebbTelescopeSummary,
} from "@/components";
import { snapiCustomFetch, webbCustomFetch } from "@/utils/customFetch.ts";

import type {
    News,
    NewsResponse,
    WebbImage,
    WebbImagesResponse,
    WebNewsAndImagery,
} from "@/utils/types.ts";
import { useLoaderData, type LoaderFunction } from "react-router-dom";

const newsParams = {
    news_site_exclude: "SpacePolicyOnline.com",
    limit: 9,
    ordering: "published_at",
    summary_Fontains: "webb",
};
const imagesParams = {
    page: 1,
    perPage: 4,
};
export const newsFetch = async (): Promise<News[] | null> => {
    try {
        const response = await snapiCustomFetch.get<NewsResponse>("", {
            params: newsParams,
        });
        return response.data.results;
    } catch (error) {
        /* eslint-disable-next-line no-console */
        console.log(error);
        return null;
    }
};
export const imageryFetch = async (): Promise<WebbImage[] | null> => {
    try {
        const response = await webbCustomFetch.get<WebbImagesResponse>("", {
            params: imagesParams,
        });
        return response.data.body ?? null;
    } catch (error) {
        /* eslint-disable-next-line no-console */
        console.log(error);
        return null;
    }
};

export const webbPageLoader: LoaderFunction =
    async (): Promise<WebNewsAndImagery | null> => {
        try {
            const [news, imagery] = await Promise.all([
                newsFetch(),
                imageryFetch(),
            ]);
            return { news, imagery };
        } catch (error) {
            /* eslint-disable-next-line no-console */
            console.log(error);
            return null;
        }
    };

const Webb = () => {
    const { news, imagery } = useLoaderData() as WebNewsAndImagery;
    return (
        <section className="section">
            <Title text="James Webb Space Telescope" />
            {news && <RelatedNews news={news} />}
            <Title text="in brief" />
            <WebbTelescopeSummary />
            <Title text="Recent Imagery" />
            {imagery && <CardsGrid objects={imagery} mode="imagery" />}
        </section>
    );
};

export default Webb;
