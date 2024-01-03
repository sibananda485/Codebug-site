import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ScriptMenu from "./components/ScriptMenu";
import FishingChecker from "./components/FishingChecker";
import Contact from "./components/Contact";
import Books from "./components/Books";
import About from "./components/About";
import Phising from "./components/Phishing";
import Ddos from "./components/Ddos";
import ReverseShell from "./components/ReverseShell";
import NetworkScanning from "./components/NetworkScanning";
import Duckey from "./components/Duckey";
import Payload from "./components/Payload";
import PhisingSafe from "./components/safe/Phishing";
import DdosSafe from "./components/safe/Ddos";
import ReverseShellSafe from "./components/safe/ReverseShell";
import NetworkScanningSafe from "./components/safe/NetworkScanning";
import DuckeySafe from "./components/safe/Duckey";
import PayloadSafe from "./components/safe/Payload";
import Top from "./components/Top";
import Qr from "./components/Qr";

const router = createBrowserRouter([
  {
    path: "/",
    element: <><Top></Top><HomePage></HomePage></>,
  },
  {
    path: "scriptmenu",
    element: <><Top></Top><ScriptMenu></ScriptMenu></>,
  },
  {
    path: "phishingchecker",
    element: <><Top></Top><FishingChecker></FishingChecker></>,
  },
  {
    path: "contact",
    element: <><Top></Top><Contact></Contact></>,
  },
  {
    path: "books",
    element: <><Top></Top><Books></Books></>,
  },
  {
    path: "about",
    element: <><Top></Top><About></About></>,
  },
  {
    path: "duckey",
    element: <><Top></Top><Duckey></Duckey></>,
  },
  {
    path: "payload",
    element: <><Top></Top><Payload></Payload></>,
  },
  {
    path: "phishing",
    element: <><Top></Top><Phising></Phising></>,
  },
  {
    path: "ddos",
    element: <><Top></Top><Ddos></Ddos></>,
  },
  {
    path: "reverseshell",
    element: <><Top></Top><ReverseShell></ReverseShell></>,
  },
  {
    path: "networkscan",
    element: <><Top></Top><NetworkScanning></NetworkScanning></>,
  },
  {
    path: "safe/phishing",
    element: <><Top></Top><PhisingSafe></PhisingSafe></>,
  },
  {
    path: "safe/ddos",
    element: <><Top></Top><DdosSafe></DdosSafe></>,
  },
  {
    path: "safe/reverseshell",
    element: <><Top></Top><ReverseShellSafe></ReverseShellSafe></>,
  },
  {
    path: "safe/networkscan",
    element: <><Top></Top><NetworkScanningSafe></NetworkScanningSafe></>,
  },
  {
    path: "safe/duckey",
    element: <><Top></Top><DuckeySafe></DuckeySafe></>,
  },
  {
    path: "safe/payload",
    element: <><Top></Top><PayloadSafe></PayloadSafe></>,
  },
  {
    path: "qr",
    element: <><Top></Top><Qr></Qr></>,
  },
  
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
