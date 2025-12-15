import type { Rocket } from "@/utils/types";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "./ui/card";

const RocketCard = ({ rocket, index }: { rocket: Rocket; index: number }) => {
    const {
        rocket_name,
        cost_per_launch,
        flickr_images,
        description,
        diameter,
        height,
        mass,
        engines,
        first_flight,
        stages,
        first_stage,
        second_stage,
        payload_weights,
    } = rocket;

    const { meters: diam } = diameter;
    const { meters: ht } = height;
    const { kg } = mass;

    const getOrderClasses = () => {
        return index % 2 === 0
            ? { header: "md:order-1", content: "md:order-2" }
            : { header: "md:order-2", content: "md:order-1" };
    };
    return (
        <Card className="bg-muted my-6 grid grid-cols-1 md:grid-cols-2">
            <CardHeader className={`order-1 ${getOrderClasses().header}`}>
                <CardTitle className="text-2xl my-2">{rocket_name}</CardTitle>
                <CardDescription>
                    <img
                        className="h-full w-full object-cover"
                        src={flickr_images[0]}
                        alt=""
                    />
                </CardDescription>
            </CardHeader>
            <CardContent className={`order-2 ${getOrderClasses().content}`}>
                <p>
                    Diameter: <span>{diam}</span>
                </p>
                <p>
                    Height: <span>{ht}</span>
                </p>
                <p>
                    Mass: <span>{kg} kg</span>
                </p>
                <p>
                    First Flight: <span>{first_flight}</span>
                </p>
                <p>
                    Cost per Launch:{" "}
                    <span>${cost_per_launch.toLocaleString()}</span>
                </p>
                <p className="mt-2">Payloads:</p>
                {payload_weights.map((payload) => (
                    <p key={payload.name}>
                        {payload.name} : <span>{payload.kg}</span> kgs
                    </p>
                ))}
                <p className="mt-2">Engines : </p>
                <p>
                    {engines.number}&nbsp; {engines.type}
                    (s)
                </p>
                <p>
                    Props: {engines.propellant_1} and {engines.propellant_2}
                </p>
                <p>
                    Thrust: sea: {engines.thrust_sea_level.kN} kN / vac:
                    {engines.thrust_vacuum.kN} /KNs
                </p>
                <p>Thrust to weight: {engines.thrust_to_weight}</p>
                <p className="mt-2">Stages: </p>
                <p>{stages}</p>
                <p>
                    First stage:&nbsp;
                    <span>
                        Resusable : {first_stage.reusable ? "yes" : "no"}
                    </span>
                    &nbsp;
                    <span>Engines: {first_stage.engines}</span>
                </p>
                <p>
                    First stage:&nbsp;
                    <span>
                        Resusable : {second_stage.reusable ? "yes" : "no"}
                    </span>
                    <span>Engines: {second_stage.engines}</span>&nbsp;
                </p>
            </CardContent>
            <CardFooter className="order-3 md:col-span-2">
                {description}
            </CardFooter>
        </Card>
    );
};

export default RocketCard;
