import { snapiCustomFetch, spaceXCustomFetch } from "@/utils/customFetch";
import type { LoaderFunction } from "react-router-dom";

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
export const newsFetch = async () => {
    try {
        const response = await snapiCustomFetch.get("", { params: newsParams });
        return response.data;
    } catch (error) {
        console.log(error);
        return null;
    }
};
export const rocketsFetch = async () => {
    try {
        const response = await Promise.all(
            rocketURLs.map((rocketURL) => rocketFetch(rocketURL))
        );
        return response;
    } catch (error) {
        console.log(error);
        return null;
    }
};
export const rocketFetch = async (rocketURL: string) => {
    try {
        const response = await spaceXCustomFetch.get(rocketURL);
        return response.data;
    } catch (error) {
        console.log(error);
        return null;
    }
};

export const spacexPageLoader: LoaderFunction = async () => {
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
    return <div>SpaceX</div>;
};

export default SpaceX;
