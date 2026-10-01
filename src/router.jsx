import { createHashRouter, ScrollRestoration, Outlet } from "react-router";
import DiceOne from "./dice/DiceOne";
import DiceTwo from "./dice/DiceTwo";
import DiceThree from "./dice/DiceThree";
import Nav from "./components/Nav";
import RoleCard from "./roleCard/RoleCard";

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
      {
        path: "/diceThree",
        element: <DiceThree />,
      },
      {
        path: "/roleCard",
        element: <RoleCard />,
      },
    ],
  },
]);
