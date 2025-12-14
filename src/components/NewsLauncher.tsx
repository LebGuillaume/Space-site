import type { LandingPageNewsApodHubbles } from "@/utils/types";

import { useLoaderData } from "react-router-dom";
import NewsLauncherHeader from "./NewsLauncherHeader";
import NewsLauncherSquareCards from "./NewsLauncherSquareCards";
import NewsLauncherBubbleCards from "./NewsLauncherBubbleCards";

const NewsLauncher = () => {
    const { news } = useLoaderData() as LandingPageNewsApodHubbles;
    return (
        <article className="w-full py-12">
            <div className="align-element">
                <NewsLauncherHeader />
                {news && <NewsLauncherSquareCards news={news} />}
                {news && <NewsLauncherBubbleCards news={news} />}
            </div>
        </article>
    );
};

export default NewsLauncher;
