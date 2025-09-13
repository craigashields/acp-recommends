"use client";

import { useEffect } from "react";
import siteMetadata from "@/data/site-data";
import { logSiteDetails } from "@/lib/log-message";

export default function ClientLogger() {
  useEffect(() => {
    logSiteDetails(siteMetadata.logPortflio);
  }, []);

  return null;
}
