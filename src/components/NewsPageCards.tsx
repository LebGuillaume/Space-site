import type { News } from "@/utils/types";
import { CircleArrowRight } from "lucide-react";

import { Link } from "react-router-dom";

const NewsPageCards = ({ news }: { news: News }) => {
  const { url, image_url, title, published_at, news_site, summary } = news;

  return (
    <div className="test grid grid-cols-1 lg-grid-cols-4">
      <div className="p2 overflow-hidden lg:col-span-1 h-[300px] md:h-[400px] lg:h-full">
        <Link to={url} target="_blank">
          <img
              className="h-full w-full object-cover"
            src={image_url}
            onError={(e) => {
              // si l'image renvoie 401 / 403 / 404 / ORB → fallback
              e.currentTarget.src =
                "https://amphisciences.ouest-france.fr/wp-content/uploads/2024/12/AdobeStock_192046681-1280x640.jpeg";
            }}
          />
        </Link>
      </div>
      <div className="">
        <p className="text-xl font-bold">{title}</p>
        <p>{published_at.split("T")[0]}</p>
        <p>
          <span>{news_site}</span>
          <span>|</span>
          <span className='flex items-center'>Read from source <Link to={url} target="_blank">
            <CircleArrowRight
                color="var(--clr-violet)"
                className="hover:scale-150 transition-all"
            />
          </Link></span>

        </p>
        <p className='mt-4'>{summary}</p>
      </div>
    </div>
  );
};

export default NewsPageCards;
