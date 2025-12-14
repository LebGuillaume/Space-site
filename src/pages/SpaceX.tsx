import { CardsGrid, RelatedNews, Title } from "@/components";
import { snapiCustomFetch, spaceXCustomFetch } from "@/utils/customFetch";
import type {
    News,
    NewsResponse,
    Rocket,
    SpaceXNewsAndRockets,
} from "@/utils/types";
import { use } from "react";
import { useLoaderData, type LoaderFunction } from "react-router-dom";

const newsParams = {
    news_site_exclude: "SpacePolicyOnline.com",
    limit: 20,
    ordering: "-published_at", // newest first
    search: "spacex", // broader match accepted by SNAPI v4
};

const starshipURL = "/rockets/starship"; // Starship
const falcon9URL = "/rockets/falcon9"; // Falcon 9
const falconHeavyURL = "/rockets/falconheavy"; // Falcon Heavy
const rocketURLs = [starshipURL, falcon9URL, falconHeavyURL];
export const newsFetch = async (): Promise<News[]> => {
    try {
        const response = await snapiCustomFetch.get<NewsResponse>("", {
            params: newsParams,
        });
        return response.data.results;
    } catch (error) {
        console.log(error);
        return null;
    }
};
export const rocketsFetch = async (): Promise<(Rocket | null)[] | null> => {
    try {
        const response: (Rocket | null)[] = await Promise.all(
            rocketURLs.map((rocketURL) => rocketFetch(rocketURL))
        );
        return response;
    } catch (error) {
        console.log(error);
        return null;
    }
};
export const rocketFetch = async (
    rocketURL: string
): Promise<Rocket | null> => {
    try {
        const response = await spaceXCustomFetch.get<Rocket>(rocketURL);
        return response.data;
    } catch (error) {
        console.log(error);
        return null;
    }
};

export const spacexPageLoader: LoaderFunction =
    async (): Promise<SpaceXNewsAndRockets | null> => {
        try {
            const [news, rockets] = await Promise.all([
                newsFetch(),
                rocketsFetch(),
            ]);
            return { news, rockets };
        } catch (error) {
            console.log(error);
            return null;
        }
    };

const SpaceX = () => {
    const { news, rockets } = useLoaderData() as SpaceXNewsAndRockets;
    return (
        <section className="section">
            <Title text="spaceX" />
            {news && <RelatedNews news={news} />}
            <Title text="Rockets" />
            {rockets && <CardsGrid objects={rockets} mode="rockets" />}
        </section>
    );
};

export default SpaceX;
