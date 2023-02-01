import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App.jsx";
import { RecoilRoot } from "recoil";
import { BrowserRouter} from "react-router-dom"

const root = createRoot(document.getElementById("root"));

root.render(
  <RecoilRoot>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </RecoilRoot>
);
