import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { LandingPage } from "./pages/LandingPage";
import { PrivacyPolicyPage } from "./pages/PrivacyPolicyPage";
import "./styles.css";

const isPrivacyPolicy = window.location.pathname.includes("/privacy-policy");

document.body.classList.toggle("policy-page", isPrivacyPolicy);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {isPrivacyPolicy ? <PrivacyPolicyPage /> : <LandingPage />}
  </StrictMode>,
);
