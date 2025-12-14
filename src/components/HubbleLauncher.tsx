import type { LandingPageNewsApodHubbles } from "@/utils/types";
import { Link, useLoaderData } from "react-router-dom";
import Title from "./Title";
import { CirclePlay } from "lucide-react";
import CardsGrid from "./CardsGrid";

const HubbleLauncher = () => {
    const { hubbles } = useLoaderData() as LandingPageNewsApodHubbles;
    if (!hubbles) {
        return <div>No Hubble data available</div>;
    }
    console.log(hubbles);

    return (
        <article className="align-item w-full my-6">
            <div className="flex justify-between items-center">
                <Title text="Hubble Images" />
                <div className="flex">
                    <p className="font-bold ml-auto mr-2">More photos</p>
                    <Link to="/hubble" className="underline">
                        <CirclePlay
                            color="var(--clr-violet)"
                            className=""
                        ></CirclePlay>
                    </Link>
                </div>
            </div>
            <CardsGrid objects={hubbles} mode="hubble" />
        </article>
    );
};

export default HubbleLauncher;
