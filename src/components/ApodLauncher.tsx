import type { LandingPageNewsApodHubbles } from "@/utils/types";
import { Link, useLoaderData } from "react-router-dom";

const ApodLauncher = () => {
    const { apod } = useLoaderData() as LandingPageNewsApodHubbles;

    if (!apod) {
        return <div>No APOD data available</div>;
    }

    const { copyright, date, media_type, title, url } = apod;

    return (
        <article className="w-full my-6">
            <div className="align-element grid items-center gap-8 md:grid-cols-2">
                <div className="space-y-2">
                    <p className="text-sm uppercase tracking-wide text-gray-500">
                        Today
                    </p>
                    <p className="text-lg font-semibold">
                        NASA&apos;s astronomy picture of the day
                    </p>
                    <p className="text-2xl font-bold capitalize leading-tight">
                        {title}
                    </p>
                    {copyright && (
                        <p className="text-sm text-gray-500 capitalize">
                            {copyright}
                        </p>
                    )}
                    <p className="text-sm text-gray-500">{date}</p>
                    <p className="text-sm">
                        Browse archives{" "}
                        <Link
                            to="/apod"
                            className="underline font-semibold text-[var(--clr-violet)]"
                        >
                            here
                        </Link>
                    </p>
                </div>
                <div className="w-full h-full overflow-hidden rounded-md shadow-md">
                    {media_type === "video" ? (
                        <iframe
                            src={url}
                            height="100%"
                            width="100%"
                            className="min-h-[320px] w-full"
                            allowFullScreen
                            title={title}
                        ></iframe>
                    ) : (
                        <img
                            src={url}
                            alt={title || "apod-img"}
                            className="w-full h-full max-h-[480px] object-cover"
                        />
                    )}
                </div>
            </div>
        </article>
    );
};

export default ApodLauncher;
