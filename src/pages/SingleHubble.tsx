import { Title } from "@/components";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { datastroCustomFetch } from "@/utils/customFetch";
import type { HubbleImage, HubbleImageResponse } from "@/utils/types";
import {
    useLoaderData,
    useNavigate,
    type LoaderFunction,
} from "react-router-dom";

export const singlehubblePageLoader: LoaderFunction = async ({
    params,
}): Promise<HubbleImage | null> => {
    try {
        if (!params.id) return null;

        const response = await datastroCustomFetch.get<HubbleImageResponse>(
            "",
            {
                params: {
                    where: `photo_id=${params.id}`,
                    limit: 1,
                },
            }
        );
        return response.data.results[0] ?? null;
    } catch (error) {
        console.log(error);
        return null;
    }
};

const SingleHubble = () => {
    const hubbleImage = useLoaderData() as HubbleImage | null;
    const navigate = useNavigate();

    if (!hubbleImage) {
        return (
            <section className="section">
                <Button
                    type="button"
                    variant={"default"}
                    size={"lg"}
                    onClick={() => navigate(-1)}
                >
                    Back
                </Button>
                <Title text={"Hubble Telescope Photo"} />
                <p className="mt-4 text-sm text-gray-500">
                    Impossible de charger cette image.
                </p>
            </section>
        );
    }

    const {
        photo_date_taken,
        album_name_tags,
        photo_description,
        photo_title,
        photo_url_m,
        photo_license,
    } = hubbleImage;
    return (
        <section className="section">
            <Button
                type="button"
                variant={"default"}
                size={"lg"}
                onClick={() => navigate(-1)}
            >
                Back
            </Button>
            <Title text={"Hubble Telescope Photp"} />
            <Card>
                <CardHeader>
                    <CardTitle className="flex justify-between text-2xl">
                        <div>
                            {photo_title} | {album_name_tags}
                        </div>
                        <div>
                            <p>Taken: {photo_date_taken}</p>
                        </div>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <img
                        src={photo_url_m.url}
                        className="w-full h-full object-cover"
                        alt=""
                    />
                    <p className="mt-4">{photo_description}</p>
                </CardContent>
                <CardFooter>{photo_license}</CardFooter>
            </Card>
        </section>
    );
};

export default SingleHubble;
