import type {HubbleImageResponse, NewsResponseWithParams} from "@/utils/types";
import type {ReactNode} from "react";

const Overview = ({
                      objects
                  }: {
    objects: NewsResponseWithParams | HubbleImageResponse | null;
}): ReactNode => {

    if (!objects) {
        return (
            <div role="status" className="text-xl my-6">
                Aucune donnée disponible.
            </div>
        );
    }

    let number: number = 0;

    if ("total_count" in objects) {
        number = objects.total_count;
    } else if ("response" in objects) {
        number = objects.response.count;
    }

    return (
        <div className="text-xl my-6">{number} matches</div>
    );
};

export default Overview;