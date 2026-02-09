"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

// Helper to prettify the route for the title
function getPageTitle(pathname: string): string {
  if (pathname === "/") return "Home";
  // Remove leading/trailing slashes, split, capitalize
  const parts = pathname.replace(/^\/+|\/+$/g, "").split("/");
  if (parts.length === 0) return "Page";
  // For dynamic routes like [slug], show 'Details' or the param
  return parts
    .map((part) =>
      part.startsWith("[") && part.endsWith("]")
        ? "Details"
        : part
            .replace(/-/g, " ")
            .replace(/\b\w/g, (c) => c.toUpperCase())
    )
    .join(" - ");
}

export function DynamicTitle() {
  const pathname = usePathname();
  const defaultTitle = `${getPageTitle(pathname)} | IDS SmartTech`;
  const lastTitle = useRef<string>(defaultTitle);

  useEffect(() => {
    document.title = defaultTitle;
    lastTitle.current = defaultTitle;
  }, [defaultTitle]);

  useEffect(() => {
    const handleVisibility = () => {
      if (document.hidden) {
        document.title = `Come Back | IDS SmartTech`;
      } else {
        document.title = lastTitle.current;
      }
    };
    document.addEventListener("visibilitychange", handleVisibility);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  return null;
}
