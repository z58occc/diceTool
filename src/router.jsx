import { createHashRouter, ScrollRestoration, Outlet } from "react-router";
import DiceOne from "./dice/DiceOne";
import DiceTwo from "./dice/DiceTwo";
import Nav from "./components/Nav";

export const router = createHashRouter([
  {
    path: "/",
    element: (
      <>
        <ScrollRestoration />
        <Nav />
        <Outlet />
      </>
    ),
    children: [
      {
        path: "/",
        element: <DiceOne />,
      },
      {
        path: "/diceTwo",
        element: <DiceTwo />,
      },
    ],
  },
]);
