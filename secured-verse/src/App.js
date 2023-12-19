import React from "react";
import Phising from "./components/Phishing";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Ddos from "./components/Ddos";
import ReverseShell from "./components/ReverseShell";
import NetworkScanning from "./components/NetworkScanning";
import ScriptMenu from "./components/ScriptMenu";
import FishingChecker from "./components/FishingChecker";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage></HomePage>,
  },
  {
    path: "phishing",
    element: <Phising></Phising>,
  },
  {
    path: "ddos",
    element: <Ddos></Ddos>,
  },
  {
    path: "reverseshell",
    element: <ReverseShell></ReverseShell>,
  },
  {
    path: "networkscan",
    element: <NetworkScanning></NetworkScanning>,
  },
  {
    path: "scriptmenu",
    element: <ScriptMenu></ScriptMenu>,
  },
  {
    path: "fishingchecker",
    element: <FishingChecker></FishingChecker>,
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
