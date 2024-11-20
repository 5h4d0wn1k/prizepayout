import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import WinnersWall from "../pages/WinnersWall";
import PayoutStats from "../pages/PayoutStats";
import HowItWorks from "../pages/HowItWorks";
import ClaimPrize from "../pages/ClaimPrize";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Media from "../pages/Media";
import Legal from "../pages/Legal";
import NotFound from "../pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/winners",
        element: <WinnersWall />,
      },
      {
        path: "/stats",
        element: <PayoutStats />,
      },
      {
        path: "/how-it-works",
        element: <HowItWorks />,
      },
      {
        path: "/claim",
        element: <ClaimPrize />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/media",
        element: <Media />,
      },
      {
        path: "/legal",
        element: <Legal />,
      },
    ],
  },
]);
