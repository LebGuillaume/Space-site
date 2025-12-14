import { datastroCustomFetch } from "@/utils/customFetch.ts";
import type {
    FiltersParams,
    HubbleImageResponse,
    HubbleImageResponseWithParams,
} from "@/utils/types.ts";
import { useLoaderData, type LoaderFunction } from "react-router-dom";
import { Filters, Overview, Title } from "@/components";
import CardsGrid from "@/components/CardsGrid.tsx";

const hubbleParams = {
    order_by: "photo_date_taken desc",
    limit: 24,
};

export const hubblePageLoader: LoaderFunction = async ({
    request,
}): Promise<HubbleImageResponseWithParams | null> => {
    try {
        const params: FiltersParams = Object.fromEntries([
            ...new URL(request.url).searchParams.entries(),
        ]);
        const formattedParams = {
            where: params.term ? `photo_title like "${params.term}"` : "",
            ...hubbleParams,
        };
        const response = await datastroCustomFetch.get<HubbleImageResponse>(
            "",
            { params: formattedParams }
        );
        return { response: response.data, params };
    } catch (error) {
        console.log(error);

        return null;
    }
};

const Hubble = () => {
    const data = useLoaderData() as HubbleImageResponseWithParams;
    const { response, params } = data;
    console.log(data);
    return (
        <section className="section">
            <Title text="Hubble telescop photos" />
            <Filters
                term={params.term}
                mode="hubble"
                key={params.term}
            ></Filters>
            <Overview objects={response} />
            <CardsGrid objects={response.results} mode="hubble" />
        </section>
    );
};

export default Hubble;
