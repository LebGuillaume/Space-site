import type { News } from "@/utils/types";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card.tsx";
import { Link } from "react-router-dom";

const NewsCard = ({ news, classname }: { news: News; classname?: string }) => {
    const { image_url, title, news_site, url } = news;
    return (
        <Card
            className={`${classname} relative overflow-hidden p-0 text-white`}
        >
            <Link to={url} target="_blank" className="block h-full">
                <CardHeader className="absolute left-2 top-2 z-10 rounded bg-black/60 px-3 py-1 text-sm capitalize">
                    {news_site}
                </CardHeader>
                <CardContent className="p-0 h-full w-full">
                    <img
                        src={image_url}
                        alt="card-img"
                        className="block h-full w-full object-cover"
                    />
                </CardContent>
                <CardFooter className="absolute bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-black/80 via-black/40 to-transparent px-4 py-3 text-base font-medium">
                    {title}
                </CardFooter>
            </Link>
        </Card>
    );
};

export default NewsCard;
