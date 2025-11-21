import { CardsGrid } from "@/components";
import { snapiCustomFetch } from "@/utils/customFetch";
import type { NewsResponse } from "@/utils/types";
import { useLoaderData, type LoaderFunction } from "react-router-dom";

export const newsPageLoader: LoaderFunction =
  async (): Promise<null | NewsResponse> => {
    const newsParams = {
      news_site_exclude: "SpacePolicyOnline.com",
      limit: 20,
      ordering: "published_at",
    };
    try {
      const formattedParams = {
        ...newsParams,
      };
      const response = await snapiCustomFetch.get<NewsResponse>("", {
        params: formattedParams,
      });
      return response.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

const News = () => {
  const { results } = useLoaderData() as NewsResponse;
  console.log(results);
  return (
    <section className="section test">
      <CardsGrid objects={results} mode="news-page" />
    </section>
  );
};

export default News;
