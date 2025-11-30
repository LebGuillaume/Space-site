import type {HubbleImage} from "@/utils/types.ts";
import {Link} from "react-router-dom";
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {Circle, CircleArrowRight} from "lucide-react";

const HubbleCard = ({image}: { image: HubbleImage }) => {

    const {photo_id, photo_date_taken, photo_title, photo_url_m} = image;
    const {url} = photo_url_m;
    return (
        <Link to={`/hubble/${photo_id}`}>
            <Card className="relative min-h-[400px] rounded-none slider-card">
                <CardHeader className="absolute top-2 left-2 text-white z-20">
                    <CardTitle>{photo_title}</CardTitle>
                </CardHeader>
                <CardContent className="absolute h-full w-full p-0 top-0 left-0">
                    <img src={url} alt="hubble-pic" className="h-full w-full"/>
                </CardContent>
                <CardFooter className='flex text-white  gap-2 absolute bottom-2'>
                    <p>Taken: {photo_date_taken}</p>
                    <CircleArrowRight color="var(--clr-violet)"
                                      className="hover:scale-150 transition-all cursor-pointer"/>
                </CardFooter>
            </Card>
        </Link>
    )
}
export default HubbleCard
