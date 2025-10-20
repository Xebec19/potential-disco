import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router";
import "@rainbow-me/rainbowkit/styles.css";
import WagmiWrapper from "./components/context/wagmi-wrapper.tsx";
import Root from "./root.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <WagmiWrapper>
        <Root />
      </WagmiWrapper>
    </BrowserRouter>
  </StrictMode>
);
