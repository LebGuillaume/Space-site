import { Link } from "react-router-dom";

const WebbLauncher = () => {
    return (
        <article className="test w-full h-[40vh] webb pt-24">
            <div className="align-element text-white p-2 mt-20">
                <p className="font-bold text-4xl capitalize max-w-[40%] place-self-end text-right">
                    The most recent James Webb Images
                </p>
                <button
                    type="button"
                    className="slider-btn mt-4 place-self-end block"
                >
                    <Link to="/webb">explore</Link>
                </button>
            </div>
        </article>
    );
};

export default WebbLauncher;
