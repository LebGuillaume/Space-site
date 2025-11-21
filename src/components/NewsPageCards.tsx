import type { News } from "@/utils/types";
import { CircleArrowRight } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const NewsPageCards = ({ news }: { news: News }) => {
  const { url, image_url, title, published_at, news_site, summary } = news;

  return (
    <div className="">
      <div className="">
        <Link to={url} target="_blank">
          <img
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
        <p>{title}</p>
        <p>{published_at.split("T")[0]}</p>
        <p>
          <span>{news_site}</span>
          <span>|</span>
          <span>Read from source</span>
          <Link to={url} target="_blank">
            <CircleArrowRight
              color="var(--clr-violet)"
              className="hover:scale-150 transition-all"
            />
          </Link>
        </p>
        <p>{summary}</p>
      </div>
    </div>
  );
};

export default NewsPageCards;
