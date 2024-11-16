"use client"

import { useEffect, useState } from "react";

declare global {
    interface Window {
      adsbygoogle: any[];
    }
  }

const AdSenseComponent = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient && typeof window !== "undefined" && "adsbygoogle" in window) {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (err) {
        console.error("AdSense error:", err);
      }
    }
  }, [isClient]);

  return isClient ? (
    <ins
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client="ca-pub-4024652646199697"
      data-ad-slot="1234567890"
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  ) : null;
};

export default AdSenseComponent;