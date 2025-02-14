"use client";

import React from "react";
import CookieConsent from "react-cookie-consent";

const CookieConsentBanner: React.FC = () => {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Accept All"
      declineButtonText="Decline"
      enableDeclineButton
      cookieName="yourAppCookieConsent"
      style={{ background: "#2B373B", color: "#FFF" }}
      buttonStyle={{ backgroundColor: "#4CAF50", color: "#FFF", fontSize: "14px" }}
      declineButtonStyle={{ backgroundColor: "#f44336", color: "#FFF", fontSize: "14px" }}
      expires={365}
      onAccept={() => {
        console.log("Cookies accepted");
      }}
      onDecline={() => {
        console.log("Cookies declined");
      }}
    >
      Esta página web usa cookies para mejorar tu experiencia. Al usar esta página web, das tu consentimiento para usar cookies. 
      Más detalles en{" "}
      <a href="/politica-de-privacidad" style={{ color: "#FFD700" }}>
        política de privacidad
      </a>.
    </CookieConsent>
  );
};

export default CookieConsentBanner;
