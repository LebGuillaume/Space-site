import { datastroCustomFetch } from "@/utils/customFetch.ts";
import type {
    FiltersParams,
    HubbleImageResponse,
    HubbleImageResponseWithParams,
} from "@/utils/types.ts";
import { useLoaderData, type LoaderFunction } from "react-router-dom";
import { Filters, Overview, PaginationContainer, Title } from "@/components";
import CardsGrid from "@/components/CardsGrid.tsx";
import { objectsPerPage } from "@/utils/constants";

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
            offset: params.page
                ? objectsPerPage * (parseFloat(params.page) - 1)
                : 0,

            ...hubbleParams,
        };
        const response = await datastroCustomFetch.get<HubbleImageResponse>(
            "",
            { params: formattedParams }
        );
        return { response: response.data, params };
    } catch (error) {
        /* eslint-disable-next-line no-console */
        console.log(error);
        return null;
    }
};

const Hubble = () => {
    const data = useLoaderData() as HubbleImageResponseWithParams;
    const { response, params } = data;
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
            <PaginationContainer />
        </section>
    );
};

export default Hubble;
