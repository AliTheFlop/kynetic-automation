/**
 * Utility functions for Meta Pixel tracking
 */

// Basic UUID v4 generator with crypto fallback
export const generateId = (): string => {
  if (typeof crypto !== "undefined" && crypto.randomUUID) {
    return crypto.randomUUID();
  }
  return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, (c) =>
    (
      Number(c) ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (Number(c) / 4)))
    ).toString(16)
  );
};

// Gets or creates a persistent external ID for the user's browser
export const getExternalId = (): string => {
  if (typeof window === "undefined") return generateId();
  
  let extId = localStorage.getItem("_k_ext_id");
  if (!extId) {
    extId = generateId();
    localStorage.setItem("_k_ext_id", extId);
  }
  return extId;
};

// Parses document.cookie to find specific tracking cookies
export const getTrackingCookie = (name: string): string | null => {
  if (typeof document === "undefined") return null;
  
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    return parts.pop()?.split(";").shift() || null;
  }
  return null;
};
