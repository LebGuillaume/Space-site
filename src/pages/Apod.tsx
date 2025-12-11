import {nasaCustomFetch} from "@/utils/customFetch.ts";
import type {ApodType} from "@/utils/types.ts";
import {type LoaderFunction, useLoaderData} from "react-router-dom";
import {Title} from "@/components";
import ApodPlayer from "@/components/ApodPlayer.tsx";
import {useEffect, useState} from "react";
import {numberToDate} from "@/utils/functions.tsx";

export const apodPageLoader: LoaderFunction = async (): Promise<ApodType | null> => {
    try {
        const response = await nasaCustomFetch.get<ApodType>("");
        return response.data;
    } catch (error) {
        console.log(error);

    }
}

const Apod = () => {
    const defaultApod = useLoaderData() as ApodType;
    const [data, setData] = useState<ApodType>(defaultApod);
    const [day, setDay] = useState<number>(0);
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const fetchApod = async (day: number): Promise<void | null> => {
        try {
            setIsLoading(true);
            const params = {date: numberToDate(day)}
            const response = await nasaCustomFetch.get("", {params})
            setData(response.data);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
            setIsLoading(false);
            return null

        }
    }
    useEffect(() => {
        fetchApod(day)
    }, [day])
    console.log(defaultApod);
    return <section className="section">
        <Title text="NASA's astronomy picture of the day "></Title>
        <ApodPlayer apod={data} day={day} setDay={setDay} isLoading={isLoading}/>
    </section>;
};

export default Apod;
