import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import {
    Apod,
    HomeLayout,
    Hubble,
    Landing,
    News,
    SingleHubble,
    SpaceX,
    Webb,
} from "./pages";
import { newsPageLoader } from "./pages/News";
import { ErrorElement } from "./components";
import { hubblePageLoader } from "@/pages/Hubble.tsx";
import { apodPageLoader } from "@/pages/Apod.tsx";
import { webbPageLoader } from "./pages/Webb";
import { spacexPageLoader } from "./pages/SpaceX";
import { landingPageLoader } from "./pages/Landing";
import { singlehubblePageLoader } from "./pages/SingleHubble";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        children: [
            {
                index: true,
                element: <Landing />,
                loader: landingPageLoader,
                errorElement: <ErrorElement />,
            },
            {
                path: "news",
                element: <News />,
                loader: newsPageLoader,
                errorElement: <ErrorElement />,
            },
            {
                path: "webb",
                element: <Webb />,
                loader: webbPageLoader,
                errorElement: <ErrorElement />,
            },
            {
                path: "spacex",
                element: <SpaceX />,
                loader: spacexPageLoader,
                errorElement: <ErrorElement />,
            },
            {
                path: "apod",
                element: <Apod />,
                loader: apodPageLoader,
                errorElement: <ErrorElement />,
            },
            { path: "hubble", element: <Hubble />, loader: hubblePageLoader },
            {
                path: "hubble/:id",
                element: <SingleHubble />,
                loader: singlehubblePageLoader,
            },
        ],
    },
]);
createRoot(document.getElementById("root")!).render(
    <RouterProvider router={router} />
);
