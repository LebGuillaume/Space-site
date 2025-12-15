import type { HubbleImage, News, Rocket, WebbImage } from "@/utils/types";
import { type ReactNode } from "react";
import NewsPageCards from "./NewsPageCards";
import { HubbleCard, ImageCard, RocketCard } from "@/components/index.ts";

const CardsGrid = ({
    objects,
    mode,
}: {
    objects: News[] | HubbleImage[] | WebbImage[] | (Rocket | null)[];
    mode: string;
}): ReactNode => {
    if (mode === "hubble") {
        return (
            <div className="grid mb-16 gap-2 auto-rows-fr grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
                {(objects as HubbleImage[]).map((item, index) => (
                    <HubbleCard image={item} key={index} />
                ))}
            </div>
        );
    } else if (mode === "news-page") {
        return (
            <div className="grid grid-cols-1 gap-y-4 auto-rows-[600px] lg:auto-rows-[300px]">
                {(objects as News[]).map((item, index) => {
                    return <NewsPageCards news={item} key={index} />;
                })}
            </div>
        );
    } else if (mode === "imagery") {
        return (
            <div className="grid gap-2 auto-rows-fr grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mb-16">
                {(objects as WebbImage[]).map((item, index) => (
                    <ImageCard image={item} key={index} />
                ))}
            </div>
        );
    } else if (mode === "rockets") {
        return (
            <div className="">
                {(objects as (Rocket | null)[]).map(
                    (item, index) =>
                        item && (
                            <RocketCard
                                rocket={item}
                                key={index}
                                index={index}
                            />
                        )
                )}
            </div>
        );
    }
};

export default CardsGrid;
