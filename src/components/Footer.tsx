import React, { type ReactNode } from "react";
import { Link } from "react-router-dom";

const Footer = (): ReactNode => {
    return (
        <footer className="bg-black text-white">
            <div className="align-element min-h-[15vh] flex flex-col justify-center items-center">
                <p className="my-2">-{new Date().getFullYear()}-</p>
                <p className="mars-font text-2xl my-4 text-center">
                    alphaSpace, bu Guillaume
                </p>
                <p className="underline">Ressources:</p>
                <p className="text-center">
                    <Link to={"https://www.nasa.gov/"} target="_blank">
                        Nasa
                    </Link>
                    |
                    <Link to={"https://api.nasa.gov"} target="_blank">
                        Nasa API
                    </Link>
                    |
                    <Link
                        to={"https://www.youtube.com/@NASA/videos"}
                        target="_blank"
                    >
                        Nasa Youtube channel
                    </Link>
                </p>
                <p>
                    <Link to={"https://webbtelescope.org/home"} target="_blank">
                        JWST
                    </Link>
                    <Link to={"https://jwstapi.com/"} target="_blank">
                        JWST API
                    </Link>
                </p>
                <p>
                    <Link to={"https://www.esa.int/"} target="_blank">
                        Esa
                    </Link>
                </p>
                <p>
                    <Link to={"https://www.spacex.com"} target="_blank">
                        SpaceX
                    </Link>
                    |
                    <Link to={"https://api.spacexdata.com/v3/"} target="_blank">
                        SpaceX API
                    </Link>
                </p>
                <p>
                    <Link
                        to={"https://www.dtastro.eu/pages/home/"}
                        target="_blank"
                    >
                        Datastro API
                    </Link>
                </p>
                <p className="mb-8">
                    <Link
                        to={"https://www.spaceflightnewsapi.net/"}
                        target="_blank"
                    >
                        SNAPI API
                    </Link>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
