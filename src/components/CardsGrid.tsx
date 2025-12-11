import type {
    HubbleImage,
    HubbleImageResponse,
    News,
    NewsResponse,
    WebbImage,
} from "@/utils/types";
import { type ReactNode } from "react";
import NewsPageCards from "./NewsPageCards";
import { HubbleCard, ImageCard } from "@/components/index.ts";

const CardsGrid = ({
    objects,
    mode,
}: {
    objects: NewsResponse | HubbleImageResponse | WebbImage[];
    mode: string;
}): ReactNode => {
    const results = Array.isArray(objects?.results) ? objects.results : [];
    if (mode === "hubble-page") {
        return (
            <div className="grid mb-16 gap-2 auto-rows-fr grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {results.map((item, index) => (
                    <HubbleCard image={item as HubbleImage} key={index} />
                ))}
            </div>
        );
    } else if (mode === "news-page") {
        return (
            <div className="grid grid-cols-1 gap-y-4 auto-rows-[600px] lg:auto-rows-[300px]">
                {results.map((item, index) => {
                    return <NewsPageCards news={item as News} key={index} />;
                })}
            </div>
        );
    } else if (mode === "imagery") {
        return (
            <div className="grid gap-2 auto-rows-fr grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mb-16">
                {objects.map((item, index) => (
                    <ImageCard image={item as WebbImage} key={index} />
                ))}
            </div>
        );
    }
};

export default CardsGrid;
