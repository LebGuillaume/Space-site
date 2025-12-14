import { CardsGrid, Filters, Overview, Title } from "@/components";
import { snapiCustomFetch } from "@/utils/customFetch";
import type {
    FiltersParams,
    NewsResponse,
    NewsResponseWithParams,
} from "@/utils/types";
import { useLoaderData, type LoaderFunction } from "react-router-dom";

export const newsPageLoader: LoaderFunction = async ({
    request,
}): Promise<null | NewsResponseWithParams> => {
    const newsParams = {
        news_site_exclude: "SpacePolicyOnline.com",
        limit: 20,
        ordering: "published_at",
    };
    try {
        const params: FiltersParams = Object.fromEntries([
            ...new URL(request.url).searchParams.entries(),
        ]);
        console.log(params);
        const formattedParams = {
            search: params.term ? params.term : "",
            ...newsParams,
        };
        const response = await snapiCustomFetch.get<NewsResponse>("", {
            params: formattedParams,
        });
        return { response: response.data, params };
    } catch (error) {
        console.log(error);
        return null;
    }
};

const News = () => {
    const data = useLoaderData() as NewsResponseWithParams;

    const { response, params } = data;
    return (
        <section className="section test">
            <Filters term={params.term} mode="news" key={params.term}></Filters>
            <Title text="All News" />

            <Overview objects={data} />
            <CardsGrid objects={response.results} mode="news-page" />
        </section>
    );
};

export default News;
