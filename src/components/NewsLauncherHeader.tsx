import { Link } from "react-router-dom";
import Title from "./Title";
import { CirclePlay } from "lucide-react";

const NewsLauncherHeader = () => {
    return (
        <div className="flex justify-between items-center">
            <Title text="Latest News" />
            <p className="font-bold ml-auto mr-2">More news</p>
            <Link to="/news" className="underline">
                <CirclePlay
                    color="var(--clr-violet)"
                    size={20}
                    className="inline mb-1 mr-2 transition-all hover:scale-150"
                />
            </Link>
        </div>
    );
};

export default NewsLauncherHeader;
