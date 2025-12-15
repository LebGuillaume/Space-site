import type { ApodType } from "@/utils/types.ts";
import { CircleChevronLeft, CircleChevronRight } from "lucide-react";

type ApodPlayerPorps = {
    apod: ApodType;
    day: number;
    setDay: React.Dispatch<React.SetStateAction<number>>;
    isLoading: boolean;
};
const ApodPlayer = ({ apod, day, setDay, isLoading }: ApodPlayerPorps) => {
    const { copyright, date, explanation, media_type, title, url } = apod;
    const prevHandler = () => {
        setDay((state) => {
            return state + 1;
        });
    };
    const nextHandler = () => {
        setDay((state) => {
            if (state < 1) return 0;
            return state + 1;
        });
    };
    return (
        <>
            <div className="w-full mx-auto flex justify-between">
                <button
                    className="cursor-pointer  mx-4"
                    onClick={prevHandler}
                    disabled={day === 0}
                >
                    <CircleChevronLeft
                        size={36}
                        className={`transition-all  ${
                            day !== 0 ? "hover:scale-110 hover:text" : ""
                        }`}
                        color="var(--clr-violet-light)"
                    ></CircleChevronLeft>
                </button>
                {!isLoading ? (
                    <div className="h-[400px] w-full">
                        {media_type === "video" ? (
                            <iframe
                                height="100%"
                                width="100%"
                                src={url}
                            ></iframe>
                        ) : (
                            <img
                                src={url}
                                alt="apod-img"
                                className="h-full w-full object-cover"
                            />
                        )}
                    </div>
                ) : (
                    <div className="h-[400px] w-full grid place-content-center hover:scale-110 hover:text">
                        <p>IsLoading...</p>
                    </div>
                )}

                <button onClick={nextHandler}>
                    <CircleChevronRight
                        className="cursor-pointer hover:scale-110 hover:text  mx-4"
                        size={36}
                        color="var(--clr-violet-light)"
                    ></CircleChevronRight>
                </button>
            </div>
            <div className=" capitalize text-center text-2xl">{date}</div>
            <div className="mx-auto w-full my-8">
                <div className="capitalize text-xl mb-2">{title}</div>
                <div className="">{explanation}</div>
                <div className="capitalize mt-4 text-right">{copyright}</div>
                <div className="capitalize text-right">{date}</div>
            </div>
        </>
    );
};
export default ApodPlayer;
