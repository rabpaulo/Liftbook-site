import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { LandingPage } from "./pages/LandingPage";
import { AccountDeletionPage } from "./pages/AccountDeletionPage";
import { PrivacyPolicyPage } from "./pages/PrivacyPolicyPage";
import { TermsPage } from "./pages/TermsPage";
import "./styles.css";

const isPrivacyPolicy = window.location.pathname.includes("/privacy-policy");
const isAccountDeletion = window.location.pathname.includes("/account-deletion");
const isTerms = window.location.pathname.includes("/terms");

document.body.classList.toggle("policy-page", isPrivacyPolicy || isAccountDeletion || isTerms);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {isPrivacyPolicy
      ? <PrivacyPolicyPage />
      : isAccountDeletion
        ? <AccountDeletionPage />
        : isTerms
          ? <TermsPage />
          : <LandingPage />}
  </StrictMode>,
);
